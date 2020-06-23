export class RouteStep {
    constructor(public label: string, public url: string) {
        this.label = decodeURIComponent(label);
        this.label = `${this.label.substr(0, 1).toUpperCase()}${this.label.substring(1)}`;
    }
}