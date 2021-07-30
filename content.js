
let float = document.createElement("div")
float.classList.add("float")


chrome.storage.sync.get("top", ({ top }) => {  
    float.style.top =  top;
});

let drawer = document.createElement("div")
drawer.classList.add("drawer")

let icon = document.createElement("p")
icon.classList.add("icon")
icon.innerText = "⚡"
float.appendChild(icon)
drawer.prepend(float)

document.body.prepend(drawer)

let open = () => {
    if (drawer.style.right === "0px") {
        drawer.style.right = "-300px"
    }
    else {
        drawer.style.right = "0px"
    }
}

let y

function mouseDown(e) {
    e.stopPropagation();
    window.addEventListener('mousemove', mouseMove)
    y = e.clientY
}

let lastY

function mouseMove(e) {
    let dy = (float.offsetTop + (e.clientY - y))
    lastY = dy
    float.style.top = lastY + "px"
    y = e.clientY
}

function mouseUp() {
    chrome.storage.sync.set({ top: `${lastY}px` });
    window.removeEventListener('mousemove', mouseMove)
}

float.addEventListener("click", open)
float.addEventListener('mousedown', mouseDown)
window.addEventListener('mouseup', mouseUp)

let content = document.createElement("div")
content.classList.add("content")
let title = document.createElement("h2")
title.innerText = "Salesbolt"
content.appendChild(title);
drawer.appendChild(content)