//7)Escribe una función que tome una calificación numérica (de 0 a 100) 
//y devuelva una calificación en letras según el rango.
function obtenerCalificacionLetra(calificacion) {
  let calificacionLetra;
  
  if (calificacion >= 90 && calificacion <= 100) {
    calificacionLetra = "A";
  } else if (calificacion >= 80 && calificacion < 90) {
    calificacionLetra = "B";
  } else if (calificacion >= 70 && calificacion < 80) {
    calificacionLetra = "C";
  } else if (calificacion >= 60 && calificacion < 70) {
    calificacionLetra = "D";
  } else if (calificacion >= 0 && calificacion < 60) {
    calificacionLetra = "F";
  } else {
    calificacionLetra = "Calificación inválida";
  }
  
  return calificacionLetra;
}

console.log(obtenerCalificacionLetra(95)); // Resultado: "A"
console.log(obtenerCalificacionLetra(78)); // Resultado: "C"
console.log(obtenerCalificacionLetra(105)); // Resultado: "Calificación inválida"