import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhilosopherService } from '../philosopher.service';
import { Philosopher } from '../philosopher.model';

@Component({
  selector: 'app-philosopher-reference',
  templateUrl: './philosopher-reference.component.html',
  styleUrls: ['./philosopher-reference.component.css']
})
export class PhilosopherReferenceComponent implements OnInit {
  philo: Philosopher;
  id:number;
  refForm: FormGroup; 

  constructor(private route: ActivatedRoute,
    private philosopherService: PhilosopherService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.philo = this.philosopherService.getPhilosopher(this.id);
      }
    )
  }

}
