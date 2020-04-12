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

class FrogBuilder {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
  
  setWeight(weight) {
    this.weight = weight
    return this
  }
  setHeight(height) {
    this.height = height
    return this
  }
  build() {
    if (!('weight' in this)) {
      throw new Error('Weight is missing')
    }
    if (!('height' in this)) {
      throw new Error('Height is missing')
    }
    return new Frog(this.name, this.weight, this.height, this.gender)
  }
}

const main = () => {
  const leo = new FrogBuilder('Leo', 'male')
  .setWeight(14)
  .setHeight(3.7)
  .build();
  console.log(leo.name);
  leo.eat('fly');
}
  
main();