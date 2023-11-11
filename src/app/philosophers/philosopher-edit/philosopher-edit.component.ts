import { Component, ElementRef, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhilosopherService } from '../philosopher.service';
import { ReferencesDialogComponent } from '../../references/references-dialog/references-dialog.component';

@Component({
  selector: 'app-philosopher-edit',
  templateUrl: './philosopher-edit.component.html',
  styleUrls: ['./philosopher-edit.component.css']
})
export class PhilosopherEditComponent implements OnInit {
  id: number;
  editMode = false;
  philoForm: FormGroup;
  selectedCountry: string = 'default';
  
  constructor(private route: ActivatedRoute, 
    private philoService: PhilosopherService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !=  null;
        this.initForm();
        console.log(this.editMode);
      }
    )
  }

  onSubmit() {

    if (this.editMode) {
      this.philoService.updatePhilosopher(this.id, this.philoForm.value);
    } else {
      this.philoService.addPhilosopher(this.philoForm.value);
    }

    console.log(this.philoForm);
    this.onCancel();
  }

  private initForm() {
   
    let name = '';
    let imageUrl = '';
    let born = '';
    let died = '';
    if (this.editMode) {
      const philo = this.philoService.getPhilosopher(this.id);
      name = philo.name;
      imageUrl = philo.imageUrl;
      born = philo.born;
      died = philo.died;
    }
    this.philoForm = new FormGroup({
      'name' : new FormControl(name),
      'imageUrl' : new FormControl(imageUrl),
      'born' : new FormControl(born),
      'died' : new FormControl(died)
    });

  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }



}
