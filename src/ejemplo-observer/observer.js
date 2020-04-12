/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de implementación del patrón
 *  observer. Básicamente tenemos un observador al que se suscriben distintos
 *  sujetos y cada vez que se aumenta un valor que contiene se le notifica
 *  a todos los sujetos este incremento.
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa de incremento de valor.
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

class Observable {
  constructor() {
      this.observers = [];
  }

  // Suscribe una clase notificadora
  subscribe(c) {
      this.observers.push(c);
  }

  // Desuscribe la clase notificadora
  unsubscribe(c) {
      this.observers = this.observers.filter(observer => observer instanceof c !== true);
  }

  // Llama a todos nuestros suscriptores
  notify(model) {
      this.observers.forEach(observer => {
          observer.notify(model);
      });
  }
}

class NumberExample extends Observable {
  constructor() {
      super();
      this.value = 0;
  }

  increment() {
      this.value++;

      // Llama a los suscriptores
      this.notify(this);
      console.log();
  }
}

class NumberExampleSpanishConsole {
  notify(model) {
      console.log(`El nuevo número es ${model.value}`);
  }
}

class NumberExampleEnglishConsole {
  notify(model) {
      console.log(`The new number is ${model.value}`);
  }
}

class NumberExampleFrenchConsole {
  notify(model) {
    console.log(`Le nouveau numéro est ${model.value}`);
  }
}

class NumberExampleGermanConsole {
  notify(model) {
    console.log(`Die neue Nummer ist ${model.value}`);
  }
}

const main = () => {
  // Instanciamos al sujeto
  let numberExample = new NumberExample();

  // Le suscribimos sus suscriptores o listeners
  numberExample.subscribe(new NumberExampleEnglishConsole());
  numberExample.subscribe(new NumberExampleSpanishConsole());
  numberExample.subscribe(new NumberExampleFrenchConsole());
  numberExample.subscribe(new NumberExampleGermanConsole());

  numberExample.increment();
  // El nuevo número es 1
  // The new number is 1
  // Le nouveau numéro est 1
  // Die neue Nummer ist 1

  numberExample.increment();
  // El nuevo número es 2
  // The new number is 2
  // Le nouveau numéro est 2
  // Die neue Nummer ist 2

  numberExample.increment();
  // El nuevo número es 3
  // The new number is 3
  // Le nouveau numéro est 3
  // Die neue Nummer ist 3
}

main();