class Request
  def initialize
    url=ENV['REQUEST_URI']
    url = url.split('/')
    control = url[1]
    metodo = url[2]
    argumentos = url[3]

    if control.nil?
      @control='inicio'
    else
      @control=control
    end

    if metodo.nil?
      @metodo='inicio'
    else
      @metodo=metodo
    end

    if argumentos.nil?
      @argumentos=[]
    else
      @argumentos=argumentos
    end

  end

  def controlador
    return @control
  end

  def metodos
    return @metodo
  end

  def args
    return @argumentos
  end
end

