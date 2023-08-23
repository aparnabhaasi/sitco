<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST' && isset($_POST['id']) && isset($_POST['title'])) {
    $id = $_POST['id'];
    $title = $_POST['title'];

    // Check if a new image file was uploaded
    if (isset($_FILES['file'])) {
        $file = $_FILES['file']['name'];
        $file_temp = $_FILES['file']['tmp_name'];
        $destination = $_SERVER['DOCUMENT_ROOT'] . '/sitco/public/Images/gallery/' . $file;

        // Handle the file upload
        if (move_uploaded_file($file_temp, $destination)) {
            // Update the image record with the new title and file name
            $conn = mysqli_connect('localhost', 'root', '', 'sitco', '3306');

            if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }

            $stmt = $conn->prepare("UPDATE about_gallery SET title = ?, image = ? WHERE id = ?");
            $stmt->bind_param("ssi", $title, $file, $id);

            if ($stmt->execute()) {
                echo json_encode(["success" => "Image updated successfully"]);
            } else {
                echo json_encode(["error" => "Failed to update image"]);
            }

            $stmt->close();
            $conn->close();
        } else {
            echo json_encode(["error" => "Failed to upload image"]);
        }
    } else {
        // No new image file, update only the title
        $conn = mysqli_connect('localhost', 'your_db_username', 'your_db_password', 'your_db_name', 'your_db_port');

        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $stmt = $conn->prepare("UPDATE your_image_table SET title = ? WHERE id = ?");
        $stmt->bind_param("si", $title, $id);

        if ($stmt->execute()) {
            echo json_encode(["success" => "Title updated successfully"]);
        } else {
            echo json_encode(["error" => "Failed to update title"]);
        }

        $stmt->close();
        $conn->close();
    }
}
elseif ($method === 'DELETE' && isset($_GET['id'])) {
    $id = $_GET['id'];

    // Establish a database connection
    $conn = mysqli_connect('localhost', 'root', '', 'sitco', '3306');

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Retrieve the image information before deleting
    $stmt = $conn->prepare("SELECT image FROM about_gallery WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($image);
        $stmt->fetch();

        // Delete the image file from the server
        $imagePath = $_SERVER['DOCUMENT_ROOT'] . '/sitco-master/public/Images/gallery/' . $image;
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }

        // Delete the image record from the database
        $stmt->close();
        $deleteStmt = $conn->prepare("DELETE FROM about_gallery WHERE id = ?");
        $deleteStmt->bind_param("i", $id);

        if ($deleteStmt->execute()) {
            echo json_encode(["success" => "Image deleted successfully"]);
        } else {
            echo json_encode(["error" => "Failed to delete image"]);
        }

        $deleteStmt->close();
    } else {
        echo json_encode(["error" => "Image not found"]);
    }

    $conn->close();
} else {
    echo json_encode(["error" => "Invalid request"]);
}
?>
