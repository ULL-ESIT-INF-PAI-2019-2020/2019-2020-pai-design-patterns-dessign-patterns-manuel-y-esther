/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de creat un libro y añadirle decoradores
 * la caracteristica de tapa dura y modificar el precio
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa con una clase para crear un libro y decorarlo
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';

const Book = require('./book');
const BookDecorator = require('./book-decorator')
const GiftWrapDecorator = require('./gift-wrap-decorator');
const HardBindDecorator = require('./hardbind-book-decorator');

function main() {
  let alchemist = new Book('The Alchemist', 'Paulo Coelho', 10);
  console.log(alchemist.getDetails());

  let inferno = new Book('Inferno', 'Dan Brown', 15);
  console.log(inferno.getDetails());

  console.log('----------------------------------');

  alchemist = new GiftWrapDecorator(alchemist);
  console.log(alchemist.getDetails());

  inferno = new HardBindDecorator(inferno);
  console.log(inferno.getDetails());
}

main();