<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'DELETE' && isset($_GET['id'])) {
    $id = $_GET['id'];

    // Establish a database connection
    $conn = mysqli_connect('localhost', 'root', '', 'sitco', '3306');

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Delete the record from the database
    $deleteStmt = $conn->prepare("DELETE FROM career WHERE c_id = ?");
    $deleteStmt->bind_param("i", $id);

    if ($deleteStmt->execute()) {
        echo json_encode(["success" => "Record deleted successfully"]);
    } else {
        echo json_encode(["error" => "Failed to delete record: " . $conn->error]);
    }

    $deleteStmt->close();
    $conn->close();
} else {
    echo json_encode(["error" => "Invalid request"]);
}
?>
