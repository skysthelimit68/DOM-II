let blocks = document.querySelectorAll(".block");
let moveupCounter = -1;
let distance;

blocks.forEach(elem => {
    elem.addEventListener("mousedown", (event) => {
        let time = 0;  
        distance = setInterval(function(){
            time++;
            event.target.setAttribute("style", `transform:translateX(${time}px)`);
            if(time >= 800) {
                clearInterval(distance);
                event.target.setAttribute("style", `transform:translateX(0px); order:${moveupCounter}`);
            }
        },0);
    })
    elem.addEventListener("click", (event) => {
        event.target.setAttribute("style", `order: ${moveupCounter};`);
        moveupCounter--;
    })
    
    elem.addEventListener("mouseup", (event) => {
        event.preventDefault()
        event.target.setAttribute("style", `transform:translateX(0px); order:${moveupCounter}`);     
        clearInterval(distance);
    })
})