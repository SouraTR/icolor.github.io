
// Operation
let image = $("#cover")

// Change Color Variant
function imgChanger(link) {
    $("#phone").attr("src", link);
}

// Sliders
let hue = document.getElementById("hue")
let saturation = document.getElementById("saturation")
let lightness = document.getElementById("lightness")

let hueOut = document.getElementById("hueOut")
let saturationOut = document.getElementById("saturationOut")
let lightnessOut = document.getElementById("lightnessOut")


hue.oninput = function () {
    hueOut.innerHTML = this.value;
    image.css("--hue-rotate", this.value + "deg")
}
saturation.oninput = function () {
    saturationOut.innerHTML = this.value;
    image.css("--saturate", this.value + "%")
}
lightness.oninput = function () {
    lightnessOut.innerHTML = this.value;
    image.css("--brightness", this.value + "%")
}

