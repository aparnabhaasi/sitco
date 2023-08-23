<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST' && isset($_FILES['file']) && isset($_POST['title'])) {
    $title = $_POST['title'];
    $file = $_FILES['file']['name'];
    $file_temp = $_FILES['file']['tmp_name'];
    $destination = $_SERVER['DOCUMENT_ROOT'] . '/sitco/public/Images/project/' . $file;

    // Establish database connection
    $conn = mysqli_connect('localhost', 'root', '', 'sitco', '3306');

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $stmt = $conn->prepare("INSERT INTO about_project (title, image) VALUES (?, ?)");
    $stmt->bind_param("ss", $title, $file);

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
