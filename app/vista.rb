require_relative '../app/request.rb'
require 'ostruct'
class Vista<Request
  def initialize
    super
    @controlador=controlador
    @vista = metodos
  end
  def renderizar(vista,jax=false,variasut)

    cabeza = 'maqueta/cabeza.rhtml'
    pie = 'maqueta/pie.rhtml'
    cuerpo = 'vistas/'+@controlador+'/'+vista+'.rhtml'
    if jax==false
      contenido = File.read(cabeza)
    end
    if jax==false
      contenido += File.read(cuerpo)
    else
      contenido = File.read(cuerpo)
    end
    if jax==false
      contenido += File.read(pie)
    end

    # read in your template

    template = ERB.new(contenido)
    var = OpenStruct.new(variasut)
    content = template.result(var.instance_eval {binding})


# Print stuff
    cgi = CGI.new("html4")

    print content

  end
end


