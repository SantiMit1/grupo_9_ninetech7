window.addEventListener("load", function() {
    let campoEmail = document.querySelector("#email")
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    function emailValido() {
        let emailFeedback = document.querySelector("#emailFeedback")
        if(!emailRegex.test(campoEmail.value)) {
            emailFeedback.innerHTML = "Inserte un email valido"
            emailFeedback.classList.add("is-invalid")
            emailFeedback.classList.remove("is-valid")
            return false;
        } else {
            emailFeedback.innerHTML = "Inserte un email valido"
            emailFeedback.classList.remove("is-invalid")
            emailFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoEmail.addEventListener("input", emailValido)


    let campoContraseña = document.querySelector("#password")

    function contraseñaValida() {
        let contraseñaFeedback = document.querySelector("#passwordFeedback")
        if(campoContraseña.value.length < 8) {
            contraseñaFeedback.innerHTML = "La contraseña debe contener al menos 8 caracteres"
            contraseñaFeedback.classList.remove("is-valid")
            contraseñaFeedback.classList.add("is-invalid")
            return false;
        } else {
            contraseñaFeedback.innerHTML = "La contraseña debe contener al menos 8 caracteres"
            contraseñaFeedback.classList.remove("is-invalid")
            contraseñaFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoContraseña.addEventListener("input", contraseñaValida);

    let formulario = document.querySelector("form")

    formulario.addEventListener("submit", function(e) {
        e.preventDefault()

        if(emailValido()  && contraseñaValida()) {
            formulario.submit()
        }
    })
})