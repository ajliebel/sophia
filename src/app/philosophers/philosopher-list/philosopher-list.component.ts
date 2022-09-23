import { Component, OnInit } from '@angular/core';
import { Philosopher } from '../philosopher.model';

@Component({
  selector: 'app-philosopher-list',
  templateUrl: './philosopher-list.component.html',
  styleUrls: ['./philosopher-list.component.css']
})
export class PhilosopherListComponent implements OnInit {

  philosophers: Philosopher[] = [
    new Philosopher('Thales', '649 BC', 'Miletus Ionia', '599 BC', 'Miletus Ionia','https://upload.wikimedia.org/wikipedia/commons/c/c6/Illustrerad_Verldshistoria_band_I_Ill_107.jpg'),
    new Philosopher('Anaxamander', '630 BC', 'Miletus Ionia', '593 BC', 'Miletus Ionia',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Anaximander_Mosaic_%28cropped%2C_with_sundial%29.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
