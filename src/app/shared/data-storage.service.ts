import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PhilosopherService } from "../philosophers/philosopher.service";
import { Philosopher } from "../philosophers/philosopher.model";
import { SchoolService } from "../schools/school.service";
import { School } from "../schools/school.model";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private philosopherService: PhilosopherService,
        private schoolService: SchoolService) { }

    storePhilosophers() {
        const philosophers = this.philosopherService.getPhilosophers();
        if (philosophers.length > 0) {
            this.http.post(
                'https://dev1.ajliebel.net/domain/philosophers',
                philosophers
            )
                .subscribe(response => {
                    console.log(response);
                });
        }
    }

    deletePhilosopher(name: string) {
          this.http.delete('https://dev1.ajliebel.net/domain/philosopher/' + name)
              .subscribe(response => {
                console.log(response)
              });
    }

    fetchPhilosophers() {
        return this.http.get<Philosopher[]>('https://dev1.ajliebel.net/domain/philosophers')
            .subscribe(philosophers => {
                console.log('data-storage subscribe fetch');
                console.log(philosophers);
                this.philosopherService.setPhilosophers(philosophers);
            });
    }


    storeSchools() {
        const schools = this.schoolService.getSchools();
        if (schools.length > 0) {
            this.http.put(
                'https://sophia-kg-default-rtdb.firebaseio.com/schools.json',
                schools
            )
                .subscribe(response => {
                    console.log(response);
                });
        }
    }

    fetchSchools() {
        return this.http.get<School[]>('https://sophia-kg-default-rtdb.firebaseio.com/schools.json')
            .subscribe(schools => {
                console.log('data-storage subscribe fetch');
                console.log(schools);
                this.schoolService.setSchools(schools);
            });
    }

}