require_relative'../app/database'
require_relative '../mysql'
class Modelo<Database
  def initialize
    @conexion = Database.new
  end
end