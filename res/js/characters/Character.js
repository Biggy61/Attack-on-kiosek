

export class Character {

    constructor(name, hp, dmg, speed){
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.speed = speed;
        console.log(this);
    }
}

//funkce - stoji sama o sobe
//metoda - funkce, ale patri k objektu
// kopie sablony - objekt(object) - instance
//constructor - metoda, ktera se vola kdyz vytvorime instanci od tridy - kopii od sablony
//const myCharacter = new Character("Urban", 100, 5, 0.5);