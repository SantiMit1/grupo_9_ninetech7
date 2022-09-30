window.addEventListener("load", function() {
    const campoLocalidad = document.querySelector("#localidad")
    const campoDireccion = document.querySelector("#direccion")
    const campoNumero = document.querySelector("#numero")
    const formulario = document.querySelector("form")

    function localidadValida() {
        let localidadFeedback = document.querySelector("#localidadFeedback")
        if(campoLocalidad.value.length < 1) {
            localidadFeedback.innerHTML = "Este campo no puede estar vacio"
            return false;
        } else {
            localidadFeedback.innerHTML = ""
            return true;
        }
    }

    campoLocalidad.addEventListener("input", function() {
        localidadValida()
    })

    function direccionValida() {
        let direccionFeedback = document.querySelector("#direccionFeedback")
        if(campoDireccion.value.length < 1) {
            direccionFeedback.innerHTML = "Este campo no puede estar vacio"
            return false;
        } else {
            direccionFeedback.innerHTML = ""
            return true;
        }
    }

    campoDireccion.addEventListener("input", function() {
        direccionValida()
    })

    function numeroValido() {
        let numeroFeedback = document.querySelector("#numeroFeedback")
        if(campoNumero.value.length < 1) {
            numeroFeedback.innerHTML = "Este campo no puede estar vacio"
            return false;
        } else {
            numeroFeedback.innerHTML = ""
            return true;
        }
    }

    campoNumero.addEventListener("input", function() {
        numeroValido()
    })

    formulario.addEventListener("submit", function(e) {
        e.preventDefault()
        if(direccionValida() && localidadValida() && numeroValido()) {
            formulario.submit()
        }
    })
})