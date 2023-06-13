document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("newsletter-popup");
    var closeButton = document.getElementById("close-popup");
    var openButton = document.getElementById("open-popup");

    function showPopup() {
        popup.style.display = "flex";
    }

    function hidePopup() {
        popup.style.display = "none";
    }

    function submitForm(event) {
        event.preventDefault();
        var email = document.querySelector("#newsletter-form input[type='email']").value;
        // Aquí puedes hacer algo con el correo electrónico, como enviarlo a tu servidor para su procesamiento
        hidePopup();
    }

    openButton.addEventListener("click", showPopup);
    closeButton.addEventListener("click", hidePopup);
    document.getElementById("newsletter-form").addEventListener("submit", submitForm);
});
