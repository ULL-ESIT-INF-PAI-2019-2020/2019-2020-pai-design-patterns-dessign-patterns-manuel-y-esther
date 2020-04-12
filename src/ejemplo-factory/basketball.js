/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de crear una pelota de baloncesto
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa que crea una pelota de baloncesto
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

const BASKETBALL = 'basketball';

class Basketball {
  constructor() {
    this._type = BASKETBALL;
    this.bounce = function() {
      return 'You bounced the basketball.';
    };
  }
}

module.exports = Basketball;