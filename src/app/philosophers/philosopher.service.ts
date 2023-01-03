import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Philosopher } from "./philosopher.model";
import { environment } from "src/environments/environment";

@Injectable()
export class PhilosopherService {
    constructor(private http: HttpClient) {}
    philosophersChanged = new Subject<Philosopher[]>();


    private philosophers: Philosopher[] = [];

    setPhilosophers(philosophers: Philosopher[]) {
        console.log("philosopherService.setPhilosophers()");
        console.log(philosophers);
        this.philosophers = philosophers;
        this.philosophersChanged.next(this.philosophers.slice());
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
            environment.restURI + '/domain/philosopher',
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
        this.http.post(
            environment.restURI + '/domain/philosopher',
            newPhilosopher
        )
            .subscribe(response => {
                console.log(response);
            });
        this.philosophersChanged.next(this.philosophers.slice());
    }

    deletePhilosopher(index: number) {
        let toDelete:Philosopher = this.philosophers[index];
        this.removePhilosopher(toDelete.name);
        this.philosophers.splice(index, 1);
        this.philosophersChanged.next(this.philosophers.slice());
    }


    removePhilosopher(name: string) {
        this.http.delete(environment.restURI + '/domain/philosopher/' + name)
            .subscribe(response => {
              console.log(response)
            });
  }
}