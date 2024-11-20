const form = document.querySelector("#carta-a-santa");

const nombre = form.nombre.value;
const ciudad = form.ciudad.value;
const comportamiento = form.comportamiento.value;
const descripcionRegalo = form["descripcion-regalo"].value;



function validarNombre(nombre) {
    if(nombre.length === 0){
    return "Este campo debe tener al menos 1 caracter";
    }
    if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }
    if (!/^[a-z]+$/i.test(nombre)) {
        return "el campo nombre solo acepta letras"
    }
    
    return "";
}

function validarCiudad(ciudad) {
    if (ciudad === "") {
        return "porfavor tiene que seleccionar una opcion para continuar";
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length<=10) {
        return "este campo tiene que tener al menos 10 caracteres o mas";
    }


}
console.log(validarNombre(nombre))
