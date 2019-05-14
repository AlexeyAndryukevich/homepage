document.getElementById("french-song").addEventListener("click", function() {
    this.childNodes[3].play();
});

function switchToColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    try {
        document.querySelectorAll(".page").forEach(function(page) {
            page.style.borderColor = "rgb("+r+", "+g+", "+b+")";
        });
        document.querySelectorAll("main").forEach(function(main) {
            main.style.backgroundColor = "rgba("+r+", "+g+", "+b+", 0.7)";
        });
    } catch (error) {}
}

document.getElementById("color-switcher").addEventListener("mouseover", switchToColor.bind(this));
document.getElementById("color-switcher").addEventListener("touchstart", switchToColor.bind(this));
