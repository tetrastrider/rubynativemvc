require_relative '../app/controlador.rb'
class InicioController<Controlador

    def initialize
      super
      Controlador
      @modelo = modelo

    end

    def inicio
      contenido={:facebook=>'//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2FDOMLOTERIA%3Ffref%3Dts&amp;width=1230&amp;height=285&amp;show_faces=true&amp;colorscheme=light&amp;stream=false&amp;show_border=false&amp;header=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:96%; height:285px;" allowTransparency="true" class="fright',:script=>script,:banner =>['/imagenes/ps4white.jpg','/imagenes/noticia.jpg'],:titulo=>['playstation 4','xboxone'],:log=>'<div id="l_error"></div><form action="./" method="get"><input type="text"id="lusuario"placeholder="Usuario :"name="usuario"title="usuario"><input type="text"id="lpass"name="pass"title="contrase&ntilde;a"placeholder="Contrase&ntilde;a :"><input type="submit" class="boton"value="Entrar"id="dale"title="entrar"><a href="registro"title="registrarse">Registrarse</a><a href="recuperar"title="recuperar contrase&ntilde;a">Recuperar Contrase&ntilde;a</a></form>'}
      @vista.renderizar('inicio',false,contenido)

    end


end
