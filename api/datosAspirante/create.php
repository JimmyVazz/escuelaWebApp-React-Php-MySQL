<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate product object
include_once '../objects/datosAspirante.php';
 
$database = new Database();
$db = $database->getConnection();
 
$datoAspirante = new DatoAspirante($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    !empty($data->nombre) &&
    !empty($data->apepat) &&
    !empty($data->apemat) &&
    !empty($data->email) &&
    !empty($data->direccion) &&
    !empty($data->gradoIngreso) 
){
 
    // set product property values
    $datoAspirante->folioAspirante = rand(1000, 8000);
    $datoAspirante->nombre = $data->nombre;
    $datoAspirante->apepat = $data->apepat;
    $datoAspirante->apemat = $data->apemat;
    $datoAspirante->email = $data->email;
    $datoAspirante->direccion = $data->direccion;
    $datoAspirante->gradoIngreso = $data->gradoIngreso;
 
    // create the product
    if($datoAspirante->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("message" => "Record was created."));
    }
 
    // if unable to create the product, tell the user
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(array("message" => "Unable to create record."));
    }
}else{
 
    // set response code - 400 bad request
    echo json_encode(array("message" => "Unable to create record."));
    http_response_code(400);

}

?>