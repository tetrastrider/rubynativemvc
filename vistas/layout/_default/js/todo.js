function ajax()
{ var req = false; try { req = new XMLHttpRequest(); } catch(err1) { try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch(err2) { try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch(err3) { req = false; } } } return req; }
var ajax = ajax();
//***************************************************************************************//
function from(orden,ide,url,limit){
    var azar=parseInt(Math.random()*99999999);
    var vinculo=url+"?orden="+orden+"&rand="+azar+"&limit="+limit;
    ajax.open("GET",vinculo,true);
    ajax.onreadystatechange=ajax.onreadystatechange=function(){
        if (ajax.readyState==4)
        {
            if (ajax.status==200)
            {
                var http=ajax.responseText;
                document.getElementById(ide).innerHTML= http;
}}}
    ajax.send(null);

}
//***************************************************************************************//
function pagina(ide,url){
    var azar=parseInt(Math.random()*99999999);
    var vinculo=url+"?&rand="+azar;
    ajax.open("GET",vinculo,true);
    ajax.onreadystatechange=ajax.onreadystatechange=function(){
        if (ajax.readyState==4)
        {
            if (ajax.status==200)
            {
                var http=ajax.responseText;
                document.getElementById(ide).innerHTML= http;
}}}
    ajax.send(null);

}
/***************************chat box******************************************************************/
function sonido(soundfile) {
 document.getElementById("es").innerHTML=
 "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
 }
$(document).ready(function() {
   
  /**scroll down**/
window.setInterval(function(){

var scrolltoh = $('.message_box')[0].scrollHeight;
     $(".message_box").animate({ scrollTop: scrolltoh },4000);

 }, 5000);
    // load messages every 1000 milliseconds from server.
    load_data = {'fetch':1};
    window.setInterval(function(){
     $.post('shout.php', load_data,  function(data) {
        $('.message_box').html(data);
        
       
     });
    }, 1000);
    
    //method to trigger when user hits enter key
    $("#shout_message").keypress(function(evt) {
        if(evt.which == 13) {
                var iusername = $('#shout_username').val();
                var imessage = $('#shout_message').val();
                post_data = {'username':iusername, 'message':imessage};
                
                //send data to "shout.php" using jQuery $.post()
                $.post('shout.php', post_data, function(data) {
                    
                    //append data into messagebox with jQuery fade effect!
                    $(data).hide().appendTo('.message_box').fadeIn();
    
                    //reset value of message box
                    $('#shout_message').val('');
                    sonido("sonido/codec.mp3")
                    
                }).fail(function(err) { 
                
                //alert HTTP server error
                alert(err.statusText); 
                });
            }
    });
    
    //toggle hide/show shout box
    $(".close_btn").click(function (e) {
        //get CSS display state of .toggle_chat element
        var toggleState = $('.toggle_chat').css('display');
        
        //toggle show/hide chat box
        $('.toggle_chat').slideToggle();
        
        //use toggleState var to change close/open icon image
        if(toggleState == 'block')
        {
            $(".header div").attr('class', 'open_btn');
        }else{
            $(".header div").attr('class', 'close_btn');
        }     
         
    });
});
/*************************************************/
function clase(){
 function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("relog").firstChild.nodeValue = currentTimeString;
}
/************************************************************************************/
function addZero(i)
{
if (i<10) 
  {
  i="0" + i;
  }
return i;
}

function hora()
{
var d=new Date();
var h=addZero(d.getHours());
var m=addZero(d.getMinutes());
var s=addZero(d.getSeconds());
x=h + ":" + m + ":" + s;
return x;
}
function fecha()
{
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=new Date();
fech=diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
return fech;
}
 function playSound(soundfile) {
 document.getElementById("es").innerHTML=
 "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
 }

