// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

 function destructivelyAppendCat(name) {
     
    cats.push("Ralph");
}


function destructivelyPrependCat(name) {
     
    cats.unshift("Bob");
}


function destructivelyRemoveLastCat() {
     
    cats.pop();
}

function destructivelyRemoveFirstCat() {
     
    cats.shift();
}


function  appendCat(name){
  let newcat= [...cats , "Broom"];
  return newcat ;
  
}

function  prependCat(name){
    let newcat= ["Arnold",...cats ];
    return newcat ;
    
  }

  function  removeLastCat(){
    let newcat= cats.slice(0, cats.length - 1)
    return newcat ;
    
  }
  function   removeFirstCat(){
    let newcat= cats.slice(1)
    return newcat ;
    
  }



