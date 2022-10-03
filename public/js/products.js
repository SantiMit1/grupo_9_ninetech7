window.addEventListener("load", function() {
    let campoNombre = document.querySelector("#nombre");
    let campoDescripcion = document.querySelector("#description");
    let campoPrecio = document.querySelector("#precio");
    let campoOferta = document.querySelector("#check");
    let campoDescuento = document.querySelector("#descuentoInput");
    let campoCategoria = document.querySelector("#categoriaInput");
    let campoTipo = document.querySelector("#type");
    let campoMarca = document.querySelector("#brand");
    let campoImagen = document.querySelector("#fileProduct")

    function nombreValido() {
        let nombreFeedback = document.querySelector("#nombreFeedback")
        if(campoNombre.value.length < 5) {
            nombreFeedback.innerHTML = "El nombre del producto debe tener al menos 5 caracteres"
            nombreFeedback.classList.remove("is-valid")
            nombreFeedback.classList.add("is-invalid")
            return false;
        } else {
            nombreFeedback.innerHTML = "El nombre del producto debe tener al menos 5 caracteres"
            nombreFeedback.classList.remove("is-invalid")
            nombreFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoNombre.addEventListener("input", function() {
        nombreValido()
    })

    function descripcionValida() {
        let descripcionFeedback = document.querySelector("#descriptionFeedback")
        if(campoDescripcion.value.length < 20) {
            descripcionFeedback.innerHTML = "La descripción del producto debe tener al menos 20 caracteres"
            descripcionFeedback.classList.remove("is-valid")
            descripcionFeedback.classList.add("is-invalid")
            return false;
        } else {
            descripcionFeedback.innerHTML = "La descripción del producto debe tener al menos 20 caracteres"
            descripcionFeedback.classList.remove("is-invalid")
            descripcionFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoDescripcion.addEventListener("input", function() {
        descripcionValida()
    })

    function precioValido() {
        let precioFeedback = document.querySelector("#precioFeedback")
        if(campoPrecio.value.length < 1 || campoPrecio.value < 0) {
            precioFeedback.innerHTML = "Ingresar un precio valido"
            precioFeedback.classList.remove("is-valid")
            precioFeedback.classList.add("is-invalid")
            return false;
        } else {
            precioFeedback.innerHTML = "Ingresar un precio valido"
            precioFeedback.classList.remove("is-invalid")
            precioFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoPrecio.addEventListener("input", function() {
        precioValido()
    })

    function descuentoValido() {
        let descuentoFeedback = document.querySelector("#descuentoFeedback")
        if(!campoOferta.checked) {
            return true;
        } else if(campoOferta.checked && (campoDescuento.value.length < 1 || campoDescuento.value < 1)) {
            descuentoFeedback.innerHTML = "Ingresar un descuento valido"
            descuentoFeedback.classList.remove("is-valid")
            descuentoFeedback.classList.add("is-invalid")
            return false;
        } else {
            descuentoFeedback.innerHTML = "Ingresar un descuento valido"
            descuentoFeedback.classList.remove("is-invalid")
            descuentoFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoDescuento.addEventListener("input", function() {
        descuentoValido()
    })

    function categoriaValida() {
        let categoriaFeedback = document.querySelector("#categoriaFeedback")
        if(campoCategoria.value == "") {
            categoriaFeedback.innerHTML = "Seleccione una categoria"
            categoriaFeedback.classList.add("is-invalid")
            return false;
        } else {
            categoriaFeedback.innerHTML = ""
            categoriaFeedback.classList.remove("is-invalid")
            return true;
        }
    }

    campoCategoria.addEventListener("mouseout", function() {
        categoriaValida()
    })

    function tipoValido() {
        let typeFeedback = document.querySelector("#typeFeedback")
        if(campoTipo.value == "") {
            typeFeedback.innerHTML = "Seleccione un tipo de producto"
            typeFeedback.classList.add("is-invalid")
            return false;
        } else {
            typeFeedback.innerHTML = ""
            typeFeedback.classList.remove("is-invalid")
            return true;
        }
    }

    campoTipo.addEventListener("mouseout", function() {
        tipoValido()
    })

    function marcaValida() {
        let marcaFeedback = document.querySelector("#brandFeedback")
        if(campoMarca.value == "") {
            marcaFeedback.innerHTML = "Seleccione una marca"
            marcaFeedback.classList.add("is-invalid")
            return false;
        } else {
            marcaFeedback.innerHTML = ""
            marcaFeedback.classList.remove("is-invalid")
            return true;
        }
    }

    campoMarca.addEventListener("mouseout", function() {
        marcaValida()
    })

    function imagenValida() {
        let imagenFeedback = document.querySelector("#imagenFeedback")
        let extensionesValidas = ["jpg", "jpeg", "png", "gif"]
        if (!campoImagen.value) {
            imagenFeedback.innerHTML = ""
            imagenFeedback.classList.remove("is-invalid")
            return true;
        }

        let extension = campoImagen.value.split(".").pop()
        if (extensionesValidas.indexOf(extension) != -1) {
            imagenFeedback.innerHTML = ""
            imagenFeedback.classList.remove("is-invalid")
            return true;
        } else {
            imagenFeedback.innerHTML = "Archivo invalido, las extensiones permitidas son: " + extensionesValidas.join(", ")
            imagenFeedback.classList.add("is-invalid")
            return false;
        }
    }

    campoImagen.addEventListener("change", function() {
        imagenValida()
    })

    let formulario = document.querySelector("form#formulario")

    formulario.addEventListener("submit", function(e) {
        e.preventDefault()

        if(nombreValido() &&
        descripcionValida() &&
        precioValido() &&
        descuentoValido() &&
        categoriaValida() &&
        tipoValido() &&
        marcaValida() &&
        imagenValida()) {
            formulario.submit()
        }
    })
})