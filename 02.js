/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca:
  var string = [" "];
  for (i=0;i<strings.length;i++) {
    var palabra1 = strings[i];
    var palabra2 = string[0];
    if (palabra1.length>palabra2.length) {
      string.pop ();
      string.push (strings[i]);
    }
  }
  var stringLargo = string[0];
  return stringLargo;
}

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga