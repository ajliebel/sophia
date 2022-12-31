import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Reference } from '../reference.model';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-reference-edit',
  templateUrl: './reference-edit.component.html',
  styleUrls: ['./reference-edit.component.css']
})
export class ReferenceEditComponent implements OnInit {

  id: number;
  editMode = false;
  referenceForm: FormGroup;
  
  constructor(private route: ActivatedRoute,
    private referenceService: ReferenceService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm() {
    let title = '';
    let uri = '';

    if (this.editMode) {
      const reference = this.referenceService.getReference(this.id);
      title = reference.title;
      uri = reference.uri;
    }

    this.referenceForm = new FormGroup( {
      'title' : new FormControl(title),
      'uri' : new FormControl(uri)
    });
  }

  onSubmit() {
    const newReference = new Reference(
      this.referenceForm.value['title'],
      this.referenceForm.value['uri']
    );

    if (this.editMode) {
      this.referenceService.updateReference(this.id, newReference);
    } else {
        this.referenceService.addReference(newReference);
      }
  }
  
}
