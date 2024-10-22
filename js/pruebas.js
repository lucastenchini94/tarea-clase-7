
function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}
function probarValidarCiudad(){
console.assert(
    validarCiudad("") === "porfavor tiene que seleccionar una opcion para continuar",
    "validacion de ciudad no valido que el usuario no selecciono una ciudad",
);
}
function probarValidarDescripcionRegalo(){
console.assert(
    validarDescripcionRegalo("1111111111") === "este campo tiene que tener al menos 10 caracteres o mas",
    "validacion de descripicion de regalo no valido que la descripcion tenga mas de 10 caracteres",
);
}
probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();