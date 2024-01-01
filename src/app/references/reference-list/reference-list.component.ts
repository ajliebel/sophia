import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Reference } from '../reference.model';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.css']
})
export class ReferenceListComponent implements OnInit {

  references: Reference[];
  private referenceChangeSub: Subscription;

  constructor(private referenceService: ReferenceService,
       private router: Router,
       private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.references = this.referenceService.getReferences();
    this.referenceChangeSub = this.referenceService.refsChanged
       .subscribe((references: Reference[]) => {
        this.references = references;
       }
    );
    this.referenceService.fetchReferences();
  }

  ngOnDestroy(): void {
    this.referenceChangeSub.unsubscribe();
  }

  onNewReference() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
l
}
