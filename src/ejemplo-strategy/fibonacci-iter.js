/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código de la sucesión de Fibonacci de manera iterativa
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa sucesión de Fibonacci iterativo
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */
'use strict';


module.exports = class FibonacciIter {
  fibonacci(numberOfFibonacciToFind) {
    console.log('¡Estoy en el caso iterativo!');
    if (numberOfFibonacciToFind > -1 && !isNaN(numberOfFibonacciToFind)) {
      let currentFibonacciNumber = 1;
      let prevFibonacciNumber = 0;
      let auxiliarSwapFibonacci = 0;
      while (numberOfFibonacciToFind > 0){
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
}