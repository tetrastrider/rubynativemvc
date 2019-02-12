
<body><div class="todo">
    <div class="cabeza">
    <a href="inicio"><div class="imglogo">

<p><span class="font-effect-3d-float">overclock<span class="b">.</span>tech</span></p>
</div></a>
<div class="mi">
	<a href="inicio"><div class="col">Sitio Web</div></a>
	<a href="publicaciones"><div class="col">Publicaciones</div></a>
	<a href="Administrador"><div class="col" id="activo">Publicar</div></a>
	<a href="editaracerca"><div class="col">Editar Acerca</div></a>
	<a href="editarservicios"><div class="col" >Editar Servicios</div></a>
	<a href="portada"><div class="col">Portada</div></a>
	
</div>
    </div>

<div class="cuerpo">
 <div class="logeo">
{log}
</div>
<h2 class="h2 font-effect-3d-float">Publicar</h2>
<ul class="mm">
<li><a href="inicio">Inicio</a></li>
<li class="divider"></li>
<li class="activo"><a>Publicar</a></li>
</ul>
<div class="servicios">
<h2 class="font-effect-3d-float">Publicar Noticia</h2>
<div class="ofrecidos padding0">
<form action="/administrador/publicar" method="post" class="public" enctype="multipart/form-data">
    <div class="publi">
     <input type="text" name="titulo" placeholder="Titulo:"/>
     <label class="c custom-select">
     <select name="categoria"><option selected>Selecione una Categoria</option>
     {LOOP:cat}
    <option value="{categoria}">{categoria}</option>
    {ENDLOOP}</select></label>
    <input type="hidden" name="user" value="[usuario]"/>
    <div class="fileUpload boton"><span>Portada</span><input type="file" name="foto" class="upload"/></div>
</div>
    <textarea name="contenido" id="contenido" class="ckeditor">
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
</div></div>
<div class="servicios">
	
	</div>
</div><span id="es"></span>