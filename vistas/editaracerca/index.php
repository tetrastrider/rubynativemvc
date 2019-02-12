<?php if(isset($_SESSION['user'])){ ?>
<body><div class="todo">
    <div class="cabeza">
    <a href="inicio"><div class="imglogo">

<p><span class="font-effect-3d-float">OVERCLOCK<span class="b">.</span>TECH</span></p>
</div></a>
<div class="mi">
	<a href="inicio"><div class="col">Sitio Web</div></a>
  <a href="publicaciones"><div class="col">Publicaciones</div></a>
  <a href="Administrador"><div class="col">Publicar</div></a>
  <a href="editaracerca"><div class="col" id="activo">Editar Acerca</div></a>
  <a href="editarservicios"><div class="col" >Editar Servicios</div></a>
  <a href="portada"><div class="col">Portada</div></a>
</div>
    </div>
<div class="cuerpo">
  <div class="logeo">
  {log}
</div>

<h2 class="h2 font-effect-3d-float">Editar Qu&iacute;enes Somos</h2>
<ul class="mm">
<li><a href="inicio">Inicio</a></li>
<li class="divider"></li>
<li class="activo"><a>Editar Qu&iacute;enes Somos</a></li>
</ul>

<div class="acerca">
<h2 class="font-effect-3d-float">Acerca de Nosotros</h2>
<div class="ofrecidos">
  <form action="/editaracerca/actualizar" method="post" class="public" enctype="multipart/form-data">
   <textarea name="contenido" id="contenido" class="ckeditor">
<?php $acerca = $this->acerca; ?>
                    <?php foreach($acerca as $acerca){ ?>
                        <b><?= $acerca['acerca']; ?></b>
                    <?php } ?>
</textarea>
<script type="text/javascript">

var editor = CKEDITOR.replace( 'contenido', {
    filebrowserBrowseUrl : 'ckfinder/ckfinder.html',
    filebrowserImageBrowseUrl : 'ckfinder/ckfinder.html?type=Images',
    filebrowserFlashBrowseUrl : 'ckfinder/ckfinder.html?type=Flash',
    filebrowserUploadUrl : 'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    filebrowserImageUploadUrl : 'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
    filebrowserFlashUploadUrl : 'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'
});
CKFinder.setupCKEditor( editor, '../' );

</script>
 <hr><center><input type="submit" class="btn btn-naranja" value="Publicar"></center><hr></form>
</div>
<h2 class="h2 margen30 font-effect-3d-float">Nosotros</h2>

<div class="personal">
<?php $per=$this->personal;foreach($per as $per){ ?>
<div class="persona">
<img src="<?=$per["fotop"];?>" class="fotop"/>
<p><b class="autor"><?=$per["nombre"];?></b></p>
<p><?=$per["cargo"];?></p>
</div>
<?php } ?>
</div>
</div>
<div class="billete">
<a href="test/rss.php" title="lector de noticias"><img src="imagenes/rss.png" class="rss"/></a>
<a href="http://www.youtube.com" title="Vea nuestros videos en youtube"><img src="imagenes/youtubeFooter.png" class="rss"/></a>
<a href="http://www.instagram.com" title="Vea nuestras fotos mas recientes en instagram"><img src="imagenes/instagramf.jpg" class="rss"/></a>
<a href="http://www.facebook.com" title="Siguenos en facebook"><img src="imagenes/facebook_01.gif" class="rss"/></a>

</div>
</div><span id="es"></span><?php }else{header("location:inicio");} ?>