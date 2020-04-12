/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de decorador para envolverlo en papel de regalo
 * la caracteristica de tapa dura y modificar el precio
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa con una clase decorar un libro envolviendolo en papel de regalo
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';

const BookDecorator = require('./book-decorator');

class GiftWrapDecorator extends BookDecorator {
  constructor(book) {
    super(book);
    this.book.isGiftWrapped = true;
    this.book.unwrap = function() {
      return `Unwrapped ${book.getDetails()}`;
    };
  }

  getDetails() {
    return `${this.book.getDetails()} and wrapped is ${this.book.isGiftWrapped}`;
  }
}

module.exports = GiftWrapDecorator;