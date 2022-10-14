import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PhilosopherService } from "../philosophers/philosopher.service";
 
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
}