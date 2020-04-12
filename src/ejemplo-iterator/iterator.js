/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de clase iterator
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa con la clase iterator
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';

class Iterator {
  constructor(collection) {
    this.index = 0;
    this.collection = collection;
  }

  first() {
    return this.collection[0];
  }

  next() {
    this.index ++;
    return this.collection[this.index];
  }

  current() {
    return this.collection[this.index];
  }

  reset() {
    this.index = 0;
  }

  hasNext() {
    return (this.collection.length > this.index + 1);
  }
}

module.exports = Iterator;