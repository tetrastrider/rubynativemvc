<body><div class="todo">
    <div class="cabeza">
    <a href="inicio"><div class="imglogo">

<p><span class="font-effect-3d-float">OVERCLOCK<span class="b">.</span>TECH</span></p>
</div></a>
<div class="mi">
 <a href="inicio"><div class="col">Sitio Web</div></a>
  <a href="publicaciones"><div class="col" id="activo">Publicaciones</div></a>
  <a href="Administrador"><div class="col" >Publicar</div></a>
  <a href="editaracerca"><div class="col">Editar Acerca</div></a>
  <a href="editarservicios"><div class="col" >Editar Servicios</div></a>
  <a href="portada"><div class="col">Portada</div></a>
</div>
    </div>

<div class="cuerpo">
<div class="logeo">
  {log}
</div>

<div class="buscar">
<h2 class="h2 font-effect-3d-float" title="publicaciones">publicaciones</h2>
<form name="buscador" action="publicaciones"><input type="text" name="b" placeholder="Buscar:"/><input type="submit" value="buscar"title="buscar"/></form>
</div>



<ul class="mm">
<li><a href="inicio"title="inicio">Inicio</a></li>
<li class="divider"></li>
{IF:ecxi}
<li class="activo"><a>publicaciones</a></li>
{ELSEIF:llenocat}
<li><a href="publicaciones">publicaciones</a></li>
<li class="divider"></li>
<li class="activo"title="[cat]"><a>[cat]</a></li>

{ELSE}
<li><a href="publicaciones">publicaciones</a></li>
<li class="divider"></li>
<li title="[categ]"><a href="/publicaciones?/{pagina}/{orden}/{limi}/[categ]">[categ]</a></li>
<li class="divider"></li>
<li class="activo"title="[titusim]"><a>[titusim]</a></li>

{ENDIF}
</ul>

<div class="servicios">

<div class="limite">
<form  name="orden" method="get">
 
<input type="hidden" name="pagina" value="{pagina}"/>
<input type="hidden" name="categoria" value="{cat}"/>
<input type="hidden" name="url" value="/publicaciones/cuerpo"/>
<label class="m custom-select">

<select onChange="from()" name="limit">
{IF:ide}
<option {si} value=5>5</option>
<option {si2} value=10>10</option>
<option {si3} value=15>15</option>
<option {si4} value=20>20</option>
<option {si5} value=25>25</option>
<option {si6} value=30>30</option>
{ENDIF}
</select>
</label>

<label class="n custom-select">
<select onChange="from()" name="cambio">
{IF:ide}
<option {ok} value=1>Publicaciones Anteriores</option>
<option {ok1} value=2>Publicaciones Nuevas</option>
{ENDIF}
</select>

</label> </form>
</div>

<div id="noticia">

<?php
foreach($no as $data):?>
<div class="articulo">
{IF:ide}
<h2 title="<?=$data["titulo"];?>"><?=$data["titulo"];?></h2>
<img src="<?=$data["foto"];?>" class="imart"/>
{ELSE}
<form action="/publicaciones/actualizar" method="post" class="public" enctype="multipart/form-data">
<div class="xlr">
  <input type="text" name="titulo" placeholder="Titulo:" value="<?=$data["titulo"];?>"/>
<label class="c custom-select">
     <select name="categoria">
      <option selected value="<?=$data["categoria"];?>"><?=$data["categoria"];?></option>

     {LOOP:cate}
    <option value="{categoria}">{categoria}</option>
    {ENDLOOP}</select></label></div>
    <input type="hidden" name="user" value="{usuario}"/>
    <input type="hidden" name="ofoto" value="<?=$data["foto"];?>"/>
    <div class="fileUpload boton"><span>Portada</span><input type="file" name="foto" class="upload"/></div>

{ENDIF}
<div class="descrip">

