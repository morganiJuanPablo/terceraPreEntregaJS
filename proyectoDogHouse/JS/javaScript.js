
//////////// FORMULARIO INICIO ///////////////////////

const formularioInicio = document.getElementById('formInicio');

function CiudadesContacto(direccion, telefonoCentral) {
    this.direccion = direccion;
    this.telefonoCentral = telefonoCentral;
    this.saludar = function () {
        (console.log(`¡Somos vecinos!\nTe invitamos a cualquiera de nuestros centros para que nos conozcas:\n${this.direccion}\nO comunicarte a través de nuestro teléfono central: ${telefonoCentral}\n\n¡Copia el siguiente código y obtiene un 15% de descuento en tu reserva!\nSJKDKA02`));
    }
};

const MADRID = new CiudadesContacto(
    "Tirso de Molina 16. Centro. Madrid.\nCalle Postas 61. Aranjuez. Madrid.\nAlamos Plateados 2722. Alcalá de Henares. Madrid.", "617 926 462");
const MURCIA = new CiudadesContacto(
    "Calle Santa Catalina 37. Centro. Murcia.", "968 281 271");
const ALICANTE = new CiudadesContacto(
    "Rbla. de Méndez Núñez, 38. Alicante.\nCalle del Dr. Bergez, 78. Alicante.\n", "936 744 465");
const VALENCIA = new CiudadesContacto(
    "Carrer de Borriana, 52. València. Valencia.\nPl. Virgen Asunción, 15. Ayora. Valencia.", "963 348 896");


formularioInicio.addEventListener('submit', confirmarCiudad);
function confirmarCiudad(e) {
    let ciudad = document.getElementById('ciudadUsuario').value.toUpperCase();
    e.preventDefault()
    if (ciudad == "MADRID") {
        MADRID.saludar();
    }
    else if (ciudad == "MURCIA") {
        MURCIA.saludar();
    }
    else if (ciudad == "ALICANTE") {
        ALICANTE.saludar();
    }
    else if (ciudad == "VALENCIA") {
        VALENCIA.saludar();
    }
    else {
        console.log(`Lo sentimos, no estamos en la ciudad que nos indicaste, por ahora ;)\nTe invitamos a formar parte de nuestra comunidad, en la que compartimos información, novedades y todo sobre el cuidado de tu mascota!`)
    }
}

//////////// UNIRSE A LA COMUNIDAD ///////////////////////

function UsuariosComunidad(comunidadNombreUsuario, comunidadNombreMascota, comunidadCiudadUsuario, comunidadEdadMascota, comunidadMailUsuario, comunidadRazaMascota) {
    this.comunidadNombreUsuario = comunidadNombreUsuario;
    this.comunidadNombreMascota = comunidadNombreMascota;
    this.comunidadCiudadUsuario = comunidadCiudadUsuario;
    this.comunidadEdadMascota = comunidadEdadMascota;
    this.comunidadMailUsuario = comunidadMailUsuario;
    this.comunidadRazaMascota = comunidadRazaMascota;
    this.bienvenida = function () {
        console.log(`¡Enhorabuena!\nBienvenido ${comunidadNombreUsuario}. Tu y ${comunidadNombreMascota} ya forman parte de nuestra comunidad.`);
    }
};

const enviarComunidad = document.getElementById("enviarComunidad");
enviarComunidad.addEventListener(`click`, confirmarUsuario);
function confirmarUsuario(e) {
    let nombreUsuario = document.getElementById("comunidadNombreUsuario").value.toUpperCase();
    let nombreMascota = document.getElementById("comunidadNombreMascota").value.toUpperCase();
    let ciudadUsuario = document.getElementById("comunidadCiudadUsuario").value.toUpperCase();
    let edadMascota = document.getElementById("comunidadEdadMascota").value.toUpperCase();
    let mailUsuario = document.getElementById("comunidadMailUsuario").value.toUpperCase();
    let razaMascota = document.getElementById("comunidadRazaMascota").value.toUpperCase();

    const nuevoUsuario = new UsuariosComunidad(nombreUsuario, nombreMascota, ciudadUsuario, edadMascota, mailUsuario, razaMascota)
    e.preventDefault();
    nuevoUsuario.bienvenida();

    localStorage.setItem("Nombre y Apellido", nombreUsuario);
    localStorage.setItem("Ciudad", ciudadUsuario);
    localStorage.setItem("E-mail", mailUsuario);
    localStorage.setItem("Nombre mascota", nombreMascota);
    localStorage.setItem("Edad (años)", edadMascota);
    localStorage.setItem("Raza", razaMascota);
}


