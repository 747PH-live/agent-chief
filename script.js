// ===============================
// AGENT CHIEF LANDING PAGE
// script.js
// ===============================

// Sticky navbar
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,.85)";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    } else {
        nav.style.background = "rgba(0,0,0,.45)";
        nav.style.boxShadow = "none";
    }
});

// Reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .stat, .cta").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s";
    observer.observe(el);
});

// Animated Counters
function animateCounter(element, target, suffix = "") {

    let current = 0;

    const increment = target / 80;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.innerHTML = Math.floor(current) + suffix;

    }, 20);

}

window.addEventListener("load", () => {

    const stats = document.querySelectorAll(".stat h2");

    if (stats.length >= 3) {

        animateCounter(stats[0], 24, "/7");

        animateCounter(stats[1], 100, "%");

        // Pangatlong stat ay text na "Fast", kaya hindi natin gagalawin
    }

});

// Smooth scroll para sa internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Scroll To Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "100px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#22c55e";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

console.log("AGENT CHIEF Landing Page Loaded Successfully");
function spinWheel(){

    let wheel = document.getElementById("wheel");

    let randomDegree = Math.floor(Math.random() * 3600) + 1800;

    wheel.style.transform = "rotate(" + randomDegree + "deg)";

    setTimeout(function(){

        let prizes = [
            "₱10",
            "₱20",
            "₱50",
            "₱100",
            "₱150"
        ];

        let win = prizes[Math.floor(Math.random()*prizes.length)];

        alert("Congratulations! You won " + win);

    },4000);

}
