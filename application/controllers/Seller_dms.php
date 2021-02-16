<?php 
defined('BASEPATH') or exit('No direct script access allowed');

class Seller_dms extends CI_Controller
{
    public $seller_session_data;
	public function __construct()
	{
		parent::__construct();

		if (empty($this->session->userdata("seller_logged_in"))) {

			$this->session->set_userdata('redirect_url', uri_string());
			redirect(base_url('signin'));
		} else {
			$this->seller_session_data = $this->session->userdata('seller_logged_in');
			if ($this->seller_session_data['role'] !== ROLE_IMPORTER_EXPORTER) {
				redirect(base_url());
			}
        }
        
		$this->load->model('seller_model');
		$this->load->model('shipment_document_master');
		$this->load->model('shipment_documents');
		$this->load->helper('cookie');
		$this->load->library(array('session', 'form_validation', 'email'));
    }
    
    public function index($request_id){

        $data['leftmenuActive'] = "";
		$data['leftSubMenuActive'] = "";
        $requestDetails = $this->seller_model->getRequirmentDetails($request_id, $this->seller_session_data['company_id']);
        $documetTypeList = $this->shipment_documents->getDocumentList($request_id, $this->seller_session_data['company_id'],['transiction'=>['All',$requestDetails->transaction],'user_type'=>['All','IE']]);
        $data['page'] = 'frontend/seller/dms/index';
		$data['sidebar'] = 'frontend/components/sidebar_dashboard';
		$data['requestDetails'] = $requestDetails;
		$data['documetTypeList'] = $documetTypeList;
        // vdebug($documetTypeList);
		$this->load->view('frontend/layout_main', $data);
    }

    public function create($request_id,$document_type){
        $data['leftmenuActive'] = "";
		$data['leftSubMenuActive'] = "";
        $requestDetails = $this->seller_model->getRequirmentDetails($request_id, $this->seller_session_data['company_id']);
        $documetTypeList = $this->shipment_document_master->getList(['transiction'=>['All',$requestDetails->transaction],'user_type'=>['All','IE']]);
        $data['page'] = "frontend/seller/dms/$document_type";
		$data['sidebar'] = 'frontend/components/sidebar_dashboard';
		$data['requestDetails'] = $requestDetails;
        $data['documetTypeList'] = $documetTypeList;
		$documentData = $this->shipment_documents->getRecord($request_id, $document_type, $this->seller_session_data['company_id']);
		
		if(empty($documentData)){
			$documentData = $this->getFormatedData($document_type,$requestDetails);	
		}else{
			$documentData->items = json_decode($documentData->items);
			$documentData->other_details = json_decode($documentData->other_details);
		}
		
		if($this->input->post()){
			$totalQty=0.00;
			$invoice_amount = 0.00;
			foreach($this->input->post('items') as $item){
				$totalQty += $item['qty'];
				$invoice_amount += $item['qty'] * $item['price'];
			}

			if(isset($_FILES['signature']['tmp_name'])){
			//	$signFile = addslashes(file_get_contents($_FILES['signature']['tmp_name']));
				$imageFileType = strtolower(pathinfo($_FILES['signature']['tmp_name'],PATHINFO_EXTENSION));

				// Convert to base64 
				$image_base64 = base64_encode(file_get_contents($_FILES['signature']['tmp_name']) );
				$signFile = 'data:image/'.$imageFileType.';base64,'.$image_base64;
			}else{
				$signFile = $documentData->signature;
			}
			
			$saveData=[
				'invoice_number'=>$this->input->post('invoice_number'),
				'invoice_date'=>getMysqlDateFormat($this->input->post('invoice_date')),
				'currency'=>$this->input->post('currency'),
				'invoice_amount'=>$invoice_amount,
				'total_qty'=>$totalQty,
				'items'=>json_encode($this->input->post('items')),
				'other_details'=>json_encode($this->input->post('other_details')),
				'for_consignor_company'=>$this->input->post('for_consignor_company'),
				'signature'=>$signFile,
				'issue_place'=>$this->input->post('issue_place'),
				'issue_date'=>getMysqlDateFormat($this->input->post('issue_date')),
			];
			if(isset($documentData->id)){
				//update
				
				$update = $this->shipment_documents->update($documentData->id,$saveData);
			}else{
				//insert
				
					$saveData['request_id'] = $request_id;
					$saveData['company_id'] = $this->seller_session_data['company_id'];
					$saveData['document_type'] = $document_type;
					$saveData['created_by'] = $this->seller_session_data['id'];
				$update =	$this->shipment_documents->insert($saveData);
			}
			$message = '';
			if($update){
				$message ='<div class="alert alert-success alert-dismissible fade show" role="alert">
				Document saved!
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				  <span aria-hidden="true">&times;</span>
				</button>
			  </div>';
			}else{
				$message ='<div class="alert alert-danger alert-dismissible fade show" role="alert">
				Document not saved please try again.
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				  <span aria-hidden="true">&times;</span>
				</button>
			  </div>';
			}
			$this->session->set_flashdata('message', $message);
			redirect($_SERVER['HTTP_REFERER']);
		}
		
		$data['documentData'] =(object)$documentData;
        $this->load->view('frontend/layout_main', $data);
    }

