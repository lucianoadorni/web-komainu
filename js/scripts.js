new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    focus: "center",
    gap: "1em",
    autoWidth: true,
}).mount();


// OVERLAY Y SPINNER
const reservarMesaBtn = document.querySelector('.reservar-mesa');

reservarMesaBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    setTimeout(() => {
        window.location.href = 'reservar.html';
    }, 2000);
});

// VENTANA MODAL


// LO QUE SALE EN LA GUÍA DE BOOTSTRAP pero hay q modificar ig
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
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
