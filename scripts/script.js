var element = document.getElementById("a-accueil");

element.addEventListener("mouseover", e => {
    mousein();
});

element.addEventListener("mouseout", e => {
    mouseout();
});

function mousein(){
    console.log("mouse in");
    document.getElementById("img-accueil").style.border = "4px solid white";
}

function mouseout(){
    console.log("mouse out");
    document.getElementById("img-accueil").style.border = "2px solid white";
}