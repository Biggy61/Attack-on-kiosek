import { Character } from "./characters/Character.js";
import { Background } from "./ui/basic-utils.js";

//pole - uschovava postavy pro hrace
const friendly = [];

//pole - uschovava postavy pro pocitac
const enemies = [];

const background = new Background();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const keys = {};
// Space: true
// Space: false

/* [] - pole
   {} - pokud to neni funkce je to objekt
const xd = [5, 12];
// index - poradove cislo nejake hodnoty, pocita se od 0
// index         0        1       2      3  4  5     6
const names = ["Pepa", "Radek", "Radim", 5, 8, 9, "Novak"];
console.log(names[2]); // Radim
console.log(names[4]); // 8
names[4] = "Honza";
console.log(names[4]); //honza


*/

/*
// key: value
// klic: hodnota
//vlastnosit objektu - atributy
const urban = {
    hp: 1000,
    dmg: 1,
    as: 0.1,
    speed: 0.1

}
console.log(urban.hp);
urban.hp -= 500;
console.log(urban.hp);
*/

//keydown - kdyz zmacknu
//keyup - kdyz pustim klavesu

document.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});
document.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

// hlavni smycka hry
const gameLoop = () => {
  //resize
  resizeCanvas();
  //clearCanvas
  clearCanvas();
  //update

  update();
  //render animaci
  render();

  //fps
  getFps();

  window.requestAnimationFrame(gameLoop);
};

const resizeCanvas = () => {
  canvas.width = 1280;
  canvas.height = 720;
};
const clearCanvas = () => {
  background.draw(ctx);
};
const update = () => {
 detectCollision();

  /*
    if(frafta.position.x >= 640){
        frafta.update(1);
        frafta.hp--;
        console.log(frafta.hp);
        if(frafta.hp <= 0){
            frafta.update(2);
            
        }
    }
    else{
        frafta.update(0);
    }*/
};

const detectCollision = () => {
  friendly.map((a) => {
    enemies.map((b) => {
    Character.detectCollision(a, b);
    });
  });
}
const render = () => {
  //a - postava ktera je v poli zrovna na rade
  friendly.map((a) => {
    a.draw(ctx);
  });
  enemies.map((a) => {
    a.draw(ctx);
  });
};
const getFps = () => {};

const loadData = async () => {
  const file = await fetch("./res/data/characters.json");
  const data = await file.json();
  Character.charactersData = data;

};

const prerender = () => {
  friendly.push(new Character("UnrealUrbic"));
  enemies.push(new Character("Frafticek"));
};

//kdyz se stranka nacte, spustime funkci
window.onload = async () => {
  //nacteme soubor
  await loadData();
  //prerenderujeme postavy
  prerender();
  //spustime hru
  window.requestAnimationFrame(gameLoop);

};
