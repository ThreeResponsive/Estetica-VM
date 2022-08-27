// ================== FUNCIONES ============================ //

// Envio email a trves de emailjs

function envio(nombre, email, mensaje, asunto){
  
  emailjs.send("Mirtha", "template_emailjs", {
    from_name: nombre,
    from_email: email,
    message: mensaje,
    subject: asunto,
  })
  .then(function(response) {
    if(response.text === 'OK'){
        console.log('El correo se ha enviado de forma exitosa');
    }
   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
  }, function(err) {
    console.log('Ocurrió un problema al enviar el correo');
   console.log("FAILED. error=", err);
  });

  return
}




// =============================== SCRIPT ============================= //


// declaro los campos

const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const mensaje = document.getElementById("mensaje")
const enviar = document.getElementById("enviar")
const borrar = document.getElementById("borrar")


// ============= Envio email ================================= //
enviar.addEventListener('click', (e) => {
  e.preventDefault()
    
  if(nombre.value != '' & ( email.value != '' || telefono.value != '' ) & mensaje.value != ''){

    let texto = mensaje.value

    (telefono.value != '') && (texto = texto + '\n\nTelefono de contacto: ' + telefono.value)
  
    envio(nombre.value, email.value, texto, 'CONTACO sitio web')

  } else {

    // aqui va que pasa cuando faltan datos
    
  }


})

