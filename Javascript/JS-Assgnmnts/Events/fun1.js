function changeColor1() {
    document.getElementById('mover').style.backgroundColor='red'
}

function changeColor2() {
    document.getElementById('mout').style.backgroundColor="yellow"
}

function changeColor3() {
    document.getElementById('onclk').style.backgroundColor="green"
}

function changeColor4() {
    document.getElementById('ondblclk').style.backgroundColor="blue"
}


function changeBg() {
    document.getElementById('onfoc').style.backgroundColor="aqua"
}


/* function lowerToUpper() {
    let text= document.getElementById('onblr').value =text.toUpperCase();
} */


function lowerToUpper() {
    let text=document.getElementById('onblr').value
    document.getElementById('onblr').value= text.toUpperCase();
}