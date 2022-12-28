import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Reference } from '../reference.model';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-reference-detail',
  templateUrl: './reference-detail.component.html',
  styleUrls: ['./reference-detail.component.css']
})
export class ReferenceDetailComponent implements OnInit {

  reference: Reference;
  id: number;

  constructor(private referenceService: ReferenceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
       (params: Params) => {
          this.id = +params['id'];
          this.reference = this.referenceService.getReference(this.id);
       }
    );
  }

  onEditReference() {
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route });
  }

  onDeleteReference() {
    this.referenceService.deleteReference(this.id);
    this.router.navigate(['/references']);
  }

}
