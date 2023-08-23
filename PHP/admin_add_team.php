<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST' && isset($_FILES['file']) && isset($_POST['tname']) && isset($_POST['des']) && isset($_POST['description']) ) {
    $tname = $_POST['tname'];
    $des = $_POST['des'];
    $description = $_POST['description'];
    $file = $_FILES['file']['name'];
    $file_temp = $_FILES['file']['tmp_name'];
    $destination = $_SERVER['DOCUMENT_ROOT'] . '/sitco/public/Images/team/' . $file;

    // Establish database connection
    $conn = mysqli_connect('localhost', 'root', '', 'sitco', '3306');

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $stmt = $conn->prepare("INSERT INTO team (name,designation,description, image) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $tname,$des,$description, $file);

    if ($stmt->execute()) {
        move_uploaded_file($file_temp, $destination);
        echo json_encode(["success" => "Applied successfully"]);
    } else {
        echo json_encode(["success" => "Applied not"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["success" => "Invalid request"]);
}
?>
