<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "proiektua";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$erabil = $_POST["izena"];
$pasa = $_POST["pasahitza"];

$sql = "INSERT INTO taula (erabiltzailea, pasahitza)
VALUES ('$erabil', '$pasa')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 