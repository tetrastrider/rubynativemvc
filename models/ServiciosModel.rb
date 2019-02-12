require_relative'../app/modelo'
class ServiciosModel<Modelo

    def initialize
      super

    end
    def servicio
      resultado = @conexion.query("SELECT * FROM servicios")
      resultado.each_hash { |h|resultado= h['servicio']}
      return resultado
    end

end
