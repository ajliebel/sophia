export class Philosopher {
    public name: string;
    public born: string;
    public birthPlace;
    public died: string;
    public deathPlace;

    constructor(name: string, born: string, birthPlace: string, died: string, deathPlace: string) {
        this.name = name;
        this.born = born;
        this.died = died;
        this.deathPlace = deathPlace;
    }
}