require_relative '../app/controlador.rb'
class ContactoController<Controlador

    def initialize
      super
      Controlador

    end

    def inicio
      contenido={:script=>script}
      @vista.renderizar('inicio',false,contenido)


    end


end
