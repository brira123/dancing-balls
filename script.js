function changeSize() {
    let circle = document.querySelector("div");

    let newSize = parseInt(Math.random() * 500);

    console.log(newSize);

    circle.style.height = newSize + "px";
    circle.style.width = newSize + "px";
    circle.style.border = "10px solid purple";
    circle.style["font-size"] = (newSize / 100) + "em";
    circle.style.color = "purple";

    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);

    circle.style["background-color"] = "rgb(" + red + "," + green + "," + blue + ")"
}
