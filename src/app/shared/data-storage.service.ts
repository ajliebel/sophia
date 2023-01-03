import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PhilosopherService } from "../philosophers/philosopher.service";
import { Philosopher } from "../philosophers/philosopher.model";
import { SchoolService } from "../schools/school.service";
import { School } from "../schools/school.model";
import { ReferenceService } from "../references/reference.service";
import { Reference } from "../references/reference.model";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private philosopherService: PhilosopherService,
        private schoolService: SchoolService,
        private referenceService: ReferenceService) { }

    storePhilosophers() {
        const philosophers = this.philosopherService.getPhilosophers();
        if (philosophers.length > 0) {
            this.http.post(
                environment.restURI + '/domain/philosophers',
                philosophers
            )
                .subscribe(response => {
                    console.log(response);
                });
        }
    }


    deletePhilosopher(name: string) {
          this.http.delete(environment.restURI + '/domain/philosopher/' + name)
              .subscribe(response => {
                console.log(response)
              });
    }

    fetchPhilosophers() {
        return this.http.get<Philosopher[]>(environment.restURI + '/domain/philosophers')
            .subscribe(philosophers => {
                console.log('data-storage subscribe fetch');
                console.log(philosophers);
                this.philosopherService.setPhilosophers(philosophers);
            });
    }

    fetchReferences() {
        return this.http.get<Reference[]>(
            environment.restURI + '/domain/references'
        ).subscribe(response => {
            console.log(response);
            this.referenceService.setReferences(response);
        }); 
    }

    storeSchools() {
        const schools = this.schoolService.getSchools();
        if (schools.length > 0) {
            this.http.put(
                environment.restURI + '/domain/schools.json',
                schools
            )
                .subscribe(response => {
                    console.log(response);
                });
        }
    }

    fetchSchools() {
        return this.http.get<School[]>(environment.restURI + '/domain/schools')
            .subscribe(schools => {
                console.log('data-storage subscribe fetch');
                console.log(schools);
                this.schoolService.setSchools(schools);
            });
    }

}