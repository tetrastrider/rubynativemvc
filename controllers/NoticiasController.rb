require_relative '../app/controlador.rb'

class NoticiasController<Controlador

    def initialize
      super
      Controlador
      @noticias = modelo

    end

    def inicio
      if get('orden')==''
        orden= 'DESC'
      else
        orden= get('orden')
      end
    if get('pag')==''
        pagina=1
    else
        pagina=get('pag').to_i
    end

    if pagina == 1
      selected ='class="selecion"'
    else
      selected = ''
    end
    if get('limite')==''
      limite=5
    else
      limite=get('limite').to_i
    end
    
      noticias=@noticias.noticias(orden,pagina,limite)
      categoria=@noticias.categorias
      comentario=@noticias.comentario
      musica=@noticias.musica
      total =@noticias.contador(limite)
      if pagina == total
      selected2='class="selecion"'
    else
      selected2=''
    end
      contenido={:ant=>pagina-1,:selected2=>selected2,:total=>total,:limite=>limite,:orden=>orden,:sig=>pagina+1,:selected=>selected,:pag=>pagina,:musica=>musica,:comentario=>comentario,:categorias=>categoria,:noticias=>noticias,:script=>script,:log=>'<div id="l_error"></div><form action="./" method="get"><input type="text"id="lusuario"placeholder="Usuario :"name="usuario"title="usuario"><input type="text"id="lpass"name="pass"title="contrase&ntilde;a"placeholder="Contrase&ntilde;a :"><input type="submit" class="boton"value="Entrar"id="dale"title="entrar"><a href="registro"title="registrarse">Registrarse</a><a href="recuperar"title="recuperar contrase&ntilde;a">Recuperar Contrase&ntilde;a</a></form>'}
      @vista.renderizar('inicio',false,contenido)


    end

    def simple
      id= get('id')
      noticias=@noticias.noticia(id)
      categoria=@noticias.categorias
      comentario=@noticias.comentario
      musica=@noticias.musica
      comxid=@noticias.comxid(id)
      contenido={:comxid=>comxid,:musica=>musica,:comentario=>comentario,:categorias=>categoria,:noticias=>noticias,:script=>script,:log=>'<div id="l_error"></div><form action="./" method="get"><input type="text"id="lusuario"placeholder="Usuario :"name="usuario"title="usuario"><input type="text"id="lpass"name="pass"title="contrase&ntilde;a"placeholder="Contrase&ntilde;a :"><input type="submit" class="boton"value="Entrar"id="dale"title="entrar"><a href="registro"title="registrarse">Registrarse</a><a href="recuperar"title="recuperar contrase&ntilde;a">Recuperar Contrase&ntilde;a</a></form>'}
      @vista.renderizar('simple',false,contenido)

    end

    def cuerpo
      orden= get('orden')
      noticias=@noticias.noticias(orden)
      contenido={:noticias=>noticias}
      @vista.renderizar('cuerpo',true,contenido)
    end

    def categorias
      if get('orden')==''
        orden= 'DESC'
      else
        orden= get('orden')
      end
      cate= get('cat')
      noticias=@noticias.catnoticia(orden,cate)
      categoria=@noticias.categorias
      comentario=@noticias.comentario
      musica=@noticias.musica
      contenido={:categ=>cate,:musica=>musica,:comentario=>comentario,:categorias=>categoria,:noticias=>noticias,:script=>script,:log=>'<div id="l_error"></div><form action="./" method="get"><input type="text"id="lusuario"placeholder="Usuario :"name="usuario"title="usuario"><input type="text"id="lpass"name="pass"title="contrase&ntilde;a"placeholder="Contrase&ntilde;a :"><input type="submit" class="boton"value="Entrar"id="dale"title="entrar"><a href="registro"title="registrarse">Registrarse</a><a href="recuperar"title="recuperar contrase&ntilde;a">Recuperar Contrase&ntilde;a</a></form>'}
      @vista.renderizar('categorias',false,contenido)
    end
end
