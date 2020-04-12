/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de clase iterator para hash
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa con la clase hash
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';

const Iterator = require('./iterator');

class HashIterator extends Iterator{
  constructor(collection) {
    super(collection);
    this.keys = Object.keys(collection);
    this.lenght = this.keys.length;
  } 

  first() {
    return this.collection[this.keys[0]]
  }
  
  hasNext() {
    return this.index + 1 < this.lenght;
  }

  current() {
    return this.collection[this.keys[this.index]];
  }

  next() {
    this.index++;
    return this.collection[this.keys[this.index]];;
  }
}

module.exports = HashIterator;

