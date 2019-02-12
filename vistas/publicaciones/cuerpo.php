<div id="noticia">

<?php 
foreach($no as $data){ ?>
<div class="articulo">
<h2 title="<?=$data["titulo"];?>"><?=$data["titulo"];?></h2>
<img src="<?=$data["foto"];?>" class="imart"/>
<div class="descrip">
<p><?= Controller::leermas($data["contenido"],540)."...";?></p>
</div>
<div class="leer">

<a href="publicaciones?id=<?=$data["id"];?>" class="boton"title="editar">EDITAR</a>
<a href="/publicaciones/eliminar?id=<?=$data["id"];?>" class="boton">Borrar</a>

</div>
<div class="date">
<p><i class="fa fa-calendar"></i> PUBLICADO <?=$data["publicado"];?> </p>
<p class="autor"> <i class="fa fa-user"></i> <?=$data["user"];?></p>
<p><i class="fa fa-eye"></i> <?=$data["visitas"];?> Visitas</p>
<p class="autor"><i class="fa fa-comments"></i> <?php $aux->co($data["id"]);?> COMENTARIOS</p>
<p><i class="fa fa-tags"></i> <?=$data["categoria"];?></p></div>

</div>
<?php } ?>

<div class="paginador">
<ul class="pagina">
<li {selecion}>{link}</li>
<li {selecion}>{link2}</li>
<li>{pagina}</li>
<li {selecion2}>{link3}</li>
<li {selecion2}>{link4}</li>
</ul>
</div>
</div>