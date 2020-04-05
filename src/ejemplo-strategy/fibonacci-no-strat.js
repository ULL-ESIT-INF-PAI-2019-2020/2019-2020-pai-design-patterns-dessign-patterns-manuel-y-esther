/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código que resuelve la sucesión de fibonacci
 *  sin uso de Strategy
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa sucesión de Fibonacci
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';

/**
 * @description - Función que encuentra el número de fibonacci solicitado
 * de manera recursiva
 * @param {int} - El i-ésimo número de fibonacci que hay que retornar
 * @return - El número de fibonacci una vez encontrado. Retorna -1 si el valor
 * es no válido.
 */
const fibonacciRecur = (numberOfFibonacciToFind) => {
  if (numberOfFibonacciToFind > -1 && !isNaN(numberOfFibonacciToFind)) {
    if (numberOfFibonacciToFind <= 1) return 1;
    return fibonacciRecur(numberOfFibonacciToFind - 1) + fibonacciRecur(numberOfFibonacciToFind - 2);
  } else {
    return -1;
  }
}

/**
 * @description - Función que encuentra el número de fibonacci solicitado
 * de manera iterativa
 * @param {int} - El i-ésimo número de fibonacci que hay que retornar
 * @return - El número de fibonacci una vez encontrado. Retorna -1 si el valor
 * es no válido.
 */
const fibonacciIter = (numberOfFibonacciToFind) => {
  console.log('¡Estoy en el caso iterativo!');
  if (numberOfFibonacciToFind > -1 && !isNaN(numberOfFibonacciToFind)) {
    let currentFibonacciNumber = 1;
    let prevFibonacciNumber = 0;
    let auxiliarSwapFibonacci = 0;
    while (numberOfFibonacciToFind > 0) { 
      auxiliarSwapFibonacci = currentFibonacciNumber;
      currentFibonacciNumber = currentFibonacciNumber + prevFibonacciNumber;
      prevFibonacciNumber = auxiliarSwapFibonacci;
      numberOfFibonacciToFind--;
    }
    return currentFibonacciNumber;
  } else {
    return -1;
  }
}
/**
 * @description Función principal del programa. Resuelve la sucesión de Fibonacci
 * de una manera u otra dependiendo del primer parámetro para el segundo introducido.
 */
const main = () => {
  const chosenMethod = parseInt(process.argv[2]);
  const chosenValue = parseInt(process.argv[3]);
  let result = 0;
  switch(chosenMethod) {
    case 0:
      result = fibonacciIter(chosenValue);
      break;
    case 1:
      result = fibonacciRecur(chosenValue);
      break;
    default:
      result = fibonacciIter(chosenValue);
  }
  console.log(result);
}

main();