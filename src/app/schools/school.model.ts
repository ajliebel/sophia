export class School {
    public entityId: string
    public name: string;
    public period: string;
    public imageUrl: string;
    public referenceLinks: string[];

    constructor(entityId: string, name: string, period: string, imageUrl: string, referenceLinks: string[]) {
        this.entityId = entityId;
        this.name = name;
        this.period = period;
        this.imageUrl = imageUrl;
        this.referenceLinks = referenceLinks;
    }
}