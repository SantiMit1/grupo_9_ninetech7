window.addEventListener("load", function() {
    //nombre y apellido
    let campoNombre = document.querySelector("#nombre")
    let campoApellido = document.querySelector("#apellido")
    function nombreValido() {
        let nombreFeedback = document.querySelector("#nombreFeedback")

        if(campoNombre.value.length < 2) {
            nombreFeedback.innerHTML = "El nombre debe tener al menos 2 caracteres"
            nombreFeedback.classList.remove("is-valid")
            nombreFeedback.classList.add("is-invalid")
            return false;
        } else {
            nombreFeedback.innerHTML = "El nombre debe tener al menos 2 caracteres"
            nombreFeedback.classList.remove("is-invalid")
            nombreFeedback.classList.add("is-valid")
            return true;
        }
        
    }

    function apellidoValido() {
        let apellidoFeedback = document.querySelector("#apellidoFeedback")

        if(campoApellido.value.length < 2) {
            apellidoFeedback.innerHTML = "El apellido debe tener al menos 2 caracteres"
            apellidoFeedback.classList.remove("is-valid")
            apellidoFeedback.classList.add("is-invalid")
            return false;
        } else {
            apellidoFeedback.innerHTML = "El apellido debe tener al menos 2 caracteres"
            apellidoFeedback.classList.remove("is-invalid")
            apellidoFeedback.classList.add("is-valid")
            return true;
        }
        
    }

    campoNombre.addEventListener("input", function() {
        nombreValido()
    })
    campoApellido.addEventListener("input", function() {
        apellidoValido()
    })

    //email
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
    
    campoEmail.addEventListener("input", function() {
        emailValido()
    })

    //domicilio
    let campoLocalidad = document.querySelector("#localidad")

    function localidadValida() {
        let localidadFeedback = document.querySelector("#localidadFeedback")
        if(campoLocalidad.value.length < 1) {
            localidadFeedback.innerHTML = "Este campo no puede estar vacio"
            localidadFeedback.classList.remove("is-valid")
            localidadFeedback.classList.add("is-invalid")
            return false;
        } else {
            localidadFeedback.innerHTML = "Este campo no puede estar vacio"
            localidadFeedback.classList.remove("is-invalid")
            localidadFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoLocalidad.addEventListener("input", function() {
        localidadValida()
    })

    let campoNumero = document.querySelector("#numero")

    function numeroValido() {
        let numeroFeedback = document.querySelector("#numeroFeedback")
        if(campoNumero.value.length < 1) {
            numeroFeedback.innerHTML = "Este campo no puede estar vacio"
            numeroFeedback.classList.remove("is-valid")
            numeroFeedback.classList.add("is-invalid")
            return false;
        } else {
            numeroFeedback.innerHTML = "Este campo no puede estar vacio"
            numeroFeedback.classList.remove("is-invalid")
            numeroFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoNumero.addEventListener("input", function() {
        numeroValido()
    })

    let campoDireccion = document.querySelector("#direccion")

    function direccionValida() {
        let direccionFeedback = document.querySelector("#direccionFeedback")
        if(campoDireccion.value.length < 1) {
            direccionFeedback.innerHTML = "Este campo no puede estar vacio"
            direccionFeedback.classList.remove("is-valid")
            direccionFeedback.classList.add("is-invalid")
            return false;
        } else {
            direccionFeedback.innerHTML = "Este campo no puede estar vacio"
            direccionFeedback.classList.remove("is-invalid")
            direccionFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoDireccion.addEventListener("input", function() {
        direccionValida()
    })

    //contraseña
    let campoContraseña = document.querySelector("#password")
    let contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    function contraseñaValida() {
        let contraseñaFeedback = document.querySelector("#passwordFeedback")
        if(!contraseñaRegex.test(campoContraseña.value)) {
            contraseñaFeedback.innerHTML = "La contraseña debe contener ocho caracteres, una letra mayuscula, un numero y un caracter especial"
            contraseñaFeedback.classList.remove("is-valid")
            contraseñaFeedback.classList.add("is-invalid")
            return false;
        } else {
            contraseñaFeedback.innerHTML = "La contraseña debe contener ocho caracteres, una letra mayuscula, un numero y un caracter especial"
            contraseñaFeedback.classList.remove("is-invalid")
            contraseñaFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoContraseña.addEventListener("input", function() {
        contraseñaValida()
    })

    let campoRecontraseña = document.querySelector("#repassword")

    function recontraseñaValida() {
        let recontraseñaFeedback = document.querySelector("#repasswordFeedback")
        if(campoRecontraseña.value != campoContraseña.value) {
            recontraseñaFeedback.innerHTML = "Las contraseñas no coinciden"
            recontraseñaFeedback.classList.add("is-invalid")
            return false;
        } else {
            recontraseñaFeedback.innerHTML = ""
            recontraseñaFeedback.classList.remove("is-invalid")
            return true;
        }
    }
    
    campoRecontraseña.addEventListener("input", function() {
        recontraseñaValida()
    })


    //envio de formulario
    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", function(e) {
        e.preventDefault()
        if(nombreValido() &&
        apellidoValido() &&
        emailValido() &&
        localidadValida() &&
        direccionValida() &&
        numeroValido() &&
        contraseñaValida() &&
        recontraseñaValida()) {
            formulario.submit()
        }
    })
})
