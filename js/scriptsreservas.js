$(document).ready(function(){
  $(function () {
    $(".formularioValidado").on("click", function (e) {
        var form = $("#reservasValidation")[0];
        var isValid = form.checkValidity();
        if (!isValid) {
            e.preventDefault();
            e.stopPropagation();
        }
        form.classList.add('was-validated');
    });
  });

  // AFTER SUBMIT DE RESERVA FORM
  $('.formularioReservas').submit(function(event){
    event.preventDefault();
    $(".overlayValidado").css("display", "flex")
  });
});
