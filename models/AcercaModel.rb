require_relative'../app/modelo'
class AcercaModel<Modelo

    def initialize
      super

    end
    def acerca
      resultado = @conexion.query("SELECT * FROM acerca")
      resultado.each_hash { |h|resultado= h['acerca']}
      return resultado
    end

    def personal
      resultado = @conexion.query("SELECT * FROM personal")
      return resultado
    end
end
