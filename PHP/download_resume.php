<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
    $id = $_GET['id'];

    // Establish a database connection
    $conn = mysqli_connect('localhost', 'root', '', 'sitco', '3306');

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Retrieve the resume content from the database based on the resume ID
    $stmt = $conn->prepare("SELECT resume FROM job_apply WHERE apply_id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($resumeContent);
        $stmt->fetch();

        // Set appropriate headers for the response
        header('Content-Type: application/pdf');
        header('Content-Disposition: inline; filename="resume.pdf"');
        header('Content-Transfer-Encoding: binary');
        header('Accept-Ranges: bytes');
        header('Content-Length: ' . strlen($resumeContent));

        // Output the resume content
        echo $resumeContent;
        exit; // Terminate the script after sending the file
    } else {
        echo "Resume not found";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request";
}
?>
