   const contactForm = document.getElementById('contactForm')
   contactForm.addEventListener('submit', sendEmail)

    const serviceId = 'service_7v86sw8'
    const templateId = 'template_ehvwdsj'
    const apikey = 'kXGKUdg5KqS-m7Aib'

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    function sendEmail(event) {
        event.preventDefault()
         emailjs.init(serviceId)

        emailjs.sendForm(serviceId,templateId, contactForm, apikey)
        .then( result => Swal.fire('Su mensaje se ha enviado con éxito.') + result)
        .catch( error => {
            Swal.fire({
                icon: "error",
                tittle: "Oops...",
                Text: "No ha sido posible enviar el mensaje!"
            }

            )
        })
    }
