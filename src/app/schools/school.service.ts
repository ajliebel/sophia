import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from "src/environments/environment";
import { School } from './school.model';

@Injectable()
export class SchoolService {
    constructor(private http: HttpClient) {}
    schoolsChanged = new Subject<School[]>();

    private schools: School[];

    setSchools(schools: School[]) {
        this.schools = schools;
        this.schoolsChanged.next(this.schools.slice());
    }

    getSchools() {
        return this.schools.slice();
    }

    getSchool(id: number) {
        return this.schools[id];
    }

    addSchool(school: School) {
        this.http.post(
            environment.restURI + '/domain/school',
            school
        )
            .subscribe(response => {
                console.log(response);
            });
        this.schools.push(school);
        this.schoolsChanged.next(this.schools.slice());
    }

    updateSchool(index: number, newSchool: School) {
        this.http.post(
            environment.restURI + '/domain/school',
            newSchool
        )
            .subscribe(response => {
                console.log(response);
            });
        this.schools[index] = newSchool;
        this.schoolsChanged.next(this.schools.slice());
    }

    deleteSchool(index: number) {
        let toDelete:School = this.schools[index];
        this.http.delete(environment.restURI + '/domain/school/' + toDelete.name)
            .subscribe(response => {
              console.log(response)
            });
        this.schools.splice(index, 1);
        this.schoolsChanged.next(this.schools.slice());
    }
}