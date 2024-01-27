import { Component, OnInit } from '@angular/core';
import { School } from '../school.model';
import { Reference } from 'src/app/references/reference.model';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school-reference',
  templateUrl: './school-reference.component.html',
  styleUrls: ['./school-reference.component.css']
})
export class SchoolReferenceComponent implements OnInit {

  school: School
  allReferenceLinks: Reference[]
  private exclusionLinksSubscription: Subscription;
  private schoolSubscription: Subscription;
  id:number;
  referenceForm: FormGroup; 


  constructor(private route: ActivatedRoute,
    private schoolService: SchoolService,
    private router: Router) { }

  
  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.school = this.schoolService.getSchool(this.id);
        this.schoolService.fetchSchool(this.school.entityId);
      }
    )

    this.schoolSubscription = this.schoolService.schoolChanged
    .subscribe((school: School) => {
       this.school = school;
       this.schoolService.fetchReferencesExcluding(this.school.entityId);
    })

    this.exclusionLinksSubscription = this.schoolService.exclusionRefsChanged
    .subscribe(
      (references: Reference[]) => {
        this.allReferenceLinks = references; 
      }
    )
    this.schoolService.fetchReferencesExcluding(this.school.entityId);
  
  }

  addReference(sEid: string, rEid: string): void {
    this.schoolService.addSchoolReference(sEid, rEid);
  }

  removeReference(sEid: string, rEid: string): void {
    this.schoolService.removeSchoolReference(sEid, rEid);
  }




}
