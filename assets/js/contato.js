/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')  

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_kthommq', 'template_mwc5j8t', '#contact-form', 'Y1kFAgyohoF9Ku7ua')
    .then(() => {
        contactMessage.textContent = 'Mensagem enviada com sucesso ✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Mensagem não enviada, erro no serviço ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)