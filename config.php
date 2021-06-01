<?php
session_start();
$host = "localhost"; /* Host name */
$user = "id16842393_admin"; /* User */
$password = "RVT_1_Flights"; /* Password */
$dbname = "id16842393_main"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}