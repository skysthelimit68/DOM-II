let blocks = document.querySelectorAll(".block");
let moveupCounter=0;
let distance;
let target;
let mouseDown = false;
let order;

blocks.forEach(elem => {
    elem.setAttribute("data-value", `${moveupCounter}`);
    elem.setAttribute("style",`order: ${moveupCounter};` )
    moveupCounter++;
})

moveupCounter = -1;

blocks.forEach(elem => {
    elem.addEventListener("mousedown", (event) => {
        order = event.target.getAttribute("data-value");
            console.log(order);
            mouseDown = true;
        //event.preventDefault();
        moveupCounter--;
        target = event.target;
        let time = 0;  
        distance = setInterval(function(){
            time+=5;          
            event.target.setAttribute("style", `transform:translateX(${time*5}px);order:${order};`);
            if(time >= 800) {
                clearInterval(distance);
                event.target.setAttribute("style", `transform:translateX(0px);order:${order};`);
            }
        },0);
    })
    elem.addEventListener("click", (event) => {
        if(mouseDown) {
            mouseDown = false;
            return;
        } else {
            event.target.setAttribute("style", `order: ${moveupCounter};`);
            event.target.setAttribute("data-value", `${moveupCounter}`);
            moveupCounter--;
        } 
    })    
})
    window.addEventListener("mouseup", (event) => {
        moveupCounter--;
        target.setAttribute("style", `transform:translateX(0px); order:${order};`);     
        clearInterval(distance);
        mouseDown = false;
    })