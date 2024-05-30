//5)Escribe una función que tome un número del 1 al 7 como argumento 
//y devuelva el día de la semana correspondiente.
function obtenerDiaSemana(numero) {
  let diaSemana;
  switch (numero) {
    case 1:
      diaSemana = "Lunes";
      break;
    case 2:
      diaSemana = "Martes";
      break;
    case 3:
      diaSemana = "Miércoles";
      break;
    case 4:
      diaSemana = "Jueves";
      break;
    case 5:
      diaSemana = "Viernes";
      break;
    case 6:
      diaSemana = "Sábado";
      break;
    case 7:
      diaSemana = "Domingo";
      break;
    default:
      diaSemana = "Día inválido";
  }
  return diaSemana;
}

console.log(obtenerDiaSemana(1)); // Resultado: "Lunes"
console.log(obtenerDiaSemana(4)); // Resultado: "Jueves"
console.log(obtenerDiaSemana(8)); // Resultado: "Día inválido"

