/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de crear distintas pelotas de deportes 
 * mediante una fabrica
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa que utiliza una fábrica para crear diferentes pelotas de deportes
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

const BallFactory = require('./ball-factory');

function main() {
  // creating objects
  const factory = new BallFactory();

  const myFootball = factory.createBall('football');
  const myBasketball = factory.createBall('basketball');

  console.log(myFootball.roll()); // The football is rolling.
  console.log(myBasketball.roll()); // The basketball is rolling.
  console.log(myFootball.kick()); // You kicked the football.
  console.log(myBasketball.bounce()); // You bounced the basketball.
}

main();