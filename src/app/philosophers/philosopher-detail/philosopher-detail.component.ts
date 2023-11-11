import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Philosopher } from '../philosopher.model';
import { PhilosopherService } from '../philosopher.service';

@Component({
  selector: 'app-philosopher-detail',
  templateUrl: './philosopher-detail.component.html',
  styleUrls: ['./philosopher-detail.component.css']
})
export class PhilosopherDetailComponent implements OnInit {

  philo: Philosopher;
  id: number;

  constructor(private philosopherService: PhilosopherService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.philo = this.philosopherService.getPhilosopher(this.id);
      }
    );
  }

  onEditPhilosopher() {
    //this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onAssociatePhilosopher() {
    this.router.navigate(['../', this.id, 'associate'], {relativeTo: this.route});
  }

  onDeletePhilosopher() {
    this.philosopherService.deletePhilosopher(this.id);
    this.router.navigate(['/philosophers']);
  }

}
