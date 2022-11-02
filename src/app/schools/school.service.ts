import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { School } from './school.model';

@Injectable()
export class SchoolService {
    schoolsChanged = new Subject<School[]>();

    private schools: School[] = [
        new School('Milesian','6th Century BC','https://philosophy.redzambala.com/sites/default/files/field/image/Milesian-school.jpg'),
        new School('Pythagorean', '6th Century BC', 'https://www.daviddarling.info/images3/Pythagoras.jpg'),
        new School('Eleatic', '5th Century BC','https://factsanddetails.com/archives/003/201812/5c03deb3997c6.jpg'),
        new School('Pluralist', '5th Century BC',''),
        new School('Sophists', '5th Century BC','')
    ];

    setSchools(schools: School[]) {
        this.schools = schools;
        this.schoolsChanged.next(this.schools.slice());
    }

    getSchools() {
        return this.schools.slice();
        this.schoolsChanged.next(this.schools.slice());
    }

    getSchool(id: number) {
        return this.schools[id];
    }

    addSchool(school: School) {
        this.schools.push(school);
        this.schoolsChanged.next(this.schools.slice());
    }

    updateSchool(index: number, newSchool: School) {
        this.schools[index] = newSchool;
        this.schoolsChanged.next(this.schools.slice());
      }

    deleteSchool(index: number) {
        this.schools.splice(index, 1);
        this.schoolsChanged.next(this.schools.slice());
    }
}