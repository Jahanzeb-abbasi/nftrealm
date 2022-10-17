const cards = document.querySelectorAll('.card')
const cardsbtn = document.querySelectorAll('.card-btn')
let btns = document.querySelectorAll('.card-btn')
let masterbtn = document.querySelector('.card-btn')

if (window.innerWidth <= 768) {
    let removeFixed = document.querySelectorAll('.card.fixed')
    let activebtn = document.querySelector('.active-btn')
    removeFixed[0].classList.remove('fixed')
    activebtn.classList.remove('active-btn')
}

if (window.innerWidth > 768) {
    for (const card of cards) {
        card.addEventListener('click', () => {
            card.classList.add('active')
            card.addEventListener('mouseleave', () => {
                card.classList.remove('active')
            })
        })
    }
}


const links = document.querySelectorAll('a')
const buttons = document.querySelectorAll('button')
const popup = document.querySelector('.popup-container')

for (let link of links) {
    link.addEventListener('click', () => {
        popup.showModal();
        setTimeout(() => {
            popup.close();
        },3000)
    })
}

for (let btn of buttons) {
    btn.addEventListener('click', () => {
        popup.showModal();
        setTimeout(() => {
            popup.close();
        },3000)
    })
}


