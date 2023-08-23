<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);
$user = $data['user'] ?? '';
$pass = $data['pass'] ?? '';

$result = "";

if ($user !== "" && $pass !== "") {
    $conn = mysqli_connect('localhost', 'root', '', 'sitco', '3306');
    if (mysqli_connect_error()) {
        $result = "Database connection error: " . mysqli_connect_error();
    } else {
        $sql = "SELECT * FROM admin WHERE username=? AND password=?";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "ss", $user, $pass);
        mysqli_stmt_execute($stmt);
        $res = mysqli_stmt_get_result($stmt);

        if (!$res) {
            $result = "Database query error: " . mysqli_error($conn);
        } elseif (mysqli_num_rows($res) != 0) {
            $result = "Logged In";
        } else {
            $result = "Invalid credentials";
        }
    }
} else {
    $result = "Invalid credentials";
}

$response = array("result" => $result);
header("Content-Type: application/json");
echo json_encode($response);
?>
