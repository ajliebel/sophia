import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-philosopher-edit',
  templateUrl: './philosopher-edit.component.html',
  styleUrls: ['./philosopher-edit.component.css']
})
export class PhilosopherEditComponent implements OnInit {
  id: number;
  editMode = false;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !=  null;
        console.log(this.editMode);
      }
    )
  }

}
