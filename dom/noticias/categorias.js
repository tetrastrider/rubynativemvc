
$(document).ready(function(){
$('.cuerpo').hide().fadeIn(3000)
/************************************/
/**************resaltador*****************/
 hljs.configure({tabReplace: '    '});
  hljs.initHighlightingOnLoad(); 
  /************************************/
function sonido(soundfile) {
 document.getElementById("es").innerHTML=
 "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
 }
 /*********************************************/
 var audio;
var playlist;
var tracks;
var current;

init();
function init(){
    current = 0;
    audio = $('#audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    audio[0].volume = .5;
    audio[0].play();
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];    
        }
        run($(link),audio[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].play();
}
 /*******************chat**************************/
/**scroll down**/
window.setInterval(function(){

var scrolltoh = $('.message_box')[0].scrollHeight;
     $(".message_box").animate({ scrollTop: scrolltoh },4000);

 }, 5000);
    // load messages every 1000 milliseconds from server.
    load_data = {'fetch':1};
    window.setInterval(function(){
     $.post('/libreria/shout.php', load_data,  function(data) {
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
                $.post('/libreria/shout.php', post_data, function(data) {
                    
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


});
/*************ajax cambio******************************************************/
function from(){

var url = '/noticias/ccuerpo/';
var limite = $('select[name="limit"]').val();
var orden = $('select[name="cambio"]').val();
var pagina = $('input[name="pagina"]').val();
var cat = $('input[name="cat"]').val();
var azar=parseInt(Math.random()*99999999);
var ide="noticia";
 var direcion="?pag="+pagina+"&orden="+orden+"&limite="+limite+"&cat="+cat+"&"+azar;
    $.ajax({
              url:url,
              type: "GET",
              cache:false,
              data:direcion,
              dataType: "html"
        }).done(function(re) { $('#noticia').html(re); });

}
/**************************************/
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
