/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código del uso del patrón strategy para distintas
 *  implementaciones de la sucesión de fibonacci.
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa sucesión de Fibonacci
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';

const fibonacciIter = require('./fibonacci-iter.js');
const fibonacciRecur = require('./fibonacci-recur.js');
const strategyManager = require('./strategy-manager.js');

/**
 * @description Función principal del programa. Resuelve la sucesión de Fibonacci
 * de una manera u otra dependiendo del primer parámetro para el segundo introducido.
 */
const main = () => {
  const chosenMethod = parseInt(process.argv[2]);
  const chosenValue = parseInt(process.argv[3]);
  let fibonacciManager = new strategyManager;
  switch(chosenMethod) {
    case 0:
      fibonacciManager.strategy = new fibonacciIter;
      break;
    case 1:
      fibonacciManager.strategy = new fibonacciRecur;
      break;
    default:
      fibonacciManager.strategy = new fibonacciIter;
  }
  console.log(fibonacciManager.fibonacci(chosenValue));
}

main();