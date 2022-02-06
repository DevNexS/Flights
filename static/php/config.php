<?php
session_start();
$host = "localhost"; /* Host name */
$user = "name"; /* User */
$password = "localhost"; /* Password */
$dbname = "id16842393_admin"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}