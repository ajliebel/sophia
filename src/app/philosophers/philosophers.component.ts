import { Component, OnInit } from '@angular/core';
import { Philosopher } from './philosopher.model';
import { PhilosopherService } from './philosopher.service';

@Component({
  selector: 'app-philosophers',
  templateUrl: './philosophers.component.html',
  styleUrls: ['./philosophers.component.css'],
  providers: [PhilosopherService]
})
export class PhilosophersComponent implements OnInit {
  selectedPhilo: Philosopher
  constructor(private philosopherService: PhilosopherService) { }

  ngOnInit(): void {
    
  }



}
