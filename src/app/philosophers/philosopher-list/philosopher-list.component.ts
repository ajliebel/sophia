import { Component, OnInit } from '@angular/core';
import { Philosopher } from '../philosopher.model';

@Component({
  selector: 'app-philosopher-list',
  templateUrl: './philosopher-list.component.html',
  styleUrls: ['./philosopher-list.component.css']
})
export class PhilosopherListComponent implements OnInit {

  philosophers: Philosopher[] = [
    new Philosopher('Thales', '649 BC', 'Miletus Ionia', '599 BC', 'Miletus Ionia'),
    new Philosopher('Anaxamander', '630 BC', 'Miletus Ionia', '593 BC', 'Miletus Ionia'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
