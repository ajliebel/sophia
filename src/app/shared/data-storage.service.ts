import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PhilosopherService } from "../philosophers/philosopher.service";
import { Philosopher } from "../philosophers/philosopher.model";
 
@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private philosopherService: PhilosopherService) {}

    storePhilosophers() {
        const philosophers = this.philosopherService.getPhilosophers();
        this.http.put(
            'https://sophia-kg-default-rtdb.firebaseio.com/philosophers.json',
             philosophers
             )
             .subscribe(response => {
             console.log(response);
         });
    }

    fetchPhilosophers() {
        return this.http.get<Philosopher[]>('https://sophia-kg-default-rtdb.firebaseio.com/philosophers.json')
          .subscribe(philosophers => { 
            console.log('data-storage subscribe fetch');
               console.log(philosophers);
               this.philosopherService.setPhilosophers(philosophers);
            });
    }
}