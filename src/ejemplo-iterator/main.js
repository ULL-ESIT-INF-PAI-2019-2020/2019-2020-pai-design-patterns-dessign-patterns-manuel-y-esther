/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo aplicando la clase iterator
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa con la implementacion de la clase iterator
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

const Iterator = require('./iterator');
const HashIterator = require('./hashIterator');

function main() {
  const numbers = [1,2,3,4,5];
  const numbersIterator = new Iterator(numbers);
  
  console.log('---Array of numbers---');
  console.log(numbersIterator.first());
  while (numbersIterator.hasNext()) {
    console.log(numbersIterator.next());
  }

  console.log('\n---Hash---');
  const hash = { 'foo': 'foo', 'bar': 'bar', '1': 'hello', '2': 'world' };
  const hashIterator = new HashIterator(hash);

  console.log(hashIterator.first());
  console.log(hashIterator.next());
  while (hashIterator.hasNext()) {
    console.log(hashIterator.next());
  }

  console.log('\n---String---');
  const string = 'This is a string';
  const stringIterator = new Iterator(string);

  console.log(stringIterator.first());
  while (stringIterator.hasNext()) {
    console.log(stringIterator.next());
  }
}

main();