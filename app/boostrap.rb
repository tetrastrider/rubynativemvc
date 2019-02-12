class Boostrap< Request

  def initialize
    super
    @controller = controlador
    @action = metodos
    @agum = args


  end

  def run
    controlador = @controller.capitalize+'Controller'

    metodo = @action
    arg = @agum
    rutaControlador = 'controllers/'+controlador+'.rb';

    if File.exist?(rutaControlador)

      require_relative '../controllers/'+controlador+'.rb'
      auto = Object.const_get(controlador)
      carga = auto.new
      carga.send(metodo)

    else
      puts'el controlador no existe'
    end
  end

end
boostrap = Boostrap.new
boostrap.run