$(document).ready(function(){


    //create a new WebSocket object.
    var wsUri = "ws://127.0.0.1:8081/dos/clase/server.php";     
    websocket = new WebSocket(wsUri); 
    
    websocket.onopen = function(ev) { // connection is open 
        $('#conuser').append("<div class=\"system_msg\">Conectado</div>"); //notify user
    }

        function enviar(){
            var mymessage = $('#mensajes').val(); //get message text
        var myname = $('#nombrec').val(); //get user name
        
        if(myname == ""){ //empty name?
            alert("Entre su Nombre!");
            return;
        }
        if(mymessage == ""){ //emtpy message?
            alert("Entrar Mensaje!");
            return;
        }
        $( "#nombrec" ).hide();
        $( "#mensajes" ).addClass( "cambio" );

        //prepare json data
        var msg = {
        message: mymessage,
        name: myname,
        color : '<?php echo $colours[$user_colour]; ?>',
        publicado: ""+fecha()+" "+hora() //********************************************************************//
        };
        //convert and send data to server
        websocket.send(JSON.stringify(msg));
        $("#caja").animate({
             scrollTop: '0px'
         },
         1500);
        }
    $('#send-btn').click(function(){ //use clicks message send button   
        enviar()
    });
    $( "#mensajes" ).keypress(function(event) {
  if(event.keyCode == '13'){
    enviar()
  }
});
    //#### Message received from server?
    websocket.onmessage = function(ev) {
        var msg = JSON.parse(ev.data); //PHP sends Json data
        var type = msg.type; //message type
        var umsg = msg.message; //message text
        var uname = msg.name; //user name
        var ucolor = msg.color; //color
        var todos = msg.clientes;
        var publicado = msg.publicado;
        if(type == 'usermsg') 
        {
            $('#caja').prepend("<div class=\"comentarioscont\"><img src=\"imagenes/<?= $cuadro;?>\" class=\"fotocom\"><p class=\"autor\"><i class=\"fa fa-user\"></i> <span style=\"color:#"+ucolor+"\">"+uname+"</span></p><p class=\"mensaje\">"+umsg+"</p><p><i class=\"fa fa-calendar\"></i> "+publicado+"</p></div>");
        }
        if(type == 'system')
        {
            $('#caja').append("<div class=\"system_msg\"></div>");
        }
        $('#mensajes').val(''); //reset text
        $("#caja").animate({
             scrollTop: '0px'
         },
         1500);

        object = $("."+uname)
        if(object.length==0) {
    
        if(typeof uname!="undefined"){
        $('#conuser').append("<div class=\""+uname+"\"><span style=\"color:#"+ucolor+"\">"+uname+"</span></div>");
    } }
        playSound("sonido/codec.mp3")
        $('#contador').html("Conectados : "+todos);
    };
    
    websocket.onerror   = function(ev){$('#caja').append("<div class=\"system_error\">Error Occurred - "+ev.data+"</div>");}; 
    websocket.onclose   = function(ev){
        //clase="."+uname;

        //$(clase).remove();
    }; 
}); }
//var clase = new clase();
/*******************************************************/
$(document).ready(function() {
    $("#submit_btn").click(function() { 
        //get input field values
        var user_name       = $('input[name=name]').val(); 
        var user_email      = $('input[name=email]').val();
        var user_phone      = $('input[name=phone]').val();
        var user_message    = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(user_name==""){ 
            $('input[name=name]').css('border-color','red'); 
            proceed = false;
        }
        if(user_email==""){ 
            $('input[name=email]').css('border-color','red'); 
            proceed = false;
        }
        if(user_phone=="") {    
            $('input[name=phone]').css('border-color','red'); 
            proceed = false;
        }
        if(user_message=="") {  
            $('textarea[name=message]').css('border-color','red'); 
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed) 
        {
            //data to be sent to server
            post_data = {'userName':user_name, 'userEmail':user_email, 'userPhone':user_phone, 'userMessage':user_message};
            
            //Ajax post data to server
            $.post('contact_me.php', post_data, function(response){  

                //load json data from server and output message     
                if(response.type == 'error')
                {
                    output = '<div class="error">'+response.text+'</div>';
                }else{
                    output = '<div class="success">'+response.text+'</div>';
                    
                    //reset values in all input fields
                    $('input[name=name]').val(''); 
                    $('input[name=email]').val('');
                    $('input[name=phone]').val('');
                    $('textarea[name=message]').val('');
                }
                
                $("#result").hide().html(output).slideDown();
            }, 'json');
            
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function() { 
        $("#contact_form input, #contact_form textarea").css('border-color',''); 
        $("#result").slideUp();
    });
    $("#borrar").click(function() { 
                $('input[name=name]').val(''); 
                $('input[name=email]').val('');
                $('input[name=phone]').val('');
                $('textarea[name=message]').val('');
    });
});
/**************************************************************/
$(document).ready(function(){
    $("#l_error").css('display', 'none', 'important');
     $("#dale").click(function(){
     event.preventDefault(); 
          username=$("#lusuario").val();
          password=$("#lpass").val();

                      var request = $.ajax({
              url: "verificar.php",
              type: "GET",
              data: { usuario:username,password:password },
              dataType: "html"
            });
             
            request.done(function( msg ) {
            
              if(msg=='true')    {
             window.location="administrador.php";
            }
            else    {
            $("#l_error").css('display', 'table', 'important');
             $("#l_error").html("usuario o password incorrectos").fadeOut( 1000 );
             username.val('');
             password.val('');
            }
            
            });
             
            request.fail(function( jqXHR, textStatus ) {
              alert( "Request failed: " + textStatus );
            });

            return false;
    });
});