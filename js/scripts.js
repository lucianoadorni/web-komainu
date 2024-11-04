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