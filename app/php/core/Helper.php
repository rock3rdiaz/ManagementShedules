<?php

namespace core;

abstract class Helper{

	public static function dJSON($obj){
		return json_decode($obj);
	}

	public static function eJSON($obj){
		return json_encode($obj);
	}
}