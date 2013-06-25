<?php

namespace models;

require_once('../core/ManagementBD.php');
require_once('../core/Helper.php');

class Instructor extends \core\ManagementBD{

	const TABLE_NAME = 'instructor';

	private $name;
	private $type;

	public function __construct(){	
		parent::__construct('mysql');
	}

	public function getTableName(){
		return self::TABLE_NAME;
	}

	public function selectAll(){

		$sql = 'SELECT * FROM '.self::TABLE_NAME;

		$res = $this->connect()->query($sql);
		$this->disconnect();
		return $res;
	}

	public function insert($name, $type){

		$sql = "INSERT INTO ".self::TABLE_NAME." (name, type) VALUES ('$name', '$type')";
		$res = $this->connect()->query($sql);
		$this->disconnect();
	}

	public function delete($id){

		$sql = "DELETE FROM ".self::TABLE_NAME. " WHERE id = '$id'";
		$res = $this->connect()->query($sql);
		$this->disconnect();
	}

	public function update($id, $initial_date, $end_date, $state){

		$sql = "UPDATE ".self::TABLE_NAME." SET name = '$name', type = '$type'";

		$res = $this->connect()->query($sql);
		$this->disconnect();
	}
}


switch($_SERVER['REQUEST_METHOD']){

	case 'GET':
		$data = \core\Helper::dJSON(file_get_contents('php://input'));

		$instructor = new Instructor();
		$res = $instructor->selectAll();

		$data = array();
		while ($fila = $res->fetch_assoc()) {
			$item["id"]   = $fila['id'];
			$item["name"] = $fila['name'];
			$item["type"] = $fila['type'];
			$data[]       = $item;
		}
		print_r(\core\Helper::eJSON($data));

		break;

	case 'POST':
		$data = \core\Helper::dJSON(file_get_contents('php://input'));
		$instructor = new Instructor();
		$instructor->insert($data->name, $data->type);

		break;

	case 'PUT':
		break;

	case 'DELETE':
		$id = $_REQUEST['cid'];
		$instructor = new Instructor();
		$res = $instructor->delete($id);

		break;
}
