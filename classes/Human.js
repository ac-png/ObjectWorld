class Human {
    // private properties
    #health;
    #strength;
    #stealth;
    #intelligence;

    constructor(){
        this.#health = 100;
        this.#strength = 3;
        this.#stealth = 3;
        this.#intelligence = 3;
    }

    // getters and setters
    get health() {
        return this.#health;
    }
    get strength() {
        return this.#strength;
    }
    get stealth() {
        return this.#stealth;
    }
    get intelligence() {
        return this.#intelligence;
    }

    set health(_health) {
         if(_health >= 0 && _health <= 100) {
             this.#health = _health;
        } else {
            console.error(`${_health} is not valid`)
        }
    }
    set strength(_strength) {
        if(_strength >= 0 && _strength <= 100) {
            this.#strength = _strength;
       } else {
           console.error(`${_strength} is not valid`)
       }
   }
   set stealth(_stealth) {
        if(_stealth >= 0 && _stealth <= 100) {
                this.#stealth = _stealth;
        } else {
            console.error(`${_stealth} is not valid`)
        }
    }
    set intelligence(_intelligence) {
        if(_intelligence >= 0 && _intelligence <= 100) {
                this.#intelligence = _intelligence;
        } else {
            console.error(`${_intelligence} is not valid`)
        }
    }

    attack(_human){
        if(_human instanceof Human){
            _human.health -= this.strength;
        }
    }

    getStats(){
        return `
        Health: ${this.health},
        Strength: ${this.strength},
        Stealth: ${this.stealth},
        Intelligence: ${this.intelligence}
        `
    }
}

export default Human;