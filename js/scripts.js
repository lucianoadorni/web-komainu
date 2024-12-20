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

  $(".iconBtn").click(function(){
    $(".overlayLoader").css("display","flex")
    setTimeout(() => {
        window.location.href = 'reservar.html';
    }, 2000);
});

  // NAV AUTO CLOSE
  $(".nav-item").click(function(){
    $("nav .collapse ").toggleClass("show");
  })
});
