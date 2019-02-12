#!C:/Ruby22/bin/ruby.exe
#!/usr/bin/env ruby
#!/ruby/bin/ruby
require 'cgi'
require'erb'
require'cgi_exception'
require'erubis'
require 'cgi/html'
cgi = CGI.new("html4")
print cgi.header
load 'app/request.rb'
load 'app/boostrap.rb'
load 'app/vista.rb'
load 'app/controlador.rb'
load 'app/database.rb'
load'app/modelo.rb'
