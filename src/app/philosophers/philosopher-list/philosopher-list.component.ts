import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Philosopher } from '../philosopher.model';
import { PhilosopherService } from '../philosopher.service';

@Component({
  selector: 'app-philosopher-list',
  templateUrl: './philosopher-list.component.html',
  styleUrls: ['./philosopher-list.component.css']
})
export class PhilosopherListComponent implements OnInit, OnDestroy {
   
   philosophers: Philosopher[];
   private subscription: Subscription;
   itemsPerPage: number = 10;
   currentPage: number;

  constructor(private philosopherService: PhilosopherService,
    private  router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('philosopher-list.component ngOnInit')
    this.currentPage = 1;
    this.philosophers = this.philosopherService.getPhilosophers();
    this.subscription = this.philosopherService.philosophersChanged
    .subscribe(
      (philosophers: Philosopher[]) => {
        this.philosophers = philosophers;
        console.log('philosopher-list.component subscription fires');
        console.log(this.philosophers);
      }
    )
  }

  onNewPhilosopher() {
      this.router.navigate(['new'], {relativeTo: this.route});
  }

  setPage(pageNumber: number): void {
    console.log("pageNumber: " +  pageNumber);
    this.currentPage = pageNumber;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
