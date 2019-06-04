<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes" version="1.0"/>
    <xsl:template match="/">
        <html lang="es">
            <head>
                 <meta charset="UTF-8" />
                 <meta name="author" content="Germán Iglesias Ramos" />
                 <meta name="description" content="Página principal de la pagina web dedicada a la venta de sidra" />
                 <meta name="keywords" content="sidra, Sidra, sidreria, Sidreria, Sidrería, sidrería, sidras, culin, culín, escanciador, bebida
                  corcho, botella, botellas, asturias, Asturias, chigre, escanciar, llagar, Llagar" />
                 <meta name="keywords" content="HTML, CSS, JavaScript" />
                <link rel="icon" href="../IMG/iconoSidra.jpg" type="image/jpg" />
                 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                 <script src="../JAVASCRIPT/reloj.js"></script>
                 <script src="../JAVASCRIPT/analogico.js"></script>
                 <link href="../CSS/estilo.css" rel="stylesheet" type="text/css" />
                 <link href="../CSS/barraMenu.css" rel="stylesheet" type="text/css" />
                 <link href="../CSS/formulario.css" rel="stylesheet" type="text/css" />
                 <link href="../CSS/estiloTitulo.css" rel="stylesheet" type="text/css" />
                 <link href="../CSS/analogico.css" rel="stylesheet" type="text/css" />
                 <link href="../CSS/footer.css" rel="stylesheet" type="text/css" />
                 <link href="../CSS/sidra.css" rel="stylesheet" type="text/css" />
              <title>El Llagar Online</title>
            </head>
            <body>
                <div id="cajacontenido" title="Reloj analógico">
        <div id="aplicacion">
            <div id="CajaReloj">
                <img id="segundos" src="../IMG/Aguja3.png" alt="Manilla segundos reloj" />
                <img id="minutos" src="../IMG/Aguja2.png" alt="Manilla pequeña reloj" />
                <img id="hora" src="../IMG/Aguja1.png" alt="Manilla grande reloj" />
            </div>
        </div>
    </div>

    <div id="clockDate" title="Fecha">
        <p id="date"></p>
    </div>

                <header>
                    <div class="header">

            <div class="Iam" title="Título animado del Llagar Online">
                <a href="../index.html" title="Ir a la página principal">
                    <img src="../IMG/Llagar.gif" alt="El Llagar Online" />
                </a>
                <blockquote>
                    <div class="innerIam">
                        El Llagar Online<br />
                        El Llagar Online de la sidra<br />
                        El Llagar Online de Asturias<br />
                        El Llagar Online de la tradición<br />
                        El Llagar Online de tod@s<br />
                        El Llagar Online de la cultura<br />
                        El Llagar Online de la folixa<br />
                        El Llagar Online de la tradición<br />
                    </div>
                </blockquote>
            </div>
        </div>
                </header>

                <nav>
                    <ul id="lista_menu">
            <li><a href="../index.html" title="Ir a la página principal">Principal</a></li>
            <li><a href="historia.html" title="Ir a la página de la historia"> Historia</a></li>
            <li><a href="productos.html" title="Ir a la página de los productos">Productos</a>
                <ul>
                    <li><a href="../XML/sidras.xml" title="Ir a la página de las sidras tradicionales">Sidras</a></li>
                    <li><a href="../XML/sidrasEspumosas.xml" title="Ir a la página de las sidras espumosas">Sidras
                            Espumosas</a></li>
                    <li><a href="../XML/otrosProductos.xml" title="Ir a la página de otors productos">Otros
                            Productos</a></li>
                </ul>
            </li>
            <li><a href="establecimientos.html" title="Ir a la página de los establecimientos">Lugares</a></li>
            <li><a href="contacto.html" title="Ir a la pñagina de contacto">Contacto</a></li>
        </ul>
                </nav>

                <main class="menu">
                <h1>Productos</h1>
                    <aside>
                        <table id="carroCompra" hidden="true">
                            <caption>Resumen Pedido</caption>
                            <tr>
                                <th>Sidra</th>
                                <th>Precio</th>
                            </tr>
                        </table>

                        <p id="total" hidden="true"></p>

                        <input hidden="true" type="button" id="pedido"
                               onclick="carrito.guardarPedido();" value="Tramitar pedido"/>
                    </aside>

                    <section>
                        <h2>Sidras Tradicionales</h2>
                        <xsl:for-each select="sidras/sidra">
                            <div class="sidras">
                                
                                <h3>
                                    <xsl:value-of select="nombre"/>
                                </h3>
                                <xsl:apply-templates select="rutaFoto"/>
                                 <p>
                                    <strong><br></br>Descripción:
                                    <br></br>
                                    </strong>
                                    <xsl:value-of select="descripcion"/>
                                </p>

                                <p>
                                    <strong><br></br>Composición:
                                        <br></br>
                                    </strong>
                                    <xsl:for-each select="composicion/compuesto">
                                        <xsl:choose>
                                            <xsl:when test="position() != last()">
                                                <xsl:value-of select="."/><xsl:text>, </xsl:text>
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <xsl:value-of select="."/><xsl:text>.</xsl:text>
                                            </xsl:otherwise>
                                        </xsl:choose>
                                    </xsl:for-each>
                                </p>
                                <p>
                                    <strong><br></br>Precio:
                                    </strong>
                                    <xsl:value-of select="precio"/><xsl:text> </xsl:text><xsl:value-of
                                            select="precio/@unidad"/>
                                </p>

                                <xsl:if test=" calorias != '' ">
                                    <p>
                                        <strong><br></br>Calorías:
                                            <br></br>
                                        </strong>
                                        <xsl:value-of select="calorias"/><xsl:text> </xsl:text><xsl:value-of
                                            select="calorias/@unidadCal"/><xsl:text> por </xsl:text><xsl:value-of
                                            select="calorias/@cantidad"/><xsl:text> </xsl:text><xsl:value-of
                                            select="calorias/@unidad"/>
                                    </p>
                                </xsl:if>
                            </div>
                        </xsl:for-each>
                     
                    </section>
                </main>
                <footer class="footer">
                
                    <div class="footer-izquierda">
                    <h3>Llagar Online<span>
                    <img src="../IMG/astur.png" alt="Imagen de escudo" />
                </span></h3>
                        
                     

                   <div class="footer-menu">
                <h3>Mapa web</h3>
                <ul>
                    <li><a href="../index.html" title="Ir a la página principal">Principal</a></li>
                    <li><a href="historia.html" title="Ir a la página de la historia">Historia</a></li>
                    <li><a href="productos.html" title="Ir a la página de los productos">Productos</a></li>
                    <li><a href="establecimientos.html" title="Ir a la página de establecimientos">Establecimientos</a>
                    </li>
                    <li><a href="contacto.html" title="Ir a la página de contacto">Contacto</a></li>
                </ul>
            </div>
            </div>

            <div class="footer-centro">
            <address>
            <div>
                <em class="direccion"></em>
                <p><span>C/ Castejón Fuero, 23, 33013</span> Oviedo, Asturias, España</p>
            </div>

            <div>
                <em class="telefono"></em>
                <p>985 202 122 - 999 000 789</p>
            </div>

            <div>
                <em class="autor"></em>
                <p><span>Web hecha por:</span></p>
                <p><a href="mailto:uo202549@uniovi.es">Germán Iglesias Ramos UO202549</a></p>
            </div>
        </address>
        </div>
        <div class="footer-derecha">
                    <div class="accesibilidad">
                        <h3>Sobre la accesibilidad</h3>
                        <p>Web optimizada para su uso en los siguientes navegadores:
                            <br></br>
                            Internet Explorer 8, Firefox 2.0 o superior, Safari, Ópera y Chrome.
                            <br></br>
                            Sitio web creado con CSS &#38; HTML válidos. • Accesibilidad AAA.
                        </p>
                    </div>
                     </div>
                    <div class="clear"></div>
                </footer>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="sidra">
        <input type="button" onclick="carrito.addElemento('{./nombre}','{./precio}');" value="Añadir"/>
    </xsl:template>

    <xsl:template match="rutaFoto">

        <a href="{.}">
            <xsl:text> </xsl:text>
            <img src="{.}" alt="imagen sidra">
            </img>
        </a>

    </xsl:template>
</xsl:stylesheet>