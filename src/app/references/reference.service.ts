import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Reference } from "./reference.model";

@Injectable()
export class ReferenceService {
    constructor(private http: HttpClient) {}
    refsChanged = new Subject<Reference[]>();  


   private references: Reference[];

   setReferences(references: Reference[]) {
     this.references = references;
     this.refsChanged.next(this.references.slice());
   }

   getReferences() {
    return this.references.slice();
   }

   getReference(id: number) {
    return this.references[id];
   }

   addReference(reference: Reference) {
    this.http.post(
        'https://rl8-dt.ajliebel.net/domain/reference',
           reference
    ).subscribe(response => {
        console.log(response);
    });
    this.references.push(reference);
    this.refsChanged.next(this.references.slice());
   }

   updateReference(index: number, newReference: Reference) {
      this.http.post(
        'https://rl8-dt.ajliebel.net/domain/reference',
        newReference
      ).subscribe(response => {
        console.log(response);
      });
      this.references[index] = newReference;
      this.refsChanged.next(this.references.slice());

   }

  deleteReference(index: number) {
    let toDelete:Reference = this.references[index];
    this.http.delete('https://rl8-dt.ajliebel.net/domain/reference/' + toDelete.title)
            .subscribe(response => {
              console.log(response)
            });
        this.references.splice(index, 1);
        this.refsChanged.next(this.references.slice());
  }
}