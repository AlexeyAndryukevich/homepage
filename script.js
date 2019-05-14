document.getElementById("french-song").addEventListener("click", function() {
    this.childNodes[3].play();
});

function switchToColor(r,g,b) {
    try {
        document.querySelectorAll(".page").forEach(function(page) {
            page.style.borderColor = "rgb("+r+", "+g+", "+b+")";
        });
        document.querySelectorAll("main").forEach(function(main) {
            main.style.backgroundColor = "rgba("+r+", "+g+", "+b+", 0.7)";
        });
    } catch (error) {}
}

function setRandomColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var elem = document.getElementById("color-switcher");
    switchToColor.bind(elem, r,g,b);
}

function setRandomColor(){
    return Math.floor(Math.random() * 255);
   
}

//хотел сделать по маусин, но не успел
//document.getElementById("color-switcher").addEventListener("click", setRandomColor());
//document.getElementById("color-switcher").addEventListener("click", switchToColor.bind(this, 15,15,15));
document.getElementById("color-switcher").addEventListener("click", switchToColor.bind(this, setRandomColor(),setRandomColor(),setRandomColor()));
//попал в замыкание, но не успею переделать
//Сори за мусор, решил оставить попытки