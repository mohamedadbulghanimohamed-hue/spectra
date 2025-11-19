let active = document.querySelectorAll(".header li a");
active.forEach (function (a) {
    a.onclick = function () {
        for (let i = 0; i < active.length; i++) {
            active[i].classList.remove("active");            
        };
        this.classList.add("active");
    };
});
window.addEventListener("scroll", function () {
    if (window.scrollY >= 7) {
    document.querySelector(".header").classList.add("ef");
    document.querySelector(".landing .logo").classList.add("move");
    document.querySelector(".header img").style = "opacity: 1; transform: translateY(0px);";
    }else {
        document.querySelector(".header").classList.remove("ef");     
        document.querySelector(".landing .logo").classList.remove("move");
        document.querySelector(".header img").style = "opacity: 0; transform: translateY(100px);";
    }
});
const cards = document.querySelectorAll(".info .card");
const observer = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            entries[i].target.classList.add("up");
        }else {
            entries[i].target.classList.remove("up");
        }
    };
});
cards.forEach(card => {
    observer.observe(card);
});

const h2 = document.querySelectorAll("h2");
const observer2 = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            entries[i].target.classList.add("right");
        }else {
            entries[i].target.classList.remove("right");
        }
    };
});
h2.forEach(h2 => {
    observer2.observe(h2);
});
