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
 