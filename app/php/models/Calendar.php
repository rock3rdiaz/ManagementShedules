<?php

namespace models;

require_once('../core/ManagementBD.php');
require_once('../core/Helper.php');

class Calendar extends \core\ManagementBD{

	const TABLE_NAME = 'calendar';

	private $initial_date;
	private $end_date;
	private $state;

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

	public function insert($id, $ed, $state){

		$sql = "INSERT INTO ".self::TABLE_NAME." (initial_date, end_date, state) VALUES ('$id', '$ed', '$state')";
		$res = $this->connect()->query($sql);
		$this->disconnect();
	}

	public function delete($id){

		$sql = "DELETE FROM ".self::TABLE_NAME. " WHERE id = '$id'";
		$res = $this->connect()->query($sql);
		$this->disconnect();
	}

	public function update($id, $initial_date, $end_date, $state){

		$sql = "UPDATE ".self::TABLE_NAME." SET initial_date = '$initial_date', end_date = '$end_date', state = '$state'";

		$res = $this->connect()->query($sql);
		$this->disconnect();
	}
}


switch($_SERVER['REQUEST_METHOD']){

	case 'GET':

		$calendar = new Calendar();
		$res = $calendar->selectAll();

		$data = array();
		while ($fila = $res->fetch_assoc()) {
			$item["id"]           = $fila['id'];
			$item["initial_date"] = $fila['initial_date'];
			$item["end_date"]     = $fila['end_date'];
			$item["state"]        = $fila['state'];
			$data[]               = $item;
		}
		print_r(\core\Helper::eJSON($data));

		break;

	case 'POST':
		$data = \core\Helper::dJSON(file_get_contents('php://input'));
		
		$calendar = new Calendar();
		$calendar->insert($data->initial_date, $data->end_date, $data->state);

		break;

	case 'PUT':
		break;

	case 'DELETE':
		
		$data = $_SERVER['REQUEST_URI'];
		preg_match('/(\d+)/', $data, $match);
		$id = $match[0];

		$calendar = new Calendar();
		$res = $calendar->delete($id);

		print_r(\core\Helper::eJSON($id));
		
		break;
}
