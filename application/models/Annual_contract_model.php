<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Annual_contract_model extends CI_Model{

	private $TBL='tbl_annual_contract';

	function __construct(){
		parent::__construct();
                
	}

    public function insert($data){
		if($this->db->insert($this->TBL,$data)){
			return $this->db->insert_id();
		}else{
			return false;
		}
    }
    
    

	public function update($id,$data){
		$this->db->where('id', $id);
		if($this->db->update($this->TBL, $data)){
			return true;
		}else{
			return false;
		}
	}

	public function getRecord($id){
		$this->db->where('id', $id);
		$query = $this->db->get($this->TBL);
		$row=array();
		if ($query->num_rows() > 0){
			$row = $query->row_array();
		}
		return $row;
	} 

	public function getDetails($id,$company_id,$mode=''){
		$this->db->select("$this->TBL.*,tbl_annual_contract_mapp_ff.ff_company_id");
		$this->db->join('tbl_annual_contract_mapp_ff', ' tbl_annual_contract.id = tbl_annual_contract_mapp_ff.annual_contract_id','left');
		$this->db->where("$this->TBL.id", $id);
		$this->db->where("(tbl_annual_contract_mapp_ff.ff_company_id = $company_id OR tbl_annual_contract.fs_company_id = $company_id )");
		$query = $this->db->get($this->TBL);
		// echo $this->db->last_query();die;
		$result = $query->row();

		if($result){
			$this->load->model('annual_contract_route_model');
			$result->routes = $this->annual_contract_route_model->getList($id,$result->ff_company_id,$mode);
		}
		return $result;
	}
	public function getComparativeDetails($id,$company_id,$mode_id){
		$this->load->model('annual_contract_route_model');

		$this->db->select("$this->TBL.*,tbl_annual_contract_mapp_ff.ff_company_id");
		$this->db->join('tbl_annual_contract_mapp_ff', ' tbl_annual_contract.id = tbl_annual_contract_mapp_ff.annual_contract_id');
		$this->db->where("$this->TBL.id", $id);
		$this->db->where("tbl_annual_contract.fs_company_id = $company_id");
		$query = $this->db->get($this->TBL);
		// echo $this->db->last_query();die;
		$result = $query->row();

		
		if($result){
			
			$result->routes = $this->annual_contract_route_model->getComparativeList($id,$mode_id);
		}
		// vdebug($result);
		return $result;
	}

	public function delete($id){
		return	$this->db->delete($this->TBL, array('id' => $id));
	}

	public function get_annual_contract_list($company_id='',$start=0,$length=-1,$filter=array(),$searchKey='',$order_by='tbl_annual_contract.created_at DESC'){
		{
        
			$this->db->select('tbl_annual_contract.annual_contract_title,DATE_FORMAT(tbl_annual_contract.created_at,"%d-%b-%Y") AS create_date,tbl_annual_contract.id as annual_contract_id,DATE_FORMAT(tbl_annual_contract.start_date,"%d-%b-%Y") AS start_date,DATE_FORMAT(tbl_annual_contract.end_date,"%d-%b-%Y") AS end_date,tbl_annual_contract.status');
			$this->db->from('tbl_annual_contract');
			$this->db->join('tbl_annual_contract_mapp_ff', ' tbl_annual_contract.id = tbl_annual_contract_mapp_ff.annual_contract_id','left');
			$this->db->order_by($order_by);
			
			$this->db->group_by('tbl_annual_contract.id');
	
			if(!empty($company_id)){
				$this->db->where("(tbl_annual_contract_mapp_ff.ff_company_id = $company_id OR tbl_annual_contract.fs_company_id = $company_id )");
			}
			
	
			$filter = array_filter($filter);
		//    if(isset($filter['quote_status'])){
		// 	//    $this->db->where_in('tbl_seller_requirement_mapp_ff.quote_status', ['1', '2', '3', '4', '6', '7', '8']);
		// 	   $this->db->where_in('tbl_seller_requirement_mapp_ff.quote_status', $filter['quote_status']);
		//    }
	
		//    if(isset($filter['status'])){
		// 		// $this->db->where_in('tbl_seller_requirement.status', ['1', '2', '3', '4', '7', '8']);
		// 		$this->db->where_in('tbl_seller_requirement.status', $filter['status']);
		// 	}
	
			$this->db->where('tbl_annual_contract.deleted_at IS NULL');
	
			$totalCount_obj = clone $this->db;
			$recordsTotal = $totalCount_obj->count_all_results();
	
	
			// if(isset($filter['mode_id'])){
			// 	$this->db->where('tbl_seller_requirement.mode_id',$filter['mode_id']);
			// }
	
			// if(isset($filter['transaction'])){
			// 	$this->db->where('tbl_seller_requirement.transaction',$filter['transaction']);
			// }
	
			// if(isset($filter['delivery_term_id'])){
			// 	$this->db->where('tbl_seller_requirement.delivery_term_id',$filter['delivery_term_id']);
			// }
			// if(isset($filter['shipment_id'])){
			// 	$this->db->where('tbl_seller_requirement.shipment_id',$filter['shipment_id']);
			// }
	
			
	
			if(isset($filter['fromDate']) && isset($filter['toDate'])){
				if(!empty($filter['fromDate']) && !empty($filter['toDate'])){
					$fromDate = getMysqlDateFormat($filter['fromDate']);
					$toDate = getMysqlDateFormat($filter['toDate']);
					$this->db->where("CAST(tbl_seller_requirement.created_at AS DATE) BETWEEN '$fromDate' AND '$toDate' ");
				}
			}
	
			if(!empty($searchKey)){
				$this->db->where("($searchKey)");
			}
	
			$totalFilteredCount_obj = clone $this->db;
			$recordsFiltered = $totalFilteredCount_obj->count_all_results();
			
			if($length>0){
				$this->db->limit($length,$start);
			}
			$query = $this->db->get();
			
			$result = $query->result();
			
			// echo $this->db->last_query();die;
			return ['recordsTotal'=>$recordsTotal,'recordsFiltered'=>$recordsFiltered,'data'=>$result];
		}
	}

}
