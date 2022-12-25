import { IsPlayer} from '../interface/Iplayer.js';

export class player implements IsPlayer {

    constructor(
        public name: string,
        public age: number,
       public Country: string
    ) {

    }
    play() {
        console.log(`${this.name}from ${this.Country} age ${this.age}`)
    }

}