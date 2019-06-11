<?php
    //datos de la base de datos
$servername = "localhost";
$username = "DBUSER2018";
$password = "DBPSWD2018";
//$database = "El_Llagar_Online";
// Conexión al SGBD local con XAMPP con el usuario creado DBUSER2018:DBPSWD2018
$db = new mysqli($servername,$username,$password);

    //Crear la bbdd
    $cadenaSQL = "CREATE DATABASE IF NOT EXISTS El_Llagar_Online COLLATE utf8_spanish_ci";

    //Si va sbien creo la tabla.
    if ($db->query($cadenaSQL) === TRUE) {

        //crear la tabla
        $db->select_db("El_Llagar_Online");

        $crearTabla = "CREATE TABLE IF NOT EXISTS comentarios (
        id INT NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(30) NOT NULL,
        email VARCHAR(60) NOT NULL, 
        
        PRIMARY KEY (id))";

        //Si se crea con exito inserto el comentario.
        if ($db->query($crearTabla) === TRUE) {

            //insertar comentario
            $db->select_db("comentarios");

            $consultaPre =
                $db->prepare("INSERT INTO comentarios(nombre,email) VALUES (?,?)");

            $consultaPre->bind_param('ss',
                $_POST["nombre"], $_POST["email"]);

            $consultaPre->execute();

            $consultaPre->close();

            //Meter aqui lo que quiero que muestre la pagina de la que se
            // çinserte el comentario en plan mensaje de agradecimiento guapo o tal.
            echo "<h2>Muchas gracias por sus sugerencias.</h2>
            <p>Gracias a sus comentarios nos ayuda a mejorar el sitio para proporcionarle una mejor experiencia.</p>";


        } else {
            echo "<p>Se ha producido  un error por favor intentelo mas tarde.</p>";
            exit();
        }

    } else {
        echo "<p>Se ha producido  un error por favor intentelo mas tarde.</p>";
        exit();
    }

    //Cerrar la conexion
    $db->close();
    ?>