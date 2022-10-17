import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhilosopherService } from '../philosopher.service';

@Component({
  selector: 'app-philosopher-edit',
  templateUrl: './philosopher-edit.component.html',
  styleUrls: ['./philosopher-edit.component.css']
})
export class PhilosopherEditComponent implements OnInit {
  id: number;
  editMode = false;
  philoForm: FormGroup;
  
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
    console.log(this.philoForm);
    this.onCancel();
  }

  private initForm() {
   
    let name = '';
    let imagePath = '';
    let born = '';
    let died = '';
    if (this.editMode) {
      const philo = this.philoService.getPhilosopher(this.id);
      name = philo.name;
      imagePath = philo.imageUrl;
      born = philo.born;
      died = philo.died;
    }
    this.philoForm = new FormGroup({
      'name' : new FormControl(name),
      'imagePath' : new FormControl(imagePath),
      'born' : new FormControl(born),
      'died' : new FormControl(died)
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
