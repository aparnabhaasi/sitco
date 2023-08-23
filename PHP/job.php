<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'POST':
        if (isset($_FILES['file'])) {
            $fname = $_POST['fname'];
            $lname = $_POST['lname'];
            $email = $_POST['email'];
            $mobile = $_POST['mobile'];
            $pos = $_POST['pos'];
            $date = $_POST['date'];
            $stat = $_POST['stat'];
            $exp = $_POST['exp'];
            $file = $_FILES['file']['name'];
            $file_temp = $_FILES['file']['tmp_name'];
            $destination = $_SERVER['DOCUMENT_ROOT'] . '/sitco/public/Images' . "/" . $file;
            
            $careerId = $_POST['career_id']; // Retrieve career_id from the form data

            // Establish database connection
            $conn = mysqli_connect('localhost', 'root', '', 'sitco', '3306');

            $result = mysqli_query($conn, "INSERT INTO job_apply (c_id, fname, lname, email, mobile, position, start_date, status, exp, resume)
                 VALUES ('$careerId', '$fname', '$lname', '$email', '$mobile', '$pos', '$date', '$stat', '$exp', '$file')");

            if ($result) {
                move_uploaded_file($file_temp, $destination);
                echo json_encode(["success" => "Applied successfully"]);
            } else {
                echo json_encode(["success" => "Applied not"]);
            }
        } else {
            echo json_encode(["success" => "Not in correct"]);
        }
        break;
}
?>
