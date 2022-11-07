import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Philosopher } from "./philosopher.model";

@Injectable()
export class PhilosopherService {
    philosophersChanged = new Subject<Philosopher[]>();
    private philosophers: Philosopher[] = [
       new Philosopher('Thales', '649 BC', 'Miletus Ionia', '599 BC', 'Miletus Ionia','https://upload.wikimedia.org/wikipedia/commons/c/c6/Illustrerad_Verldshistoria_band_I_Ill_107.jpg'),
       new Philosopher('Anaxamander', '630 BC', 'Miletus Ionia', '593 BC', 'Miletus Ionia',
       'https://upload.wikimedia.org/wikipedia/commons/4/44/Anaximander_Mosaic_%28cropped%2C_with_sundial%29.jpg'),
     ];

    //private philosophers: Philosopher[] = [];

    setPhilosophers(philosophers: Philosopher[]) {
        console.log("philosopherService.setPhilosophers()");
        console.log(philosophers);
        this.philosophers = philosophers;
        this.philosophersChanged.next(this.philosophers.slice());
    }
     
    getPhilosophers() {
        return this.philosophers.slice();
    }

    getPhilosopher(id: number) {
        return this.philosophers[id];
        this.philosophersChanged.next(this.philosophers.slice());
    }

    addPhilosopher(philosopher: Philosopher) {
        this.philosophers.push(philosopher);
        this.philosophersChanged.next(this.philosophers.slice());
    }

    updatePhilosopher(index: number, newPhilosopher: Philosopher) {
        this.philosophers[index] = newPhilosopher;
        this.philosophersChanged.next(this.philosophers.slice());
      }

    deletePhilosopher(index: number) {
        this.philosophers.splice(index, 1);
        this.philosophersChanged.next(this.philosophers.slice());
    }
}