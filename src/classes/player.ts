export class player {

    constructor(
        private name: string,
        public age: number,
        readonly Country: string
    ) {

    }
    play() {
        console.log(`${this.name}from ${this.Country} age ${this.age}`)
    }

}