<?php
    define('USER', 'admin');
    define('PASSWORD', 'mama');
    define('HOST', 'localhost');
    define('DATABASE', 'Travel');
    try {
        $connection = new PDO("mysql:host=".HOST.";dbname=".DATABASE, USER, PASSWORD);
    } catch (PDOException $e) {
        exit("Error: " . $e->getMessage());
    }
?>