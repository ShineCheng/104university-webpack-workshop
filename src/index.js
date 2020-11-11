import "./style.css";
import { hello, buildImage, buildSvg } from "./libs/component";
// const {hello} = require("./libs/component.js");
// import $ from "jquery";

document.body.appendChild(hello());
document.body.appendChild(buildImage());
document.body.appendChild(buildSvg());

// var count = 0;

// $("body").append("<button class='btn'>+</button>");
// $(".btn").on("click", () => {
//     $("body").append(count);
//     count++;
// })

// if (module.hot) {
//     module.hot.accept("./libs/component.js", function() {
//         document.body.appendChild(hello());
//     });
// }