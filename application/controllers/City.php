<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class City extends CI_Controller {

       
	public function __construct()
	{
		parent::__construct();
            
		$this->load->model('city_model','CITY',true); 
		
	}
	
       
}