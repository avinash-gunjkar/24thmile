<?php
defined('BASEPATH') OR exit('No direct script access allowed');
ini_set('display_errors', 1);
class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
    
    public function __construct() {
		parent::__construct (); 
		//Models
       	$this->load->model('login_model');
        $this->load->model('packing_model');
        $this->load->model('freight_model');
        
    }
    
	public function index()
	{
		$company_id = 9;
		$filter = [
			//'status'=>['1', '2', '3', '4', '7', '8'],//for FS
			'quote_status'=>['1', '2', '3', '4', '6', '7', '8'], // for FF
			'mode_id'=>'3',
			'transaction'=>'Export',
		];
		header('content-type:application/json');
		echo json_encode($this->freight_model->get_rfc_list($company_id,0,10,$filter,'','id ASC'));
		die;
		$this->load->view('testing');
	}
        
        public function citylist(){
            
         echo json_encode($this->City_model->getList($this->input->post('name')));
        }
        
       public function testing(){
		   
		// $config['protocol']    = 'smtp';
		// $config['smtp_host']    = 'localhost';
		// $config['smtp_port']    = '465';
		// $config['smtp_timeout'] = '7';
		// $config['smtp_user']    = 'info.24thmile@gmail.com';
		// $config['smtp_pass']    = 'info@24th';
		// $config['smtp_user']    = 'sales@24thmile.com';
		// $config['smtp_pass']    = '1234567890';
	// 	$config['charset']    = 'utf-8';
	// 	$config['newline']    = "\r\n";
	// 	$config['mailtype'] = 'html';
    //     $this->email->clear(TRUE);
    //     $this->email->initialize($config);
		
    //     $this->email->from('sales@24thmile.com', '24thMile');
    //     $this->email->to('someshwar@essensys.co.in');
    //     $this->email->subject('test mail');
    //     $this->email->message('test mail');
		
	//   echo  $this->email->send();
	
	//vdebug(getFinancialYearList());

			echo "ddfeed33a376ce0980bd4547de18b6a009ceff8d<br>";
			echo sha1('O8CSkVDh');
	
          
	   }
	   
	   public function rfc_charges_manage(){

			// echo $pass = password_generate(8);
			// echo  "<br>";
		    // echo sha1($pass);
			// die;
		$this->load->model('shipment_model');
		$this->load->model('deliver_term_model');
		$this->load->model('mode_model');

		$data['sr_transaction']='';
		$data['sr_mode']='';
		$data['sr_delivery_term']='';
		$data['sr_shipment']='';
		
		$data['rfc_charges_list']= array();
		if($this->input->post()){

			$transaction = $this->input->post('transaction');
			$mode = $this->input->post('mode');
			$delivery_term = $this->input->post('delivery_term');
			$shipment = $this->input->post('shipment');
			$query = "SELECT tbl_rfc_category.rfc_category_name,tbl_rfc_pricing_labels.pricing_label,tbl_rfc_charges.unit,
			tbl_rfc_charges.transaction,tbl_mode.type as mode,tbl_shipment.type shipment,tbl_deliver_term.name FROM `tbl_rfc_charges` 
			JOIN `tbl_rfc_pricing_labels` ON tbl_rfc_charges.rfc_pricing_label_id = tbl_rfc_pricing_labels.id
			JOIN tbl_rfc_category ON tbl_rfc_pricing_labels.category_id = tbl_rfc_category.id
			JOIN tbl_mode ON tbl_rfc_charges.mode_id = tbl_mode.id
			JOIN tbl_shipment ON tbl_rfc_charges.shipment_id = tbl_shipment.id
			JOIN tbl_deliver_term ON tbl_rfc_charges.delivery_term_id = tbl_deliver_term.id
			WHERE tbl_rfc_charges.transaction = '$transaction' AND
			tbl_rfc_charges.mode_id = '$mode' AND
			tbl_rfc_charges.shipment_id = '$shipment'AND
			tbl_rfc_charges.delivery_term_id = '$delivery_term'
			ORDER BY tbl_rfc_category.id";
			$rs = $this->db->query($query);
			$data['rfc_charges_list'] = $rs->result();

			$data['sr_transaction']=$transaction;
			$data['sr_mode']=$mode;
			$data['sr_delivery_term']=$delivery_term;
			$data['sr_shipment']=$shipment;
		}
		$query = "SELECT * FROM `tbl_rfc_category`";
        $data['rfc_category'] = $this->db->query($query);
		$data['delivery_terms'] = $this->deliver_term_model->getList();
		$data['modes'] = $this->mode_model->getList();
		$data['shipments'] = $this->shipment_model->getList(true);
		$data['page'] = 'rfc_charges_manage';

		$this->load->view('frontend/layout_main', $data);

	   }
}
