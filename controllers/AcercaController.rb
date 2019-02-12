require_relative '../app/controlador.rb'
class AcercaController<Controlador

    def initialize
      super
      Controlador
      @acerca = modelo

    end

    def inicio
      arc=@acerca.acerca
      
      contenido={:acerca=>arc,:script=>script,:log=>'<div id="l_error"></div><form action="./" method="get"><input type="text"id="lusuario"placeholder="Usuario :"name="usuario"title="usuario"><input type="text"id="lpass"name="pass"title="contrase&ntilde;a"placeholder="Contrase&ntilde;a :"><input type="submit" class="boton"value="Entrar"id="dale"title="entrar"><a href="registro"title="registrarse">Registrarse</a><a href="recuperar"title="recuperar contrase&ntilde;a">Recuperar Contrase&ntilde;a</a></form>'}
      @vista.renderizar('inicio',false,contenido)

    end


end
