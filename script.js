let canvas = document.querySelector("#container");
let button = document.querySelector("button");
let answer = 16;
let size = 960/answer + "px";

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

function newCanvas()    {
    for(i = 0; i < answer**2; i++)    {
    createBlock();
    }
}

function changeSize()   {
    answer = prompt("How big do you want your canvas? (1 - 100)");
    size = 960/answer + "px";
    canvas.innerHTML = ''
    newCanvas();
}

newCanvas();