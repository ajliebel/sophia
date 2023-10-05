import { Reference } from '../references/reference.model';

export class Philosopher {
    public name: string;
    public born: string;
    public birthPlace: string;
    public died: string;
    public deathPlace;
    public imageUrl: string;
    public referenceLinks: Reference[];

    constructor(name: string, born: string, birthPlace: string, died: string, deathPlace: string, imageUrl: string, referenceLinks: Reference[]) {
        this.name = name;
        this.born = born;
        this.birthPlace = birthPlace;
        this.died = died;
        this.deathPlace = deathPlace;
        this.imageUrl = imageUrl;
        this.referenceLinks = referenceLinks;
    }
}