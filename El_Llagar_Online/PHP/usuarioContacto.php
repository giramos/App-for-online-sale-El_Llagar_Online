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

    //Crear la bbdd
    $cadenaSQL = "CREATE DATABASE IF NOT EXISTS El_Llagar_Online COLLATE utf8_spanish_ci";

    //Si va sbien creo la tabla.
    if ($db->query($cadenaSQL) === TRUE) {

        //crear la tabla
        $db->select_db("El_Llagar_Online");

/// se puede abrir y seleccionar a la vez
            //$db = new mysqli($servername,$username,$password,$database);
        $crearTabla = "CREATE TABLE IF NOT EXISTS usuarios (
        id_usuario INT NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(30) NOT NULL,
        email VARCHAR(60) NOT NULL, 
        
        PRIMARY KEY (id_usuario))";

        //Si se crea con exito inserto el comentario.
        if ($db->query($crearTabla) === TRUE) {

            //insertar comentario
            $db->select_db("usuarios");

            $consultaPre =
                $db->prepare("INSERT INTO usuarios(nombre,email) VALUES (?,?)");

            $consultaPre->bind_param('ss',
                $_POST["nombre"], $_POST["email"]);

            $consultaPre->execute();

            $consultaPre->close();

            //Meter aqui lo que quiero que muestre la pagina de la que se
            // çinserte el comentario en plan mensaje de agradecimiento guapo o tal.
            echo "<script>
                    alert('Ha sido un éxito su envío de información');
                    window.location= '../HTML/contacto.html'
        </script>";

        } else {
            echo "<script>
            alert('ERROR: inténtelo otra vez');
            window.location= '../HTML/contacto.html'
</script>";
            exit();
        }

    } else {
        echo "<script>
            alert('ERROR: inténtelo otra vez');
            window.location= '../HTML/contacto.html'
</script>";
        exit();
    }
    //header('Location: ../HTML/contacto.html');
    /*echo "<script>
                    alert('Muchas gracias por sus sugerencias');
                    window.location= '../HTML/contacto.html'
        </script>";*/
    //Cerrar la conexion
    $db->close();
    
    ?>
