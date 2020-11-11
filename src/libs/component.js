import testImage from "../cat.jpg";
import testSvg from "../kimono.svg";

export function hello() {
    const element = document.createElement("div");
    element.innerHTML = "hello";
    element.classList.add("hello");
    return element;
}

export function buildImage() {
    const element = document.createElement("img");
    element.src = testImage;
    element.classList.add("image");
    return element;
}

export function buildSvg() {
    const element = document.createElement("img");
    element.src = testSvg;
    element.classList.add("image");
    return element;
}

export function footer() {
    const element = document.createElement("div");
    element.innerHTML = "footer";
    return element;
}