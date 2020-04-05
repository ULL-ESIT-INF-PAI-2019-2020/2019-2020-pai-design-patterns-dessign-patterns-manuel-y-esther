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

class Document {
  constructor(title) {
    this.title = title;
    this.signature = null;
  }
  sign(signature) {
    this.signature = signature;
  }
}

class DocumentComposite {
  constructor(title) {
    this.items = [];
    if (title) {
      this.items.push(new Document(title));
    }
  }

  add(item) {
    this.items.push(item);
  }

  sign(signature) {
    this.items.forEach((doc) => {
      doc.sign(signature);
    });
  }
}

// Ejemplo 1

// const pr2Form = new Document(
//   'Primary Treating Physicians Progress Report (PR2)',
// );
// const w2Form = new Document('Internal Revenue Service Tax Form (W2)');

// const forms = [];
// forms.push(pr2Form);
// forms.push(w2Form);

// forms.forEach((form) => {
//   form.sign('Bobby Lopez');
// });

// console.log(forms)

// Ejemplo 2

// const forms = new DocumentComposite();
// const pr2Form = new Document(
//   'Primary Treating Physicians Progress Report (PR2)',
// );
// const w2Form = new Document('Internal Revenue Service Tax Form (W2)');
// forms.add(pr2Form);
// forms.add(w2Form);

// forms.sign('Bobby Lopez');

// console.log(forms);

// Ejemplo 3

const forms = new DocumentComposite();
const pr2Form = new Document(
  'Primary Treating Physicians Progress Report (PR2)',
);
const w2Form = new DocumentComposite('Internal Revenue Service Tax Form (W2)');
const hello = new Document('hello world');
const pai = new Document('this is an example for PAI subject.')
forms.add(pr2Form);
forms.add(w2Form);
w2Form.add(hello);
w2Form.add(pai);

forms.sign('Bobby Lopez');

console.log(forms);
console.log(w2Form);