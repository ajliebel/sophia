import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { School } from '../school.model';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.css']
})
export class SchoolEditComponent implements OnInit {
  id: number;
  editMode = false;
  schoolForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private schoolService: SchoolService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !=  null;
        this.initForm();
        console.log(this.editMode);
      });
  }

  onSubmit() {

      if (this.editMode) {
       this.schoolService.updateSchool(this.id, this.schoolForm.value);
      } else {
        this.schoolService.addSchool(this.schoolForm.value);
      }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  

  private initForm() {

    let entityId = ''
    let name = '';
    let period = '';
    let location = '';
    let imageUrl = '';

    if (this.editMode) {
      const school = this.schoolService.getSchool(this.id);
      entityId = school.entityId
      name = school.name;
      period = school.period
      location = school.location;
      imageUrl = school.imageUrl;
    }

    this.schoolForm = new FormGroup( {
      'entityId': new FormControl(entityId),
      'name': new FormControl(name),
      'period': new FormControl(period),
      'imageUrl': new FormControl(imageUrl),
      'location': new FormControl(location)
    });
  }

}
