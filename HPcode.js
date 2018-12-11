import {hpapi} from "./harrypotter.js"

//The following function is inline on the harryPotter.html page. It wouldn't work otherwise for some reason.

//function muggleOrNot() {
   // var text;
   // var types = document.getElementById("myInput").value;
    
  //  switch(types){
   //     case "muggle":
  //          text="Muggles are tolerated.";
  //      break;
  //      case "wizard":
   //         text="Welcome fellow wizard.";
  //      break;
  //      case "witch":
  //          text="Welcome fellow witch.";   
  //  }
  //  document.getElementById("demo").innerHTML = text;
//};
//muggleOrNot();

//let house = `${hpapi.house}`;


/*var gryffindor = document.getElementById('test').innerHTML = hpapi.filter(e => e.house == "Gryffindor")
    .map(e => console.log('Gryffindor:'+e.name + ',' +'ancestry:'+e.ancestry));

gryffindor.textContent = hpapi.name + ',' + hpapi.ancestry
let gryfText = gryffindor.textContent
document.getElementById("hpFilter").innerHTML = gryfText;*/
//gryffindor.style.color = '#FF0000';
//let wand = hpapi.filter(a => a.wand.wood != '')
//    .map(a => console.log(a.name+'Wand wood:'+a.wand.wood))

const hpStuff = document.querySelector('#hpFilter')

const hpArray = (hpItem) => {
    let info = document.createElement("li")
    info.textContent = `${hpItem.name}, ${hpItem.ancestry}`
    
    let wand = hpapi.filter(a => a.wand.wood != '')
    .map(a => console.log(a.name+'Wand wood:'+a.wand.wood))
    
    let colorThreshold = "",
        liItem = document.querySelector('li')
    
    function changeColor(house){
        let color = "white";
        if (hpItem.house == "Gryffindor"){
            color = "tomato";
        } else if (hpItem.house =="Slytherin"){
            color = "lightgreen";
        } else if (hpItem.house =="Hufflepuff"){
            color = "gold";
        } else if (hpItem.house =="Ravenclaw"){
            color = "deepskyblue";
        }
    info.style.backgroundColor = color;
    }
    changeColor(colorThreshold);
    
    hpStuff.appendChild(info)
    console.log(hpItem.name)
};
hpapi.forEach(element =>hpArray(element))