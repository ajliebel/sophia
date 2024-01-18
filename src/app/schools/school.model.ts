export class School {
    public entityId: string
    public name: string;
    public period: string;
    public location: string;
    public imageUrl: string;
    public referenceLinks: string[];

    constructor(entityId: string, name: string, period: string, location: string, imageUrl: string, referenceLinks: string[]) {
        this.entityId = entityId;
        this.name = name;
        this.period = period;
        this.location = location;
        this.imageUrl = imageUrl;
        this.referenceLinks = referenceLinks;
    }
}