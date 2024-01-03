import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { School } from '../school.model';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit, OnDestroy {
  schools: School[];
  private schoolChangeSub: Subscription;

  constructor(private schoolService: SchoolService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.schoolChangeSub = this.schoolService.schoolsChanged
      .subscribe((schools: School[]) => {
        this.schools = schools;
        }
      );
      this.schoolService.fetchSchools();
  }

  ngOnDestroy(): void {
      this.schoolChangeSub.unsubscribe();
  }

  onNewSchool() {
    this.router.navigate(['new'], {relativeTo: this.route});

  }

}
