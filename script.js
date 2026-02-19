function openSurprise() {
    document.getElementById("surprise").classList.remove("hidden");
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

function blowCandles() {
    const flames = document.querySelectorAll(".flame");

    flames.forEach(flame => {
        flame.style.display = "none";
    });

    document.getElementById("wishMessage").classList.remove("hidden");

    createHearts();
}

function createHearts() {
    const container = document.querySelector(".hearts-container");

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("span");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.animationDuration = Math.random() * 5 + 5 + "s";
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
}
