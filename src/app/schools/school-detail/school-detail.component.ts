import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { School } from '../school.model';
import { SchoolService } from '../school.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

  school: School;
  id: number;

  constructor(private schoolService: SchoolService,
    private route: ActivatedRoute,
    private router: Router) { }

  schoolSubscription: Subscription;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.school= this.schoolService.getSchool(this.id);
        this.schoolService.fetchSchool(this.school.entityId);
      }
    );
    this.schoolSubscription = this.schoolService.schoolChanged
      .subscribe((school) => {
        this.school = school;
      })
  }

  onEditSchool() {
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route });
  }

  onAssociateSchool() {
    this.router.navigate(['../', this.id, 'associate'], {relativeTo: this.route});
  }

  onDeleteSchool() {
    this.schoolService.deleteSchool(this.id);
     this.router.navigate(['/schools']);
  }

}