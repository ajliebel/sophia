import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhilosopherService } from '../philosopher.service';
import { Philosopher } from '../philosopher.model';
import { Reference } from 'src/app/references/reference.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-philosopher-reference',
  templateUrl: './philosopher-reference.component.html',
  styleUrls: ['./philosopher-reference.component.css']
})
export class PhilosopherReferenceComponent implements OnInit {
  philo: Philosopher;
  allReferenceLinks: Reference[]
  private exclusionLinksSubscription: Subscription;
  private philosopherSubscription: Subscription;
  id:number;
  referenceForm: FormGroup; 

  constructor(private route: ActivatedRoute,
    private philosopherService: PhilosopherService,
    private router: Router) { }

  ngOnInit(): void {
   
   
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.philo = this.philosopherService.getPhilosopher(this.id);
        this.philosopherService.fetchPhilosopher(this.philo.entityId);
      }
    )

    this.philosopherSubscription = this.philosopherService.philosopherChanged
    .subscribe((philosopher: Philosopher) => {
       this.philo = philosopher;
       this.philosopherService.fetchReferencesExcluding(this.philo.entityId);
    })

    this.exclusionLinksSubscription = this.philosopherService.exclusionRefsChanged
    .subscribe(
      (references: Reference[]) => {
        this.allReferenceLinks = references; 
      }
    )
    this.philosopherService.fetchReferencesExcluding(this.philo.entityId);
    //this.initForm();
  }

  // private initForm() {
  //   let title = '';
  //   let uri = '';

  //   this.referenceForm = new FormGroup( {
  //     'title' : new FormControl(title),
  //     'uri' : new FormControl(uri)
  //   });
  // }



  onSubmit(): void {

  }

  addReference(pEid: string, rEid: string): void {
    console.log('add reference Philosopher EntityId: ', pEid );
    console.log('add referecnce Reference EntityId: ', rEid);
    this.philosopherService.addPhilosopherReference(pEid, rEid);
    //this.philosopherService.fetchPhilosopher(this.philo.entityId);
    //this.referenceService.fetchReferencesExcluding(this.philo.entityId);
  }

  removeReference(pEid: string, rEid: string): void {
    console.log('add reference Philosopher EntityId: ', pEid );
    console.log('add referecnce Reference EntityId: ', rEid);
    this.philosopherService.removePhilosopherReference(pEid, rEid);
  }

}
