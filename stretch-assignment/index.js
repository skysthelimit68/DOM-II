let blocks = document.querySelectorAll(".block");
let moveupCounter = -1;
let distance;
let target;
let mouseDown = false;

blocks.forEach(elem => {
    elem.addEventListener("mousedown", (event) => {
        mouseDown = true;
        //event.preventDefault();
        moveupCounter--;
        target = event.target;
        let time = 0;  
        distance = setInterval(function(){
            time+=5;
            event.target.setAttribute("style", `transform:translateX(${time*5}px);`);
            if(time >= 800) {
                clearInterval(distance);
                event.target.setAttribute("style", `transform:translateX(0px);`);
            }
        },0);
    })
    elem.addEventListener("click", (event) => {
        if(mouseDown) {
            mouseDown = false;
            return;
        } else {
            event.target.setAttribute("style", `order: ${moveupCounter};`);
            moveupCounter--;
        }
        
    })    
})
    window.addEventListener("mouseup", (event) => {
        moveupCounter--;
        target.setAttribute("style", `transform:translateX(0px);`);     
        clearInterval(distance);
        mouseDown = false;
    })