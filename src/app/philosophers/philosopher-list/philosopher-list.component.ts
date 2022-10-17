import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Philosopher } from '../philosopher.model';
import { PhilosopherService } from '../philosopher.service';

@Component({
  selector: 'app-philosopher-list',
  templateUrl: './philosopher-list.component.html',
  styleUrls: ['./philosopher-list.component.css']
})
export class PhilosopherListComponent implements OnInit {
   
   philosophers: Philosopher[];
   subscription: Subscription;

  constructor(private philosopherService: PhilosopherService,
    private  router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.philosopherService.philosophersChanged.subscribe(
      (philosophers: Philosopher[]) => {
        this.philosophers = philosophers;
        console.log(this.philosophers);
      }
    )
  }

  onNewPhilosopher() {
      this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
