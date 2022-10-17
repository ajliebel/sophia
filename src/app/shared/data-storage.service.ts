import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PhilosopherService } from "../philosophers/philosopher.service";
import { Philosopher } from "../philosophers/philosopher.model";
 
@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private philosopherService: PhilosopherService) {}

    storePhilosophers() {
        const philosophers = this.philosopherService.getPhilosophers();
        this.http.put('https://sophia-kg-default-rtdb.firebaseio.com/philosophers.json',
         philosophers).subscribe(response => {
             console.log(response);
         });
    }

    fetchPhilosophers() {
        this.http.get<Philosopher[]>('https://sophia-kg-default-rtdb.firebaseio.com/philosophers.json')
          .subscribe(philosophers => { 
               this.philosopherService.setPhilosophers(philosophers);
            });
    }
}