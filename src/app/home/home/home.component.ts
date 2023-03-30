import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  frase: string[] = [
    "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial.",
    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    "L'heroi va decidir travessar la porta que el portava a casa.",
    "Mentrestant, altres herois no van tenir tanta sort en la seva elecció..."
  ]
}
