let div = document.getElementById("div");

div.addEventListener("mouseover", () => {
    div.style.backgroundImage = `url("pic2.jpg")`
})

div.addEventListener("mouseleave", () => {
    div.style.backgroundImage = `url("pic.jpg")`
})

