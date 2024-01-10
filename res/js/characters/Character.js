export class Character {
  constructor(name, hp, dmg, speed, type) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.speed = speed;
    this.img = new Image();
    this.setType(type);

    this.img.src = this.path;
    this.ratio = 0.3;
    this.size = {
      width: 336 * this.ratio,
      height: 634 * this.ratio,
    };
    this.position = {
      x: 100,
      y: 350,
    };
    this.velocity = {
      x: 1 * this.speed,
    };
    this.side = 0;
  }

  setType(type) {
    const characterTypes = [
      "./res/img/characters/fraftik4brady.png",
      "./res/img/characters/unrealurbic.png",
    ];
    this.path = characterTypes[type];
  }

  draw(ctx) {
    ctx.save();
    if (this.side == 0) {
      ctx.drawImage(
        this.img,
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height
      );
      //vratim to nemusim davat dalsi else if
      return ctx.restore(); //dam tady taky restore aby se to obnovilo
    }

    ctx.translate(this.position.x + this.size.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(
      this.img,
      0,
      this.position.y,
      this.size.width,
      this.size.height
    );

    ctx.restore();
  }
  update(state) {
    switch (state) {
      case 0:
        this.move();
        break;
      case 1:
        console.log(this.name + " attacks!");
        break;
      case 2:
        console.log(this.name + " umira");
        this.position.x = 0;
        this.hp = 100;
        break;
      default:
    }
  }

  move() {
    this.position.x += this.velocity.x;
    if (this.position.x >= 1100) {
      this.velocity.x *= -1;
      this.side = 1;
    }
    if (this.position.x <= 90) {
      this.velocity.x *= -1;
      this.side = 0;
    }
  }
}

//this - slovo ktere ukazuje na dany objekt uvnitr tridy
//funkce - stoji sama o sobe
//metoda - funkce, ale patri k objektu
// kopie sablony - objekt(object) - instance
//constructor - metoda, ktera se vola kdyz vytvorime instanci od tridy - kopii od sablony
//const myCharacter = new Character("Urban", 100, 5, 0.5);
/*
const myCharacter = new Character("Pepa", 10, 2, 1);
myCharacter.dmg = 4;*/
// takz muzu - console.log(myCharacter);
