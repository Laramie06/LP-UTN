document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    // Aquí puedes agregar el código para enviar el formulario
    // Por ejemplo, puedes hacer una solicitud AJAX a un servidor o utilizar el cliente de correo electrónico del usuario.
  
    // Después de enviar el formulario, puedes mostrar un mensaje de éxito o redirigir al usuario a otra página.
    alert('¡Nos contactaremos con usted pronto!');
  });
  