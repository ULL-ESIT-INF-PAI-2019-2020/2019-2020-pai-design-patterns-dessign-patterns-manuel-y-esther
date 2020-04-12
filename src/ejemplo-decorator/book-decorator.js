/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de clase base de decoradores de libros
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa con una clase base de decoradores de libros
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';

const Book = require('./book');

class BookDecorator extends Book {
  constructor(book) {
    super(book.title, book.author, book.price);
    this.book = book;
  }
}

module.exports = BookDecorator;