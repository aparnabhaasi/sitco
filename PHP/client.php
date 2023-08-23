<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'connection.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM about_client";
        $result = $conn->query($sql);
        if ($result) {
            $client = $result->fetch_all(MYSQLI_ASSOC);
            // Send the response in JSON format
            header('Content-Type: application/json');
            echo json_encode($client);
            exit; // Terminate script execution after sending response
        } else {
            $response = ['status' => 0, 'message' => 'Failed to execute query.', 'error' => $conn->error];
            // Send the response in JSON format
            header('Content-Type: application/json');
            echo json_encode($response);
            exit; // Terminate script execution after sending response
        }
}
?>
