const botoFira = document.getElementById("botoFira");
const botoRaons = document.getElementById("botoRaons");
const popup = document.getElementById("popup");
const tancar = document.getElementById("tancar");
const raons = document.getElementById("raons");

botoFira.addEventListener("click", () => {
    popup.style.display = "flex";
});

tancar.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

botoRaons.addEventListener("click", () => {
    raons.classList.toggle("amagada");
});