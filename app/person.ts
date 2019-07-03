export interface Person {
    name: string;
    age?: number;//optional
    formatName: () => string;//function signature of type string
}