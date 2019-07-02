<?php

//datos de la base de datos
$servername = "localhost";
$username = "DBUSER2018";
$password = "DBPSWD2018";
//$database = "El_Llagar_Online";

// Conexión al SGBD local con XAMPP con el usuario creado DBUSER2018:DBPSWD2018
$db = new mysqli($servername,$username,$password);

/*if($db->connect_error) {
        echo "<p>ERROR de conexión:".$db->connect_error.". No existe el usuario</p>";
        exit();
    } else {echo "<p>Conexión establecida.</p>";}*/

// Creo la base de datos de trabajo "El_Llagar_Online" utilizando ordenación en Español
$cadenaSQL = "CREATE DATABASE IF NOT EXISTS El_Llagar_Online COLLATE utf8_spanish_ci";

if ($db->query($cadenaSQL) === TRUE) {

    $db->select_db("El_Llagar_Online");

/// se puede abrir y seleccionar a la vez
            //$db = new mysqli($servername,$username,$password,$database);

            //Crear la tabla Pedido nombre, apellidos, email, nombreProducto y precio
    $crearTabla = "CREATE TABLE IF NOT EXISTS Pedido (
        id INT NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(50) NOT NULL, 
        apellidos VARCHAR(100) NOT NULL, 
        email VARCHAR(100) NOT NULL,
        nombreProducto VARCHAR(50) NOT NULL,
        precio  VARCHAR(10) NOT NULL,
        PRIMARY KEY (id))";

    if ($db->query($crearTabla) === TRUE) {
//creo la tabla de clientes y de productos

/*echo "<p>Tabla Pedido creada con éxito (o ya existe)</p>";
} else { 
   echo "<p>ERROR en la creación de la tabla Pedido</p>";
   exit();
}*/
        $db->select_db("Pedido");//añado cliente al pedido

//preparo la sentencia de inserción
        $consultaPre =
            $db->prepare("INSERT INTO Pedido(nombre,apellidos,email,nombreProducto,precio) VALUES (?,?,?,?,?)");

        $cliente = json_decode($_POST['datosUser']);//variable Predefinida $_POST
        $producto = json_decode($_POST['pedido']);//variable Predefinida $_POST

        foreach ($producto as $valor) {
                        //añado los parámetros de la variable Predefinida $_POST
            $consultaPre->bind_param('ssssd',
                $cliente->nombre, $cliente->apellidos, $cliente->email,
                $valor->nombre, $valor->precio);
                            //ejecuto la sentencia
            $consultaPre->execute();
        }
        $consultaPre->close();

        echo json_encode("El pedido ha sido realizado con éxito");

    } else {
        echo json_encode("ERROR al grabar su pedido");
    }
} else {
    echo json_encode("ERROR al grabar su pedido");
}
//Cerrar la conexion
$db->close();
?>