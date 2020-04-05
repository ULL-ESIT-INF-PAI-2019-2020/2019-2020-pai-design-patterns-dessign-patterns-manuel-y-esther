/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código de la sucesión de Fibonacci de manera recursiva
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa sucesión de Fibonacci recursivo
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';


module.exports = class FibonacciRecur {
  fibonacci (numberOfFibonacciToFind) {
    const self = this;
    if (numberOfFibonacciToFind > -1 && !isNaN(numberOfFibonacciToFind)) {
      if (numberOfFibonacciToFind <= 1) return 1;
      return self.fibonacci(numberOfFibonacciToFind - 1) + self.fibonacci(numberOfFibonacciToFind - 2);
    } else {
      return -1;
    }
  }
}