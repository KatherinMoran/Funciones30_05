//6)Escribe una función que tome un número del 1 al 12 como argumento 
//y devuelva el nombre del mes correspondiente.
function obtenerNombreMes(numero) {
  let nombreMes;
  switch (numero) {
    case 1:
      nombreMes = "Enero";
      break;
    case 2:
      nombreMes = "Febrero";
      break;
    case 3:
      nombreMes = "Marzo";
      break;
    case 4:
      nombreMes = "Abril";
      break;
    case 5:
      nombreMes = "Mayo";
      break;
    case 6:
      nombreMes = "Junio";
      break;
    case 7:
      nombreMes = "Julio";
      break;
    case 8:
      nombreMes = "Agosto";
      break;
    case 9:
      nombreMes = "Septiembre";
      break;
    case 10:
      nombreMes = "Octubre";
      break;
    case 11:
      nombreMes = "Noviembre";
      break;
    case 12:
      nombreMes = "Diciembre";
      break;
    default:
      nombreMes = "Mes inválido";
  }
  return nombreMes;
}

console.log(obtenerNombreMes(1)); // Resultado: "Enero"
console.log(obtenerNombreMes(6)); // Resultado: "Junio"
console.log(obtenerNombreMes(13)); // Resultado: "Mes inválido"