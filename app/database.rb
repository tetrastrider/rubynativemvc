require "rubygems"
require_relative '../mysql'
class Database
  def initialize
    @con = Mysql.new('127.0.0.1', 'root', '', 'simple')
    @con.query("SET NAMES UTF8")
  end

  def query(query)
    consulta=@con.query(query)
    return consulta
  end
  #conexion.close
end

