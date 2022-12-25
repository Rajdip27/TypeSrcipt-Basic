export class player {
    constructor(name, age, Country) {
        this.name = name;
        this.age = age;
        this.Country = Country;
    }
    play() {
        console.log(`${this.name}from ${this.Country} age ${this.age}`);
    }
}
