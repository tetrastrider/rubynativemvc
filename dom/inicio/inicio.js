$(document).ready(function(){


 $('.cuerpo').hide().fadeIn(3000)
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