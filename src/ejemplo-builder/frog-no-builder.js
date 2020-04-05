/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de una rana sin uso de Builder
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa sucesión de Fibonacci
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */
'use strict';

class Frog {
  constructor(name, weight, height, gender) {
    this.name = name
    this.weight = weight // in lbs
    this.height = height // in inches
    this.gender = gender
  }
  eat(target) {
    console.log(`Eating target: ${target}`)
  }
}

const main = () => {
  const myFrog = new Frog('Carlos la rana', 9, 3, 'male');
  console.log(myFrog.name);
  myFrog.eat('fly');
}

main();