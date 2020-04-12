/**
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación patrones de diseño
 *  @author Manuel Andrés Carrera Galafate y Esther Jorge Paramio
 *  @since 05/04/2020
 *  @desc Implementación del código ejemplo de implementación del patrón
 *  adapter, con el ejemplo de unas guitarras de un concierto que se
 *  deben apagar con una interfaz común.
 *  References:
 *  Repositorio git con este (y otros) códigos:
 *              https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-design-patterns-dessign-patterns-manuel-y-esther
 *
 *  @file Programa tienda de usuarios.
 *
 *  @version  05/04/2020 - Creación (primera versión) del código.
 */

// Clase vieja.
class Guitar {
  playGuitar() {
    console.log('Playing the guitar!!');
  }
  stopPlaying() {
    console.log('Not playing the guitar.');
  }
}

// Clase nueva.
class ElectricGuitar {
  turnOnGuitar() {
    console.log('Playing the electric guitar!!');
  }
  turnOffGuitar() {
    console.log('Not playing the electro guitar :(');
  }
}

// Adaptador.
class ElectroAcousticGuitar {
  constructor () {
    this.myGuitar = new Guitar;
  }

  turnOnGuitar() {
    this.myGuitar.playGuitar();
  }

  turnOffGuitar() {
    this.myGuitar.stopPlaying();
  }
}

const main = () => {
  // Sin adaptador.

  const myAcousticGuitar = new Guitar;
  const myElectricGuitar = new ElectricGuitar;
  // Empieza concierto
  console.log('Concert 1 Starts!');
  myAcousticGuitar.playGuitar();
  myElectricGuitar.turnOnGuitar();
  // Acaba el concierto
  myAcousticGuitar.stopPlaying();
  myElectricGuitar.turnOffGuitar();
  console.log('Concert 2 ends.\n\n');

  // Con adaptador
  const myBandInstruments = [new ElectroAcousticGuitar, new ElectricGuitar];
  // Empieza concierto
  console.log('Concert 2 Starts!');
  myBandInstruments.forEach(instrument => {
    instrument.turnOnGuitar();
  });
  myBandInstruments.forEach(instrument => {
    instrument.turnOffGuitar();
  });
  console.log('Concert 2 ends.');
}

main();