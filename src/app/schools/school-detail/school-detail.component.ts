import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { School } from '../school.model';
import { SchoolService } from '../school.service';
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

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.school= this.schoolService.getSchool(this.id);
      }
    );
  }

  onEditSchool() {
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route });
  }

  onDeleteSchool() {
    this.schoolService.deleteSchool(this.id);
     this.router.navigate(['/schools']);
  }

}