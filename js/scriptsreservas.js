$(document).ready(function(){
  // AFTER SUBMIT DE RESERVA FORM
  $('.formularioReservas').submit(function(event){
    event.preventDefault();
    $(".overlayValidado").css("display", "flex")
  });
});
