import { Character } from "./characters/Character.js";
import { Background } from "./ui/basic-utils.js";

const frafta = new Character("Frafta", 100, 1, 5, 0);
const unrealurbic = new Character("UnrealUrbic", 900, 1, 0.5, 1);

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
  frafta.update(0);
  unrealurbic.update(0);

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
const render = () => {
  frafta.draw(ctx);
  unrealurbic.draw(ctx);
};
const getFps = () => {};

//kdyz se stranka nacte, spustime funkci
window.onload = () => {
  window.requestAnimationFrame(gameLoop);
};
