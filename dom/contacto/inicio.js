$(document).ready(function(){


 $('.cuerpo').hide().fadeIn(3000)
 /***********************************/
$("#l_error").css('display', 'none', 'important');
     $("#dale").click(function(){
     event.preventDefault(); 
          username=$("#lusuario").val();
          password=$("#lpass").val();

                      var request = $.ajax({
              url: "/usuario/logear",
              type: "GET",
              data: { usuario:username,password:password },
              dataType: "html"
            });
             
            request.done(function( msg ) {
            
              if(msg=='true')    {
             window.location="noticias";
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
/************************************/
 /************************************/
/**scroll down**/
window.setInterval(function(){

var scrolltoh = $('.message_box')[0].scrollHeight;
     $(".message_box").animate({ scrollTop: scrolltoh },4000);

 }, 5000);
    // load messages every 1000 milliseconds from server.
    load_data = {'fetch':1};
    window.setInterval(function(){
     $.post('/usuario/chat', load_data,  function(data) {
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
                $.post('/usuario/chat', post_data, function(data) {
                    
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
    $(".open_btn").click(function (e) {
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
 /*****************************/   
/*end document ready*/

});

/********************************/
//<![CDATA[
// Botón para Ir Arriba
jQuery.noConflict();
jQuery(document).ready(function() {
jQuery("#IrArriba").hide();
jQuery(function () {
jQuery(window).scroll(function () {
if (jQuery(this).scrollTop() > 200) {
jQuery('#IrArriba').fadeIn();
} else {
jQuery('#IrArriba').fadeOut();
}
});
jQuery('#IrArriba a').click(function () {
jQuery('body,html').animate({
scrollTop: 0
}, 1000);
return false;
});
});

});
//]]>
/*******************************/ 
