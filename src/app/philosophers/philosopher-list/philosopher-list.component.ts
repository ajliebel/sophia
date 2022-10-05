import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Philosopher } from '../philosopher.model';
import { PhilosopherService } from '../philosopher.service';

@Component({
  selector: 'app-philosopher-list',
  templateUrl: './philosopher-list.component.html',
  styleUrls: ['./philosopher-list.component.css']
})
export class PhilosopherListComponent implements OnInit {
   
   philosophers: Philosopher[];

  constructor(private philosopherService: PhilosopherService,
    private  router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.philosophers = this.philosopherService.getPhilosophers();
  }

  onNewPhilosopher() {
      this.router.navigate(['new'], {relativeTo: this.route});
  }
}
