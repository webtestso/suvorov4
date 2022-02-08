<?php
	$host = "localhost:3306";
	$username = "justanotherrealityhotmail.com";
	$password = "nMqSwPLb65fZZBT1";
	$dbname = "ustanhot30559com3370_";

	// Create database connection
	$con = new mysqli($host, $username, $password, $dbname);

	// Check connection
	if ($con->connect_error) {
		die("Connection failed: " . $con->connect_error);
	}
?>
