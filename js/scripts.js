$(document).ready(function(){
  // Carrousel
  new Splide( '.splide', {
      type   : 'loop',
      perPage: 3,
      perMove: 1,
      focus: "center",
      gap: "1em",
      drag: "free",
      autoWidth: true,
      autoScroll: {
        speed: 1,
      },
  }).mount();

  // OVERLAY Y SPINNER
  $(".reservar-mesa").click(function(){
      $(".overlayLoader").css("display","flex")
      setTimeout(() => {
          window.location.href = 'reservar.html';
      }, 2000);
  });

  // AFTER SUBMIT DE RESERVA FORM
  $('.formularioReservas').submit(function(event){
    event.preventDefault();
    alert("Submitted");
    // $(".overlayValidado").css("display", "flex")
  });
});
