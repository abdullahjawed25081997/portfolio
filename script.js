function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// for Typewriter effect

const texts = [
    "DEVELOPER",
    "YOUTUBER",
    "DESIGNER"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;

function viewCV() {
    const link = document.createElement('a');
    link.href = 'images/CV_new_format.jpg'; // Correct image path
    link.target = '_blank'; // Open the image in a new tab
    link.click();
}

function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform  = "translateY(0px)";
}
function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform  = "translateY(-500px)";
}