	private function getFormatedData($document_type,$requestDetails){
		$formatedData=[];

		switch($document_type){
			case 'bill-of-lading':
				
				break;
				
			case 'certificate-of-origin':
				break;

			case 'commercial-invoice':
				$formatedData['invoice_number']="";
				$formatedData['invoice_date']="";
				$formatedData['currency']=$requestDetails->transaction_currency;
				$formatedData['invoice_amount']=0.00;
				$formatedData['total_qty']=0.00;
				$formatedData['created_by']="";
				$formatedData['signature']="";
				$formatedData['issue_place']="";
				$formatedData['issue_date']="";
				$formatedData['for_consignor_company']=$requestDetails->consignor_company_name;
				$otherConsignee = $requestDetails->is_other_consignee == "Yes" ? $requestDetails->consignee_other : null;
				$other_details = [];
				$other_details=[
					'exporter'=>"$requestDetails->consignor_company_name\n$requestDetails->consignor_address_line_1 $requestDetails->consignor_address_line_2\n$requestDetails->consignor_city_name Pincode:$requestDetails->consignor_pincode\nContact Person: $requestDetails->consignor_name\nEmail: $requestDetails->consignor_email Phone: $requestDetails->consignor_phone" ,
					'ice_no'=>"",
					"psn_no"=>"",
					"so_no"=>"",
					"so_date"=>"",
					"po_no"=>"",
					"po_date"=>"",
					"consignee"=>"$requestDetails->consignee_company_name\n$requestDetails->consignee_address_line_1 $requestDetails->consignee_address_line_2\n$requestDetails->consignee_city_name Pincode:$requestDetails->consignee_pincode\nContact Person: $requestDetails->consignee_name\nEmail: $requestDetails->consignee_email Phone: $requestDetails->consignee_phone",
					"consignee_other"=>$requestDetails->is_other_consignee == "Yes" ? "$otherConsignee->company_name\n$otherConsignee->address_line_1 $otherConsignee->address_line_2\n$otherConsignee->city_name Pincode:$otherConsignee->pincode\nContact Person: $otherConsignee->name\nEmail: $otherConsignee->email Phone: $otherConsignee->phone" : "",
					"pre_carriage"=>"",
					"place_of_receipt"=>"",
					"country_o"=>"",
					"country_d",
					"vessel_aircraft_voyage_no"=>"",
					"port_of_l"=>$requestDetails->port_loading_name,
					"port_of_d"=>$requestDetails->port_discharge_name,
					"final_destination"=>"",
					"terms_method_payment"=>"Delivery Term:$requestDetails->delivery_term_name\nPayment Term:$requestDetails->payment_term\nUnder Drawback S/bill All Industry Schedule Tariff\nLetter Of Credit No & date",
					"payment_term"=>$requestDetails->payment_term,
					"shipping_bill_no"=>"",
					"shipping_bill_dated"=>"",
					"bol_awb_no"=>"",
					"bol_awb_dated"=>"",
					"shipping_mark_to"=>$requestDetails->consignee_company_name,
					"shipping_mark_from"=>$requestDetails->consignor_company_name,
					"shipping_mark_package_no"=>"",
					"shipping_mark_weight"=>"",
				];
				
				$formatedData['other_details']=(object) $other_details;
				break;
			case 'container-packing-list':
				break;
				
			case 'custom-invoice':
				$formatedData['invoice_number']="";
				$formatedData['invoice_date']="";
				$formatedData['currency']=$requestDetails->transaction_currency;
				$formatedData['invoice_amount']=0.00;
				$formatedData['total_qty']=0.00;
				$formatedData['created_by']="";
				$formatedData['signature']="";
				$formatedData['issue_place']="";
				$formatedData['issue_date']="";
				$formatedData['for_consignor_company']=$requestDetails->consignor_company_name;
				$otherConsignee = $requestDetails->is_other_consignee == "Yes" ? $requestDetails->consignee_other : null;
				$other_details = [];
				$other_details=[
					'exporter'=>"$requestDetails->consignor_company_name\n$requestDetails->consignor_address_line_1 $requestDetails->consignor_address_line_2\n$requestDetails->consignor_city_name Pincode:$requestDetails->consignor_pincode\nContact Person: $requestDetails->consignor_name\nEmail: $requestDetails->consignor_email Phone: $requestDetails->consignor_phone" ,
					'ice_no'=>"",
					"psn_no"=>"",
					"so_no"=>"",
					"so_date"=>"",
					"po_no"=>"",
					"po_date"=>"",
					"consignee"=>"$requestDetails->consignee_company_name\n$requestDetails->consignee_address_line_1 $requestDetails->consignee_address_line_2\n$requestDetails->consignee_city_name Pincode:$requestDetails->consignee_pincode\nContact Person: $requestDetails->consignee_name\nEmail: $requestDetails->consignee_email Phone: $requestDetails->consignee_phone",
					"consignee_other"=>$requestDetails->is_other_consignee == "Yes" ? "$otherConsignee->company_name\n$otherConsignee->address_line_1 $otherConsignee->address_line_2\n$otherConsignee->city_name Pincode:$otherConsignee->pincode\nContact Person: $otherConsignee->name\nEmail: $otherConsignee->email Phone: $otherConsignee->phone" : "",
					"pre_carriage"=>"",
					"place_of_receipt"=>"",
					"country_o"=>"",
					"country_d",
					"vessel_aircraft_voyage_no"=>"",
					"port_of_l"=>$requestDetails->port_loading_name,
					"port_of_d"=>$requestDetails->port_discharge_name,
					"final_destination"=>"",
					"terms_method_payment"=>"Delivery Term:$requestDetails->delivery_term_name\nPayment Term:$requestDetails->payment_term\nUnder Drawback S/bill All Industry Schedule Tariff\nLetter Of Credit No & date",
					"payment_term"=>$requestDetails->payment_term,
					"shipping_bill_no"=>"",
					"shipping_bill_dated"=>"",
					"bol_awb_no"=>"",
					"bol_awb_dated"=>"",
					"shipping_mark_to"=>$requestDetails->consignee_company_name,
					"shipping_mark_from"=>$requestDetails->consignor_company_name,
					"shipping_mark_package_no"=>"",
					"shipping_mark_weight"=>"",
				];
				
				$formatedData['other_details']=(object) $other_details;
				break;

			case 'declaration-of-origin':
				break;

			case 'evd-form':
				break;

			case 'forwarding-insructions':
				break;

			case 'gatt-declaration':
				break;

			case 'new-sli':
				break;

			case 'non-dg-declaration':
				break;

			case 'packing-list':
				$formatedData['invoice_number']="";
				$formatedData['invoice_date']="";
				$formatedData['currency']=$requestDetails->transaction_currency;
				$formatedData['invoice_amount']=0.00;
				$formatedData['total_qty']=0.00;
				$formatedData['created_by']="";
				$formatedData['signature']="";
				$formatedData['issue_place']="";
				$formatedData['issue_date']="";
				$formatedData['for_consignor_company']=$requestDetails->consignor_company_name;
				$otherConsignee = $requestDetails->is_other_consignee == "Yes" ? $requestDetails->consignee_other : null;
				$other_details = [];
				$other_details=[
					'exporter'=>"$requestDetails->consignor_company_name\n$requestDetails->consignor_address_line_1 $requestDetails->consignor_address_line_2\n$requestDetails->consignor_city_name Pincode:$requestDetails->consignor_pincode\nContact Person: $requestDetails->consignor_name\nEmail: $requestDetails->consignor_email Phone: $requestDetails->consignor_phone" ,
					'ice_no'=>"",
					"psn_no"=>"",
					"so_no"=>"",
					"so_date"=>"",
					"po_no"=>"",
					"po_date"=>"",
					"consignee"=>"$requestDetails->consignee_company_name\n$requestDetails->consignee_address_line_1 $requestDetails->consignee_address_line_2\n$requestDetails->consignee_city_name Pincode:$requestDetails->consignee_pincode\nContact Person: $requestDetails->consignee_name\nEmail: $requestDetails->consignee_email Phone: $requestDetails->consignee_phone",
					"consignee_other"=>$requestDetails->is_other_consignee == "Yes" ? "$otherConsignee->company_name\n$otherConsignee->address_line_1 $otherConsignee->address_line_2\n$otherConsignee->city_name Pincode:$otherConsignee->pincode\nContact Person: $otherConsignee->name\nEmail: $otherConsignee->email Phone: $otherConsignee->phone" : "",
					"pre_carriage"=>"",
					"place_of_receipt"=>"",
					"country_o"=>"",
					"country_d",
					"vessel_aircraft_voyage_no"=>"",
					"port_of_l"=>$requestDetails->port_loading_name,
					"port_of_d"=>$requestDetails->port_discharge_name,
					"final_destination"=>"",
					"terms_method_payment"=>"Delivery Term:$requestDetails->delivery_term_name\nPayment Term:$requestDetails->payment_term\nUnder Drawback S/bill All Industry Schedule Tariff\nLetter Of Credit No & date",
					"payment_term"=>$requestDetails->payment_term,
					"shipping_bill_no"=>"",
					"shipping_bill_dated"=>"",
					"bol_awb_no"=>"",
					"bol_awb_dated"=>"",
					"shipping_mark_to"=>$requestDetails->consignee_company_name,
					"shipping_mark_from"=>$requestDetails->consignor_company_name,
					"shipping_mark_package_no"=>"",
					"shipping_mark_weight"=>"",
				];
				
				$formatedData['other_details']=(object) $other_details;
				break;

			case 'sdf-form':
				break;

			case 'self-sead-declaration':
				break;

			case 'sli-format':
				break;

			case 'vgm-declaration':
				break;
		}

		return $formatedData;

	}

}