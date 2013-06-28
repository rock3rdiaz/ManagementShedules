<?php

namespace models;

require_once('../core/ManagementBD.php');
require_once('../core/Helper.php');

class Schedule extends \core\ManagementBD{

	const TABLE_NAME = 'schedule';

	private $day;
	private $initial_hour;
	private $end_hour;

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

	public function insert($day, $initial_hour, $end_hour){

		$sql = "INSERT INTO ".self::TABLE_NAME." (day, initial_hour, end_hour) VALUES ('$day', '$initial_hour', '$end_hour')";
		$res = $this->connect()->query($sql);
		$this->disconnect();
	}

	public function delete($id){

		$sql = "DELETE FROM ".self::TABLE_NAME. " WHERE id = '$id'";
		$res = $this->connect()->query($sql);
		$this->disconnect();
	}

	public function update($id, $day, $initial_hour, $end_hour){

		$sql = "UPDATE ".self::TABLE_NAME." SET day = '$day', initial_hour = '$initial_hour', end_hour = '$end_hour' WHERE id = '$id'";

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

		$output = array();
		
		foreach( $data as $d ){

			$schedule = new Schedule();
			$output[] = $schedule->insert($d['day'], $d['initial_hour'], $d['end_hour']);
		}

		print_r(\core\Helper::eJSON($output));

		break;

	case 'PUT':
		$data = \core\Helper::dJSON(file_get_contents('php://input'));

		$calendar = new Calendar();
		$calendar->update($data['id'], $data['initial_date'], $data['end_date'], $data['state']);

		print_r(\core\Helper::eJSON($calendar));		

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
