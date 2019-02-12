require_relative '../app/vista.rb'
require 'cgi'
class Controlador<Vista

  def initialize
    @vista = Vista.new
    @rest = Request.new
    @controles = @vista.controlador
    @action = @vista.metodos
    @form = CGI.new

  end

  def script
    value='<script type="text/javascript" language="javascript" src="/dom/'+@controles+'/'+@action+'.js"></script>';
    return value
  end
  def modelo
    ruta='models/'+@vista.controlador.capitalize+'Model.rb'
    mod='../models/'+@vista.controlador.capitalize+'Model.rb'
    if File.exist?(ruta)
      require_relative mod
      modelo = @vista.controlador.capitalize+'Model'
      auto = Object.const_get(modelo)
      carga = auto.new
      return carga
    else puts 'El Modelo no Existe'
    end

  end
  def get(var)
    vari=@form[var]
    return vari
  end
end
