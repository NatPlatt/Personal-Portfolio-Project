import {pokemon} from "./poke26.js"
console.log(pokemon);

const pokeContainer = document.querySelector('#container')
pokemon.forEach(poke =>{
    let card = document.createElement('div')
    let fig = document.createElement('figure')
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    let backDiv = document.createElement('div')
    backDiv.textContent = poke.jname
    cap.textContent = poke.ename
    img.src = "/img26/${poke.id}${poke.ename}.png"
    fig.appendChild(img)
    fig.appendChild(cap)
    card.appendChild(fig)
    card.appendChild(backDiv)
    pokeContainer.appendChild(card)
    card.addEventListener('click',function(){
        card.classList.toggle('is-flipped');
    });
});
/*var card = document.querySelector('.card');
card.addEventListener('mouseover',function(){
    card.classList.toggle('is-flipped');
});*/