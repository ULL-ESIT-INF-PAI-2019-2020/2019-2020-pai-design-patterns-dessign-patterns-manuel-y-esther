/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de decorador para añadirle a un libro
 * la caracteristica de tapa dura y modificar el precio
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa con una clase decorar tapa dura libro
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';

const BookDecorator = require('./book-decorator');

class HardBindDecorator extends BookDecorator {
  constructor(book) {
    super(book);
    this.book.isHardbound = true;
    this.book.price += 5;
  }

  getDetails() {
    return `${this.book.getDetails()} and it has hard bind`;
  }
}

module.exports = HardBindDecorator;