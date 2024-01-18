import { Component, Input, OnInit } from '@angular/core';
import { School } from '../../school.model';

@Component({
  selector: 'app-school-item',
  templateUrl: './school-item.component.html',
  styleUrls: ['./school-item.component.css']
})
export class SchoolItemComponent implements OnInit {

  @Input() school: School;
  @Input() index: number;

  ngOnInit(): void {
  }

  onSelected() {
    console.log("School EntityId Selected: " + this.school.entityId)
  }

}
