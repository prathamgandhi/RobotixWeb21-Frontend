
var currentScrollPos;
var previousScrollPos = 0;

function scroll() {
    currentScrollPos = window.scrollY;


    if (currentScrollPos > previousScrollPos) {
        document.getElementById("navbar").style.top = "-65px";
    }

    else {

        if (currentScrollPos === 0)
            document.getElementById("navbar").style.top = "5px";

        else
            document.getElementById("navbar").style.top = "0";
    }
   
    previousScrollPos = currentScrollPos;

}


window.addEventListener('scroll', scroll);

window.onload = function () {

    document.getElementById("navbar").addEventListener("mouseenter", () => {
        console.log("mouseenter")
        window.removeEventListener("scroll", scroll);
    })

    document.getElementById("navbar").addEventListener("mouseleave", () => {
        console.log("mouseenter")
        window.addEventListener("scroll", scroll);
    })

    document.getElementById("overlay").addEventListener("mouseenter", () => {
        console.log("overlay mouseenter")
        window.removeEventListener("scroll", scroll);
    })

}