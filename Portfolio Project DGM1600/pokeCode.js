/*import {hpapi} from "./harrypotter.js"
console.log(hpapi);*/

import {pokemon} from "./poke26.js"
console.log(pokemon);

const pokeContainer = document.querySelector('#container')



const cardCreator = (poke) => {
    let card = document.createElement('div')
    card.className = 'card'
    card.addEventListener('click', function(){
        card.classList.toggle('is-flipped');
    })
    let frontFig = document.createElement('figure')
    frontFig.className = 'card_face card_face--front'
    console.log(`${poke.id}${poke.ename}.png`)
    
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    cap.textContent = poke.ename
    img.src = `/img26/${poke.id}${poke.ename}.png`
    frontFig.appendChild(img)
    frontFig.appendChild(cap)
    
    let backFig = document.createElement('figure')
    backFig.className = 'card_face card_face--back'
    let capt = document.createElement('figcaption')
    capt.className = 'backFigCap'
    let imag = document.createElement('img')
    capt.textContent = poke.jname
    imag.src = './pokecardback.png'
    
    let attack = document.createElement('p')
    attack.textContent = `Attack: ${poke.base.Attack}`
    console.log(`Attack: ${poke.base.Attack}`)
    
    let defense = document.createElement('p')
    defense.textContent = `Defense: ${poke.base.Defense}`
    console.log(`Defense: ${poke.base.Defense}`)
    
    let hp = document.createElement('p')
    hp.textContent = `HP: ${poke.base.HP}`
    console.log(`HP: ${poke.base.HP}`)
    
    let spAtk = document.createElement('p')
    spAtk.textContent = `Special Attack:${poke.base["Sp.Atk"]}`
    console.log(`Special Attack:${poke.base["Sp.Atk"]}`)
    
    let spDef = document.createElement('p')
    spDef.textContent = `Special Defense:${poke.base["Sp.Def"]}`
    console.log(`Special Defense:${poke.base["Sp.Def"]}`)
    
    backFig.appendChild(capt)
    backFig.appendChild(imag)
    backFig.appendChild(attack)
    backFig.appendChild(defense)
    backFig.appendChild(hp)
    backFig.appendChild(spAtk)
    backFig.appendChild(spDef)
    
    card.appendChild(frontFig)
    card.appendChild(backFig)
    pokeContainer.appendChild(card)
   };

pokemon.forEach(element => cardCreator(element))

let newCard = {
    "base": {
            "Attack": 75, 
            "Defense": 85, 
            "HP": 50, 
            "Sp.Atk": 20, 
            "Sp.Def": 30, 
            "Speed": 40
        }, 
        "cname": "\u7a7f\u5c71\u9f20", 
        "ename": "Sandshrew", 
        "id": "027", 
        "jname": "\u30b5\u30f3\u30c9", 
}
let createCard = document.querySelector('#createCard') 
createCard.addEventListener('click', function(){
    cardCreator(newCard)
})
/*var card = document.querySelector('.card');
card.addEventListener('click',function(){
    card.classList.toggle('is-flipped');
});*/