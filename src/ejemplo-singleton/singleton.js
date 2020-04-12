/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de implementación del patrón
 *  singleton, con el ejemplo de una tienda.
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa tienda de usuarios.
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';

class UserStore {
  constructor(){
    // Comprobación de si ya existe o no una instancia.
   if(! UserStore.instance){
     this._data = [];
     UserStore.instance = this;
   }
   return UserStore.instance;
  }

  add(item) {
    this._data.push(item);
  }

  get(id) {
    return this._data.find(d => d.id === id);
  }
}

// Creación de la instancia única
const myUserStore = new UserStore();
// Congelamos el objeto para no poder añadirle nuevas propiedades
// ni métodos.
Object.freeze(myUserStore);

const main = () => {
  // Elementos que añadiermos a la tienda.
  const ARRAY_OF_ITEMS = [{name: 'apple', id: 1}, {name: 'pear', id: 2}, {name: 'sandwich', id: 3},
    {name: 'car', id: 4}];
  ARRAY_OF_ITEMS.forEach(item => {
    myUserStore.add(item);
  });
  // Mostramos el contenido de la tienda.
  console.log(myUserStore._data);

  console.log(myUserStore.get(1));

  const mySecondStore = new UserStore;
  console.log(mySecondStore._data);
}

main();