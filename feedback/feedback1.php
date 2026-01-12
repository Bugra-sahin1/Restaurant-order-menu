<?php
$conn = mysqli_connect("localhost","YOUR_DB_USERNAME","YOUR_DB_PASSWORD","YOUR_DB_NAME");

if (!$conn) {
    die("Cannot connect to database");
}

$fullname  = $_POST["name"];
$contact   = $_POST["contact"];
$feedback  = $_POST["feedback"];
$visitdate = $_POST["visitdate"];
$rating    = (int) $_POST["rating"]; // integer
$date      = date("Y-m-d H:i:s");

$sql = "INSERT INTO feedback (fullname, contact, visitdate, feedbacks, rating, created) VALUES (?, ?, ?, ?, ?, ?)";

$stmt = mysqli_prepare($conn, $sql);

mysqli_stmt_bind_param(
    $stmt,
    "ssssis",
    $fullname,
    $contact,
    $visitdate,
    $feedback,
    $rating,
    $date
);

mysqli_stmt_execute($stmt);

echo "Thank you for your feedback!";
?>