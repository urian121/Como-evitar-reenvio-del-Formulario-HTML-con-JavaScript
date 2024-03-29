/* Capturo el Boton Enviar, por su id y lo Desabilito */
let btnEnvForm = document.querySelector('#btnEnvForm');

/* Escucho el evento clik en el boton enviar */
btnEnvForm.addEventListener('click', validarForm);

function validarForm() {
    console.log('Validando mi formulario');
    //Capturando todos los campos del formulario
    let nombre = document.querySelector('#nombre').value;
    let cedula = document.querySelector('#cedula').value;
    let sexo = document.querySelector('#sexo').value;
    console.log(nombre + ' - ' + cedula + ' - ' + sexo);

    //Validando que los campos no esten vacios
    if (cedula.length == '' || nombre.length <= 0 || sexo == '') {

        /*Capturando el id donde se muestra el mensaje */
        let respuesta = document.querySelector("#respuesta");
        respuesta.style.display = 'block';
        respuesta.innerHTML = `Todos los Campos son obligatorios! 💥`;

        /*Funcion para ocultar msj - Respuesta*/
        ocultarRespuesta();

        return false;
    }

    //Funcion para enviar mi formulario al Backend */
    enviarFormulario();
}



function enviarFormulario() {
    console.log('Enviando mi formulario.!');
    btnEnvForm.disabled = true; /*Desabilitando el boton Enviar*/
    btnEnvForm.innerHTML = "Enviando mi Form..."; /*Cambiando el valor del boton*/


    loader(true); /*Mi funcion Pre-loader*/
    setTimeout(function () {
        loader(false);

        btnEnvForm.disabled = false; /*Desabilitando el boton */
        btnEnvForm.innerHTML = "Enviar Formulario"; /*Cambiando el valor del boton*/
    }, 2000);

    return false;
}

/**funcion para ocultar el mensaje despues de cierto tiempo */
function ocultarRespuesta() {
    let respuesta = document.querySelector("#respuesta");
    btnEnvForm.disabled = true;

    /*Comprobando si existe el elemento de respuesta activo para ocultarlo*/
    if (respuesta !== null) {
        setTimeout(function () {
            respuesta.style.display = 'none';
            btnEnvForm.disabled = false;
        }, 1500);
    }
}


/* Mi funcion Pre-loader */
var cargando = false;
function loader(cargando) {
    let body = document.body;
    if (cargando) {
        body.style.opacity = "0.1";
        body.style.bottom = "0";
        body.style.position = "fixed";
        body.style.left = "0";
        body.style.right = "0";
        body.style.top = "0";
        body.style.zIndex = "99999999999999999999";
        body.style.overflow = "hidden"; // Deshabilitar desplazamiento
        body.style.pointerEvents = "none"; //Deshabilitar eventos
    } else {
        body.style.opacity = "10";
    }
    
}
