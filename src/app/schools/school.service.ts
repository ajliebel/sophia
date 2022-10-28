import { School } from './school.model';

export class SchoolService {
    private schools: School[] = [
        new School('Milesian','6th Century BC','https://philosophy.redzambala.com/sites/default/files/field/image/Milesian-school.jpg'),
        new School('Pythagorean', '6th Century BC', 'https://www.daviddarling.info/images3/Pythagoras.jpg'),
        new School('Eleatic', '5th Century BC','https://factsanddetails.com/archives/003/201812/5c03deb3997c6.jpg'),
        new School('Pluralist', '5th Century BC',''),
        new School('Sophists', '5th Century BC','')
    ];

    getSchools() {
        return this.schools.slice();
    }
}