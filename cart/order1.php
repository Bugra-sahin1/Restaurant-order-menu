<?php
$conn = mysqli_connect("localhost","YOUR_DB_USERNAME","YOUR_DB_PASSWORD","YOUR_DB_NAME");

if (!$conn) {
    die("Cannot connect to database");
}

$tablenumber = $_POST["tablenumber"];
$foodNames   = $_POST["foodName"];
$prices      = $_POST["price"];
$quantities  = $_POST["quantity"];
$date        = date("Y-m-d H:i:s");

$sql = "INSERT INTO orders (tablenum, foodname, price, quantity, orderdate) VALUES (?, ?, ?, ?, ?)";

$stmt = mysqli_prepare($conn, $sql);

for ($i = 0; $i < count($prices); $i++) {
    mysqli_stmt_bind_param(
        $stmt,
        "isdis",
        $tablenumber,
        $foodNames[$i],
        $prices[$i],
        $quantities[$i],
        $date
    );

    mysqli_stmt_execute($stmt);
}

echo "Your order sent to the kitchen for preparing";
?>