<p>
{IF:nide}

 <textarea name="contenido" id="contenido" class="ckeditor">
 <?=$data["contenido"];?>
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
<hr><center><input type="submit" class="btn btn-naranja" id="update" value="Actualizar"></center><hr>
</form>
{ELSE}
  <?= Controller::leermas($data["contenido"],540);?>... 
{ENDIF}</p>

</div>
<div class="leer">
  {IF:ide}
<a href="publicaciones?id=<?=$data["id"];?>" class="boton"title="editar">EDITAR</a>
<a href="/publicaciones/eliminar?id=<?=$data["id"];?>" class="boton">Borrar</a>
{ELSE} <a href="publicaciones" class="boton"title="atras">Atras</a>{ENDIF}
</div>
<div class="date">
<p><i class="fa fa-calendar"></i> PUBLICADO <?=$data["publicado"];?> </p>
<p class="autor"> <i class="fa fa-user"></i> <?=$data["user"];?></p>
<p><i class="fa fa-eye"></i> <?=$data["visitas"];?> Visitas</p>
<p class="autor"><i class="fa fa-comments"></i> <?php $aux->co($data["id"]);?> COMENTARIOS</p>
<p><i class="fa fa-tags"></i> <?=$data["categoria"];?></p></div>

</div>
<?php endforeach?>

{IF:ide}
<div class="paginador">
<ul class="pagina">
<li {selecion}>{link}</li>
<li {selecion}>{link2}</li>
<li>{pagina}</li>
<li {selecion2}>{link3}</li>
<li {selecion2}>{link4}</li>
  </ul>
  </div>
{ENDIF}
</div>
<div class="categoria">
<h2>Categorias</h2>
<div class="cat">
  {LOOP:cate}
<a href="publicaciones?/[pagina]/[orden]/[limi]/{categoria}"><p><i class="fa fa-tags"></i> {categoria} </p></a>
{ENDLOOP}
</div>
<h2>Ultimos Comentarios</h2>
<div class="combello">
<?php 
foreach($come as $come){?>
<a href="publicaciones?id=<?=$come["id_contenido"];?>"><div class="comecont">
<img src="<?=$come["foto"];?>" class="fotocom"/>
<p class="autor"><i class="fa fa-user"></i> <?=$come["autor"];?></p>
<p><?=Controller::leermas($come["comentario"],155);?>...</p>
<p><i class="fa fa-calendar"></i> <?=$come["publicado"];?>
 <span class="autor"><i class="fa fa-tags"></i> <?=$come["categoria"];?></span></p>
</div></a>
<?php }
?>
</div>
<a href="test/rss.php" title="lector de publicaciones"><img src="imagenes/rss.png" class="rss"/></a>
<a href="http://www.youtube.com" title="Vea nuestros videos en youtube"><img src="imagenes/youtubeFooter.png" class="rss"/></a>
<a href="http://www.instagram.com" title="Vea nuestras fotos mas recientes en instagram"><img src="imagenes/instagramf.jpg" class="rss"/></a>
<a href="http://www.facebook.com" title="Siguenos en facebook"><img src="imagenes/facebook_01.gif" class="rss"/></a>
<!--AUDIOPLAYER-->
<audio id="audio" preload="auto" tabindex="0" controls="" type="audio/mpeg">
  
        <source type="audio/mp3" src="[musicasimple]"> 
    </audio>
            <ul id="playlist">
              {LOOP:musica}
        <li>
            <a href="{musica}">
                {titulo}
            </a>
        </li>
        <?php } ?>
    </ul>      
<!--chatbox-->
<div class="shout_caja">
<div class="header">overclocktech<span class="naranja"> . </span>chat <div class="open_btn">&nbsp;</div></div>
  <div class="toggle_chat">
  <div class="message_box">
    </div>
    <div class="user_info">
    [shout]
   <input name="shout_message" id="shout_message" type="text" placeholder="Escribe un mensaje y Pulsa Enter" maxlength="100" />
   <span id="es"></span> 
    </div>
    </div>
</div>
<!--chatbox-->

</div>

</div>

</div>