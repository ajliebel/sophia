import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from "src/environments/environment";
import { School } from './school.model';
import { Reference } from "../references/reference.model";

@Injectable()
export class SchoolService {
    constructor(private http: HttpClient) {}
    schoolsChanged = new Subject<School[]>();
    schoolChanged = new Subject<School>();
    exclusionRefsChanged = new Subject<Reference[]>(); 

    private schools: School[];
    private references: Reference[];

    fetchSchools() {
        return this.http.get<School[]>(environment.restURI + "/schools/schools")
            .subscribe(schools => {
                this.schools = schools;
                this.schoolsChanged.next(this.schools.slice());
            });
    }

    fetchSchool(entityId: string) {
        return this.http.get<School>(environment.restURI + '/schools/school/' + entityId)
            .subscribe(school => {
                this.schoolChanged.next(school);
            })
    }

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
            environment.restURI + '/schools/school',
            school
        )
            .subscribe(response => {
                console.log(response);
            });
        this.schools.push(school);
        this.schoolsChanged.next(this.schools.slice());
    }

    updateSchool(index: number, newSchool: School) {
        this.schools[index] = newSchool;
        this.http.put(
            environment.restURI + '/schools/school',
            newSchool
        )
            .subscribe(response => {
                console.log(response);
                this.schoolChanged.next(newSchool)
            });
     
        this.schoolsChanged.next(this.schools.slice());
    }

    deleteSchool(index: number) {
        let toDelete:School = this.schools[index];
        this.http.delete(environment.restURI + '/schools/school/' + toDelete.entityId)
            .subscribe(response => {
              console.log(response)
            });
        this.schools.splice(index, 1);
        this.schoolsChanged.next(this.schools.slice());
    }

    fetchReferencesExcluding(entityId: string) {
        return this.http.get<Reference[]>(environment.restURI + '/schools/references-excluding/' + entityId)
        .subscribe(references => {
          this.references = references;
          this.exclusionRefsChanged.next(references);
        });
    }

    addSchoolReference(sEid: string, rEid: string) {
        this.http.put<School>(environment.restURI + '/schools/school/' + sEid + '/referenceLink/' + rEid, {})
        .subscribe(school => {
            this.schoolChanged.next(school);
          });   
    }

    removeSchoolReference(sEid: string, rEid: string) {
        this.http.delete<School>(environment.restURI + '/schools/school/' + sEid + '/referenceLink/' + rEid, {})
        .subscribe(school => {
            this.schoolChanged.next(school);
          });   
    }
    
    
    


}