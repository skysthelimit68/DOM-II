let blocks = document.querySelectorAll(".block");
let moveupCounter = 0;
let distance;
blocks.forEach(elem => {
    elem.addEventListener("click", (event) => {
        event.target.setAttribute("style", `order: ${moveupCounter};`);
        moveupCounter--;
    })
    elem.addEventListener("mousedown", (event) => {
        if(distance){
            clearInterval(distance);
        }
        let time = 0;  
        distance = setInterval(function(){
            time++;
            event.target.setAttribute("style", `transform:translateX(${time}px)`);
            if(time >= 800) {
                clearInterval(distance);
                event.target.setAttribute("style", "transform:translateX(0px)");
            }
        },0);
    })
    elem.addEventListener("mouseup", (event) => {
             clearInterval(distance);
    })
})