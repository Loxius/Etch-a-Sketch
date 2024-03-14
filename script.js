let canvas = document.querySelector("#container");
let button = document.querySelector("button");
let div;

let size = 60 + "px";

function createBlock()  {
    let div = document.createElement("div");
    div.classList.add("block");
    div.style.height = size;
    div.style.width = size;
    div.addEventListener("mouseover", ()   =>  {
        div.classList.add("colorChange");
    });

    canvas.append(div)
}

for(i = 0; i < 256; i++)    {
    createBlock();
}