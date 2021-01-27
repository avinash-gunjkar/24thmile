<?php namespace App\Controllers;

//use CodeIgniter\Controller;

class Home extends BaseController
{
	public function _construct(){

		//$db = \Config\Database::connect();
		$db = \Config\Database::connect('default');
		//$this->load->database();
		parent::_construct();

	}
	public function index()
	{
		//throw new Exception("failed");
		//$this->load->database();
		$db = \Config\Database::connect('default');
		$q=$db->query("select * from cust");
		echo "Database connected sucessfully";
		//echo $db->query("SELECT VERSION()")->row('version');
		//return view('welcome_message');
		
	}
	public function test(){
		//$constr=("host=localhost port=5432 dbname=test user=test password=test");
		$con=\Config\Database::connect('default');
		//	$this->load->batabase();
	for ($i=1;$i<=1;$i++){
	$pg_sql="INSERT INTO cust(id,name,address,phone,state)VALUES(1,'avinash sharadrao gunjkar','pune maher
astra khese park',1818,'Maharastra')";
$result=$con->query($pg_sql);
	}
 	echo "Record Inserted";	

	}
	//--------------------------------------------------------------------

}
