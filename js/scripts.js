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

// Overlay de reservas
$(".reservar-mesa").click(function(){
  $(".overlayLoader").css("display","flex")
  setTimeout(() => {
      window.location.href = 'reservar.html';
  }, 2000);
});

// CHECK DE VALIDAD FORM
(() => {
    'use strict'
    const forms = document.querySelectorAll('#reservasValidation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
