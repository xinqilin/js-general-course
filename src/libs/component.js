import { now } from 'lodash'
import picRamen from '../assets/ramen.jpg'

export function hello() {
    const el = document.createElement('div')
    el.innerText = 'hello'
    return el
}

export function ramen() {
    const el = document.createElement("img");
    el.src = picRamen;
    return el;
}

export function date() {
    const el = document.createElement('div')
    el.innerText = now()
    return el
}
