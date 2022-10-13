import {now} from 'lodash'

export function hello() {
    const el = document.createElement("body")
    el.innerText = 'hello'
    console.log('index')
    return el
}

export function showTime() {
    const el = document.createElement("div")
    el.innerText = now()
    return el
}


// export function picture(){
//     const el = document.createElement("img")
//     el.src='https://static.104.com.tw/logo/104logo_o_180x26.svg'
//     return el
// }