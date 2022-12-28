import { Component, Input, OnInit } from '@angular/core';
import { Reference } from '../../reference.model';

@Component({
  selector: 'app-reference-item',
  templateUrl: './reference-item.component.html',
  styleUrls: ['./reference-item.component.css']
})
export class ReferenceItemComponent implements OnInit {

  @Input() reference: Reference;
  @Input() index: number;

  ngOnInit(): void {
  }

}
