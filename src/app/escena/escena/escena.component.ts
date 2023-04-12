import { Component, Input } from '@angular/core';
import { Frases } from '../../home/home/home.component';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {
  @Input() frases: Frases[] = []

  currentPosition: number = 0

  prev() {
    if (this.currentPosition > 0)
      this.currentPosition--
  }

  next() {
    if (this.currentPosition < this.frases.length - 1)
      this.currentPosition++
  }

}


/* prev() {
  for (let i = 0; i < this.frases.length; i++) {
    if (this.frases[i].fondo === true) {
      this.frases[i].fondo = false;
      if (this.frases[i].valor === 0) {
        this.frases[3].fondo = true;
      } else {
        this.frases[i - 1].fondo = true;
      }
      break;
    }
  }
}

next() {
  for (let i = 0; i < this.frases.length; i++) {
    if (this.frases[i].fondo === true) {
      this.frases[i].fondo = false;
      if (this.frases[i].valor === 3) {
        this.frases[0].fondo = true;
      } else {
        this.frases[i + 1].fondo = true;
      }
      break;
    }
  }
} */