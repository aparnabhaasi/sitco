<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $jobTitle = $_POST['jobTitle'];
    $location = $_POST['location'];
    $experience = $_POST['experience'];
    $salary = $_POST['salary'];
    $jobDescription = $_POST['jobDescription'];
    $jobQualification = $_POST['jobQualification'];

    // Create a database connection
    $conn = mysqli_connect('localhost', 'root', '', 'sitco', '3306');

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // SQL INSERT query
    $sql = "INSERT INTO career (title, location, experience, qualification, salary, description)
            VALUES (?, ?, ?, ?, ?, ?)";

    // Prepare and bind the statement
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $jobTitle, $location, $experience, $jobQualification, $salary, $jobDescription);

    // Execute the statement
    if ($stmt->execute()) {
        echo json_encode(['success' => 'Job posted successfully']);
    } else {
        echo json_encode(['error' => 'Failed to post job']);
    }

    // Close the statement and the database connection
    $stmt->close();
    $conn->close();
} else {
    // Invalid request
    echo json_encode(['error' => 'Invalid request']);
}
?>
