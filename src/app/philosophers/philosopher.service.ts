import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Philosopher } from "./philosopher.model";
import { environment } from "src/environments/environment";
import { Reference } from "../references/reference.model";

@Injectable()
export class PhilosopherService {
    constructor(private http: HttpClient) { }
    philosophersChanged = new Subject<Philosopher[]>();
    philosopherChanged = new Subject<Philosopher>();
    exclusionRefsChanged = new Subject<Reference[]>(); 


    private philosophers: Philosopher[] = [];
    private references: Reference[];

    fetchPhilosophers() {
        return this.http.get<Philosopher[]>(environment.restURI + '/philosophers/philosophers')
            .subscribe(philosophers => {
                console.log('data-storage subscribe fetch');
                console.log(philosophers);
                this.philosophers =  philosophers;
                this.philosophersChanged.next(this.philosophers.slice());
            });
    }

    fetchPhilosopher(entityId: string) {
        return this.http.get<Philosopher>(environment.restURI + '/philosophers/philosopher/' + entityId)
            .subscribe(philosopher => {
                console.log('fetchPhilosopher:')
                console.log(philosopher)
                this.philosopherChanged.next(philosopher);
            })
    }

    getPhilosophers() {
        return this.philosophers.slice();
        this.philosophersChanged.next(this.philosophers.slice());
    }

    getPhilosopher(id: number) {
        return this.philosophers[id];
        this.philosophersChanged.next(this.philosophers.slice());
    }


    addPhilosopher(philosopher: Philosopher) {
        this.http.post(
            environment.restURI + '/philosophers/philosopher',
            philosopher
        )
            .subscribe(response => {
                console.log(response);
            });
        this.philosophers.push(philosopher);
        this.philosophersChanged.next(this.philosophers.slice());
    }

    updatePhilosopher(index: number, newPhilosopher: Philosopher) {
        this.philosophers[index] = newPhilosopher;
        this.http.put(
            environment.restURI + '/philosophers/philosopher',
            newPhilosopher
        )
            .subscribe(response => {
                console.log(response);
                this.philosopherChanged.next(newPhilosopher);
            });
        this.philosophersChanged.next(this.philosophers.slice());
        
    }

    deletePhilosopher(index: number) {
        let toDelete: Philosopher = this.philosophers[index];
        this.http.delete(environment.restURI + '/philosophers/philosopher/' + toDelete.entityId)
            .subscribe(response => {
                console.log(response)
            });
        this.philosophers.splice(index, 1);
        this.philosophersChanged.next(this.philosophers.slice());
    }

    fetchReferencesExcluding(entityId: string) {
        return this.http.get<Reference[]>(environment.restURI + '/philosophers/references-excluding/' + entityId)
        .subscribe(references => {
          this.references = references;
          this.exclusionRefsChanged.next(references);
        });
       }
    

    addPhilosopherReference(pEid: string, rEid: string) {
        this.http.put<Philosopher>(environment.restURI + '/philosophers/philosopher/' + pEid + '/referenceLink/' + rEid, {})
              .subscribe(philosopher => {
                console.log(philosopher)
                this.philosopherChanged.next(philosopher);
              });     
      }

      removePhilosopherReference(pEid: string, rEid: string) {
        this.http.delete<Philosopher>(environment.restURI + '/philosophers/philosopher/' + pEid + '/referenceLink/' + rEid, {})
              .subscribe(philosopher => {
                console.log(philosopher)
                this.philosopherChanged.next(philosopher);
              });     
      }

}