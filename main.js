let active = document.querySelectorAll(".header li a");
active.forEach (function (a) {
    a.onclick = function () {
        for (let i = 0; i < active.length; i++) {
            active[i].classList.remove("active");            
        };
        this.classList.add("active");
    }
})