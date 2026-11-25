
const background = document.getElementById("backgroundHearts");
const replayButton = document.getElementById("replayButton");

function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");
    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (6 + Math.random() * 6) + "s";

    background.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

// Летающие сердечки
setInterval(createHeart, 650);

// Повтор анимации
replayButton.addEventListener("click", () => {
    const oldHeart = document.querySelector(".heart-outline");
    const oldContent = document.querySelector(".heart-content");
    const oldMessage = document.querySelector(".message");

    oldHeart.style.animation = "none";
    oldContent.style.animation = "none";
    oldMessage.style.animation = "none";

    void oldHeart.offsetWidth;

    oldHeart.style.animation = "";
    oldContent.style.animation = "";
    oldMessage.style.animation = "";

    for (let i = 0; i < 8; i++) {
        setTimeout(createHeart, i * 100);
    }
});
