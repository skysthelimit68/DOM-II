// Your code goes here

let destinations = document.querySelectorAll(".destination p");
destinations.forEach(elem => {
    elem.addEventListener("mouseover", (event) => {
        event.target.style.color = "red";
    });
    elem.addEventListener("mouseleave", (event) => {
        event.target.style.color = "black";
    })
})

window.addEventListener("load", (event) => {
    alert("Welcom to Fun Bus");
})

let allinputs = Array.from(document.querySelectorAll("form input")).concat(Array.from(document.querySelectorAll("form select"))).concat(Array.from(document.querySelectorAll("form textarea")));
allinputs.forEach(elem => {
    elem.addEventListener("focus", (event) => {
        event.target.setAttribute("style", "background-color:yellow;");
    });
    elem.addEventListener("blur", (event) => {
        event.target.setAttribute("style","background-color: white;");
    });
    elem.addEventListener("select", (event) => {
        event.target.setAttribute("style", "font-weight:900; text-decoration:underline; font-style: italic;");
    });
})

let img = document.querySelector("img");
img.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert("This is copyrighted photograph. Do not copy.");
})


let logo = document.querySelector(".logo-heading");
TweenLite.set(logo, {transformPerspective:1000});
logo.addEventListener("mousedown", (event) => {
    //TweenLite.to(".logo-heading", 2, {rotationX:45});
    TweenLite.to(event.target, 2, {rotationX:45, scaleX:0.8, z:-300});
})
logo.addEventListener("mouseup", (event) => {
    TweenLite.to(event.target, 2, {rotationX:-45, scaleX:0.8, z:300});

})

let navItems = document.querySelectorAll("nav a");
navItems.forEach( elem => {
    elem.addEventListener("click", (event) => {        
        navAnimate(event.target);})
    elem.addEventListener("click", (event) => {
        event.preventDefault();
    })
})

function navAnimate(eTarget) {
    TweenLite.fromTo(eTarget, 2, {rotation: 0},{rotation:360, transformOrigin:"left top"});    
}

let contentDestination = document.querySelector(".content-destination");
contentDestination.addEventListener("mouseover", (event) => {
    event.target.parentNode.style.border = "3px solid blue"; 
    event.target.parentNode.style.padding = "10px"; 
})
contentDestination.addEventListener("mouseout", (event) => {
    event.target.parentNode.style.border = "none";
    event.target.parentNode.style.padding = "0";
})

let destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener("mouseover", (event) => {
    event.stopPropagation();
    event.target.style = "opacity: 0.5";
})
destinationImg.addEventListener("mouseout", (event) => {
    event.stopPropagation();
    event.target.style = "opacity:1";
})


let contentItems = document.querySelectorAll(".content-section div");
function setID(arrayLike) {
    let array = Array.from(arrayLike);
    for(let i = 0; i < array.length; i++ ) {
        array[i].setAttribute("id", "item" + i);
    }
}
setID(contentItems);
let newParent;

contentItems.forEach( elem => {
    elem.addEventListener('drag', (event) => {
        event.dataTransfer.setData("text/html", event.target);
    });
    elem.addEventListener('drop', (event) => {
        event.preventDefault();
        let targetDiv = event.dataTransfer.getData('text/html');
        newParent.prepend(event.target);
    })
    elem.addEventListener("dragover", (event) => {
        event.preventDefault();
        newParent = event.target.parentNode.parentNode;
        console.log(newParent);
    })
})
