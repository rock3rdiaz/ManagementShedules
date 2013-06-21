<?php

namespace core;

abstract class ManagementBD{

	private $server;
	private $user;
	private $pass;
	private $bd_name;
	private $link;
	private $engine;

	protected function __construct($type){
		$this->user = 'root';
		$this->pass = 'rog3rs@rd';
		$this->server = 'localhost';
		$this->bd_name = 'apphorarioscaf';
		$this->engine = $type;
	}

	protected function connect(){
		switch($this->engine){
			case 'mysql':
				$this->link = new \mysqli($this->server, $this->user, $this->pass, $this->bd_name);
				break;
		}
		return $this->link;		
	}

	protected function disconnect(){
		$this->link->close();
	}
}