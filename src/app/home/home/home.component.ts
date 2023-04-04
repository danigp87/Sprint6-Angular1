import { Component, Output } from '@angular/core';
export { Frases }

interface Frases {
  valor: number;
  frase: string;
  fondo?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  frase: Frases[] = [
    { valor: 0, frase: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial.", fondo: true },
    { valor: 1, frase: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", fondo: false },
    { valor: 2, frase: "L'heroi va decidir travessar la porta que el portava a casa.", fondo: false },
    { valor: 3, frase: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció...", fondo: false }
  ];

  @Output() frases: Frases[] = []

  mostrarFrases = true
  mostrar() {
    this.mostrarFrases = false
  }

}

