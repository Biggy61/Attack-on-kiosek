export class Character {
  //static - dana vec nalezi/patri tride - ne objektu
  static charactersData;
  /** 
   * const foo = new Character(....)
   * foo.name; - name patri objektu
   * 
   * Kdyz dana vec patri tride - je static
   * Character.charactersData - zapis vypada takto
   * foo.charactersData - nebude fungovat
   * **/
  constructor(name) {
    this.name = name;
    this.img = new Image();
    this.setType(name);
    this.img.src = this.path;
    this.ratio = 0.3;
    this.size = {
      width: 600 * this.ratio,
      height: 634 * this.ratio,
    };
    this.state = 0;
    this.animationSpeed = 4;
    this.frame = {
      counter: 0,
      index: 1,
      maxIndex: 11,
      width: 100,
      height: 100
    }
  }

  setType(name) {
     Character.charactersData.map((obj) => {
     if(name === obj.name) {
         this.sprites = obj.sprites;
         this.hp = obj.stats.hp;
         //kdyz zemre abz se obnovily zivoty
         this.maxHp = this.hp;
         this.dmg = obj.stats.dmg;
         this.speed = obj.stats.speed;
         this.side = obj.stats.side;
         this.velocity = {
          x: obj.stats.velocity * this.speed,
         };
         this.position = {
          x: obj.stats.position,
          y: 350
         };
         return;
     }
     });
  }

  animate(ctx) {
    let movementX = this.position.x;
    if (this.side === 1) {
      movementX = 0;
    }
    //this.img - obrazek co chceme vykreslit
    //this.frame.width * this.frame.height - souradnice x pro frame z obrazku
    // 0 - souradnice y pro frame z obrazku
    //this.frame.width - sirka ramu
    //this.frame.height - vyska ramu
    //movementX - souradnice X kde se bude vykreslovat na canvasu obrazek
    //this.position.y - souradnice y kde se bude vykreslovat na canvasu obrazek
    console.log(this.frame.height)
    ctx.drawImage(
       this.img,
       this.frame.width * this.frame.index,
       0,
       this.frame.width,
       this.frame.height,
       movementX,
       this.position.y,
      this.size.width,this.size.height
    );
    if (this.frame.index >= this.frame.maxIndex) return this.frame.index = 0;
    this.frame.counter++;
    if (this.frame.counter >= this.animationSpeed) {
      this.frame.index++;
      this.frame.counter = 0;
    }
  }

  draw(ctx) {
    ctx.save();
    if (this.side == 0) {
      this.animate(ctx);
      //vratim to nemusim davat dalsi else if
      return ctx.restore(); //dam tady taky restore aby se to obnovilo
    }

    ctx.translate(this.position.x + this.size.width, 0);
    ctx.scale(-1, 1);
    this.animate(ctx);

    ctx.restore();
  }
  update() {
    switch (this.state) {
      case 0:
        this.move();
        this.img.src = this.sprites.movement.path;
        this.frame.maxIndex = this.sprites.movement.frames;
        this.frame.width = this.sprites.movement.size.width;
        this.frame.height = this.sprites.movement.size.height;
        break;
      case 1:
        this.img.src = this.sprites.attack.path;
        this.frame.maxIndex = this.sprites.attack.frames;
        this.frame.width = this.sprites.attack.size.width;
        this.frame.height = this.sprites.attack.size.height;
        break;
      case 2:
        this.position.x = 0;
        this.hp = this.maxHp;
        if (this.side === 0) return this.position.x = -200;
        this.position.x = 1400  
        break;
      default:
    }
  }

  move() {
    this.position.x += this.velocity.x;
 
  }

  attack(enemy) {
    if (enemy === undefined) {
      enemy.state = 2;
    }
    enemy.hp -= this.dmg;
    if (enemy.hp <= 0) {
      enemy.state = 2;
    }
  }
  static detectCollision(friendly, enemy) {
     if (
      friendly.position.x < enemy.position.x + enemy.size.width * 0.3 + enemy.size.width * 0.2 &&
      friendly.position.x + friendly.size.width / 2 + friendly.size.width * 0.2 > enemy.position.x + enemy.size.width * 0.3

      ) {
      friendly.state = 1;
      enemy.state = 1;
      friendly.attack(enemy);
      enemy.attack(friendly);
      friendly.update();
      enemy.update();
      return;
     } 
     friendly.state = 0;
     enemy.state = 0;
     friendly.update();
     enemy.update();
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
