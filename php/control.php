<?php
header('Content-type: application/json');
require_once "../database_config.php";
// Create connection
$db = new mysqli($servername, $username, $password, $database_name);

// Check connection
if ($db->connect_errno){ // are we connected properly?
	exit("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);
}

$cmd = $_POST['cmd'];

if ($cmd == 'retrieve') {
	$sql = 'SELECT state FROM training ORDER BY ID DESC LIMIT 1';
	$result = $db->query($sql);
	if (!$result){ // is there any error?
		exit("MySQL reports " . $db->error);
	}
	$row = mysqli_fetch_row($result);
	if ($row[0] != 'pending') {
		$sql = "INSERT INTO training( state ) VALUES ('pending')";
		$db->query($sql);
	}
	echo json_encode($row[0]);
}

if ($cmd == 'push') {
	$action = $_POST['action'];
	$sql = "INSERT INTO training( state ) VALUES ('$action')";
	$result = $db->query($sql);
	if (!$result){ // is there any error?
		exit("MySQL reports " . $db->error);
	}
	echo json_encode('successful');
}
?>