<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "utilisateurs"; 

header('Content-Type: application/json');

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    
    http_response_code(500); 
    echo json_encode(['error' => 'Connection failed: ' . $conn->connect_error]);
    exit();
}


$sql = "SELECT id, nom, prenom, email FROM utilisateurs";
$result = $conn->query($sql);

$users = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// Ferme la connexion
$conn->close();


echo json_encode($users);

?>