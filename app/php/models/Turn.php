<?php

namespace models;

require_once('../core/ManagementBD.php');
require_once('../core/Helper.php');

class Turn extends \core\ManagementBD{

	const TABLE_NAME = 'turn';

	private $name;
	private $total_hours;

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

	public function insert($name, $total_hours){

		$sql = "INSERT INTO ".self::TABLE_NAME." (name, total_hours) VALUES ('$name', '$total_hours')";
		$res = $this->connect()->query($sql);
		$this->disconnect();
	}

	public function delete($id){

		$sql = "DELETE FROM ".self::TABLE_NAME. " WHERE id = '$id'";
		$res = $this->connect()->query($sql);
		$this->disconnect();
	}

	public function update($name, $total_hours){

		$sql = "UPDATE ".self::TABLE_NAME." SET name = '$name', total_hours = '$total_hours'";

		$res = $this->connect()->query($sql);
		$this->disconnect();
	}
}


switch($_SERVER['REQUEST_METHOD']){

	case 'GET':
		$data = \core\Helper::dJSON(file_get_contents('php://input'));

		$instructor = new Turn();
		$res = $turn->selectAll();

		$data = array();
		while ($fila = $res->fetch_assoc()) {
			$item["id"]   = $fila['id'];
			$item["name"] = $fila['name'];
			$item["total_hours"] = $fila['total_hours'];
			$data[]       = $item;
		}
		print_r(\core\Helper::eJSON($data));

		break;

	case 'POST':
		$data = \core\Helper::dJSON(file_get_contents('php://input'));
		$turn = new Turn();
		$turn->insert($data->name, $data->total_hours);

		break;

	case 'PUT':
		break;

	case 'DELETE':
		$id = $_REQUEST['cid'];
		$turn = new Turn();
		$res = $turn->delete($id);

		break;
}
