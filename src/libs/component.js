import {now} from 'lodash'
import picRamen from '../assets/ramen.jpg'
import vanillaTilt from 'vanilla-tilt'

export const appendHello = (dom) => {
    const el = document.createElement('div')
    el.innerText = 'Hello' + ' Ramen'
    dom.appendChild(el)
}

export const appendPic = (dom) => {
    const el = document.createElement("img");
    el.src = picRamen;
    el.style.width = '40%'
    el.style.borderRadius = '20%'
    dom.appendChild(el)
}

export const appendDate = (dom) => {
    const el = document.createElement('div')
    el.innerText = now()
    dom.appendChild(el)
}

export const appendCool = (dom) => {
    const el = document.createElement('div')
    el.style.width = '75%'
    el.style.marginLeft = 'auto'
    el.style.marginRight = 'auto'
    appendPic(el)
    vanillaTilt.init(el, {
        max: 5,
        speed: 400,
        perspective: 500,
        reverse: false,
        startX: 10,
        startY: 20,
        transition: true,
    })
    dom.appendChild(el)
}
