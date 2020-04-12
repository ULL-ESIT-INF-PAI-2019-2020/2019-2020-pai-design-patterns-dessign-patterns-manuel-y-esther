/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de fabricar distindos balones de fútbol
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa con una fábrica de balones de fútbol
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

'use strict';

const Football = require('./football');
const Basketball = require('./basketball');

const FOOTBALL = 'football';
const SOCCER = 'soccer';
const BASKETBALL = 'basketball';

class BallFactory {
  constructor() {
    this.createBall = function(type) {
      let ball;
      if (type === FOOTBALL || type === SOCCER) {
        ball = new Football();
      } else if (type === BASKETBALL) {
        ball = new Basketball();
      } 
      ball.roll = function() {
        return `The ${this._type} is rolling.`;
      };
      return ball;
    };
  }
}

module.exports = BallFactory;