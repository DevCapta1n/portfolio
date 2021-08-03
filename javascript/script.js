/** Display the animation on the landing page.
 */
let display = false;
const first = new Image();
const second = new Image();
const third = new Image();
const fourth = new Image();
const fifth = new Image();
const sixth = new Image();
const seventh = new Image();

first.src = "images/shroomAniBase.png";
second.src = "images/shroomAni1.png";
third.src = "images/shroomAni2.png";
fourth.src = "images/shroomAni3primordium.png";
fifth.src = "images/shroomAni4.png";
sixth.src = "images/shroomAni5.png";
seventh.src = "images/shroomAni6.png";

function displayCanvas() {
    let map = document.getElementById("animation");
    var context = map.getContext("2d");
    context.fillStyle = "#000000";
    context.fillRect(0,0,1200,800);
    return context;
}

function animate(context, images) {
    context.drawImage(images[0],0,0);
    const lastOne = images.shift();
    let cycledImages = [...images,lastOne];
    return [context, cycledImages];
}

function growLoop() {
    [context,imageArray] = animate(context, imageArray);
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < 1000);
    window.requestAnimationFrame(growLoop);
}

let context = displayCanvas();
let imageArray = [first, second, third, fourth, fifth, sixth, seventh]

window.addEventListener('load', function() {
    //context.drawImage(seventh,0,0)
    growLoop()
});

$("#statify").on("click", function() {
    let stats = window.open('https://statify-winford.herokuapp.com/', '_blank');
    if (stats) {
        //Browser has allowed it to be opened
        stats.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
})

$("#resume").on("click", function() {
    let resume = window.open('https://resume.creddle.io/resume/egjofvsdlw6', '_blank');
    if (resume) {
        //Browser has allowed it to be opened
        resume.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
})

$("#VVV").on("click", function() {
    let vvv = window.open('https://jackwinford42.github.io/Vivien-Versus-Viruses/vivien.html', '_blank');
    if (vvv) {
        //Browser has allowed it to be opened
        vvv.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
})

$("#home-link").on("click", function() {
    document.getElementById("home").scrollIntoView({behavior: "smooth"});
})

$("#contact-link").on("click", function() {
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
})

