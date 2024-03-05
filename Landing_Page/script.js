const sr = ScrollReveal({
    distance: "90px",
    duration: 3000,
});

sr.reveal('.home-data', {
    origin: 'top',
    delay: 400,
});

sr.reveal('.home-img', {
    origin: 'bottom',
    delay: 600,
});

var iconContainer = document.getElementById("icon-container");
var icon = document.getElementById("icon");


icon.onclick = function() {
    const iconElement = document.getElementById("icon");
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        iconElement.src = "assets/sun.png";      
    } else {
        iconElement.src = "assets/moon.png";
    }
    
};





