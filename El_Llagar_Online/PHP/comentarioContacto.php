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

    //Si va sbien creo la tabla.
    if ($db->query($cadenaSQL) === TRUE) {

        //crear la tabla
        $db->select_db("El_Llagar_Online");
/// se puede abrir y seleccionar a la vez
            //$db = new mysqli($servername,$username,$password,$database);
        $crearTabla = "CREATE TABLE IF NOT EXISTS comentarios (
        comentarioContacto_id INT NOT NULL AUTO_INCREMENT,
        asunto VARCHAR(100) NOT NULL,
        comentario VARCHAR(500) NOT NULL, 
        id_usuario INT NOT NULL,
        PRIMARY KEY (comentarioContacto_id),
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario))";

        //Si se crea con exito inserto el comentario.
        if ($db->query($crearTabla) === TRUE) {

            //insertar comentario
            $db->select_db("comentarios");

            $consultaPre =
                $db->prepare("INSERT INTO comentarios(asunto,comentario,id_usuario) VALUES (?,?,?)");

            $consultaPre->bind_param('ssi',
              $_POST["asunto"], $_POST["comentario"], $_POST["id_usuario"]);

            $consultaPre->execute();

            $consultaPre->close();

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
    //$message = "Su consulta ha sido todo un éxito. Acepte y vuelva atrás";
    //echo "<script type='text/javascript'>alert('$message');</script>";//ventanita emergente
    
    //Cerrar la conexion
    $db->close();
    
    ?>
    