//////////// REALIZAR RESERVA ///////////////////////

const nuevaReserva = document.getElementById("enviarReserva");
nuevaReserva.addEventListener(`click`, reservar);
function reservar(e) {
    let cantidadHoras;
    cantidadHoras = Number(document.getElementById("horasGuarderia").value);
    let calcularPreciosHora = Number(cantidadHoras * 5);

    let peluqueriaCanina;
    peluqueriaCanina = document.getElementById("peluqueriaSiNo").value.toUpperCase();
    while (peluqueriaCanina) {
        if (peluqueriaCanina == "SI") {
            calcularPreciosHora += 30;
        }
        else if (peluqueriaCanina == "NO") {
            calcularPreciosHora += 0;
        } else { console.log(`No hemos entendido tu respuesta`) } break;
    }

    let controlVeterinario;
    controlVeterinario = document.getElementById("controlSiNo").value.toUpperCase();
    while (controlVeterinario) {
        if ((controlVeterinario == "SI")) {
            calcularPreciosHora += 45;
        }
        else if ((controlVeterinario == "NO")) {
            calcularPreciosHora += 0;
        } else { console.log(`No hemos entendido tu respuesta`) } break;
    }

    let cuponDescuento;
    cuponDescuento = document.getElementById("codigoDescuento").value.toUpperCase();
    while (cuponDescuento) {
        if (cuponDescuento == "SJKDKA02") {
            calcularPreciosHora /= 1.15;

        } else { console.log(`El código ingresado no es correcto`) } break;

    }

    e.preventDefault();
    console.log(`Gracias por confiar en nosotros! Has reservado ${cantidadHoras} horas\nPELUQUERIA CANINA: ${peluqueriaCanina}\nCONTROL VETERINARIO: ${controlVeterinario}\nEL total de tu reserva es de ${Math.round(calcularPreciosHora)}€\nCompleta el formulario y nos pondremos en contacto contigo`);
}

//////////// CONFIRMAR RESERVA ///////////////////////

function UsuariosReserva(reservaNombreUsuario, reservaMovilUsuario, reservaCiudadUsuario, reservaMailUsuario) {
    this.reservaNombreUsuario = reservaNombreUsuario;
    this.reservaMovilUsuario = reservaMovilUsuario;
    this.reservaCiudadUsuario = reservaCiudadUsuario;
    this.reservaMailUsuario = reservaMailUsuario;
    this.mensajeReserva = function () {
        console.log(`¡Enhorabuena!\nGracias por confiar en nosotros ${reservaNombreUsuario}.\nUn representante se pondrá en contacto contigo para que podamos coordinar la reserva que has realizado.\n¡Esperamos verlos pronto!`);
    }
};


const botonReserva = document.getElementById("btnConfirmarReserva");
botonReserva.addEventListener(`click`, confirmarReserva);
function confirmarReserva(e) {
    let reservaNombre = document.getElementById("reservaNombreUsuario").value.toUpperCase();
    let reservaMovil = Number(document.getElementById("reservaMovilUsuario").value);
    let reservaCiudad = document.getElementById("reservaCiudadUsuario").value.toUpperCase();
    let reservaMail = document.getElementById("reservaMailUsuario").value.toUpperCase();

    const newReserva = new UsuariosReserva(reservaNombre, reservaMovil, reservaCiudad, reservaMail);
    e.preventDefault();
    newReserva.mensajeReserva();    

    localStorage.setItem("Nombre del interesado", reservaNombre);
    localStorage.setItem("Móvil", reservaMovil);
    localStorage.setItem("Ciudad en la que vive", reservaCiudad);
    localStorage.setItem("E-mail", reservaMail);
}
 
const botonCancelar = document.getElementById("btnCancelarReserva");
botonCancelar.addEventListener(`click`, cancelarReserva);
function cancelarReserva(e) {
    console.log(`Se ha cancelado la reserva.`)
}

