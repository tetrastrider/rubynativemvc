require_relative'../app/modelo'
class NoticiasModel<Modelo

    def initialize
      super

    end
    def noticias(orden,pagina,limite)
      paginacion=((pagina.to_i * limite.to_i)- limite.to_i)
      resultado = @conexion.query("SELECT id,titulo,foto,SUBSTRING(contenido,1,1300) as contenido,user,categoria,visitas,publicado,comentarios FROM noticias ORDER BY id #{orden} LIMIT #{paginacion},#{limite}")
      return resultado
    end

    def noticia(id)
      resultado = @conexion.query("SELECT * FROM noticias WHERE id="+id)
      return resultado
    end

    def categorias
      resultado = @conexion.query("SELECT * FROM categoria")
      return resultado
    end

    def comentario
      resultado = @conexion.query("SELECT id,SUBSTRING(comentario,1,150) as comentario,autor,foto,publicado,categoria,id_contenido FROM comentario ORDER BY id DESC LIMIT 5")
      return resultado
    end

    def comxid(id)
      resultado = @conexion.query("SELECT * FROM comentario WHERE id_contenido=#{id} ORDER BY id DESC")
      return resultado
    end

    def musica
      resultado = @conexion.query("SELECT * FROM musica ORDER BY RAND()")
      return resultado
    end

    def catnoticia(orden,cat)
      resultado = @conexion.query("SELECT id,titulo,foto,SUBSTRING(contenido,1,550) as contenido,user,categoria,visitas,publicado,comentarios FROM noticias WHERE categoria='#{cat}' ORDER BY id #{orden}")
      return resultado
    end

    def contador(lim)
        
        resultado= @conexion.query("SELECT COUNT(*) as mun FROM noticias")
        resultado.each_hash { |h| 
        @result=h['mun']}
        resultados= @result.to_f

        resultados=(resultados / lim).ceil

        return resultados
        end

end
