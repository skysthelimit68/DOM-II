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

