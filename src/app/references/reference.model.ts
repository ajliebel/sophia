export class Reference {
    public entityId: string;
    public title: string;
    public uri: string;

    constructor(title: string, uri: string, entityId?: string) {
        this.title = title;
        this.uri = uri;
        this.entityId = entityId;
    }
}