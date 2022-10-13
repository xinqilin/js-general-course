import "./main.css"

import {hello, picture, showTime} from "./libs";

document.body.appendChild(hello())
document.body.appendChild(showTime())

//
// const indexJs = require("./libs/index")
// const errorJs = require("./libs/error")

// console.log(document)
// document.body.appendChild(indexJs.hello())
// document.body.appendChild(indexJs.showTime())
// document.body.appendChild(picture())
