const button = document.getElementById("randomButton");
const yesButton = document.getElementById("yesButton");
const container = document.querySelector(".container");

// Déplace le bouton "Non" aléatoirement
button.addEventListener("click", () => {
    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

// Affiche une pluie de cœurs quand on clique sur "Oui"
yesButton.addEventListener("click", function() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);

        let x = Math.random() * window.innerWidth;
        let duration = Math.random() * 2 + 1;

        heart.style.left = x + "px";
        heart.style.animationDuration = duration + "s";

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
});

