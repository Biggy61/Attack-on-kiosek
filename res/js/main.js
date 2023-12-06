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





document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
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
}

const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;

};
const clearCanvas = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720)
};
const update = () => {};
const render = () => {};
const getFps = () => {};


//kdyz se stranka nacte, spustime funkci
window.onload = () => {
    window.requestAnimationFrame(gameLoop);
}