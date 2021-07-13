// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const newCat = [...cats, name]
    return newCat
}

function prependCat(name){
    const litCat = [name, ...cats]
    return litCat
}

function removeLastCat(){
    const myCat = cats.slice(0, cats.length - 1)
    return myCat
}

function removeFirstCat(){
const oldCat = cats.slice(1)
return oldCat
}