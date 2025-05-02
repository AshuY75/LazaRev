function navAnimation()
{
    // Declare timeline globally so it's reused
let enterTl;
let leaveTl;

const nav = document.querySelector("nav");

nav.addEventListener('mouseenter', function () {
    // Kill leave timeline if running
    if (leaveTl) leaveTl.kill();

    // Clear previous enter timeline if exists
    if (enterTl) enterTl.kill();

    enterTl = gsap.timeline();

    enterTl.to("#nav-bottom2", {
        height: "21vh",
        duration: 0.3
    });

    enterTl.set(".nav-part2 h5", {
        display: "block"
    });

    enterTl.from(".nav-part2 h5 span", {
        opacity: 0,
        y: 25,
        stagger: {
            amount: 0.6
        },
        duration: 0.4
    });
});

nav.addEventListener('mouseleave', function () {
    // Kill enter timeline if running
    if (enterTl) enterTl.kill();

    // Clear previous leave timeline if exists
    if (leaveTl) leaveTl.kill();

    leaveTl = gsap.timeline();

    leaveTl.to(".nav-part2 h5 span", {
        opacity: 0,
        y: 25,
        stagger: {
            amount: 0.2
        },
        duration: 0.3
    });

    leaveTl.set(".nav-part2 h5", {
        display: "none"
    });

    leaveTl.to("#nav-bottom2", {
        height: 0,
        duration: 0.2
    });
});

}


function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem");

rightElems.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })   
     })
    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-30,
            y:dets.y - elem.getBoundingClientRect().y-100
        })


    })
});
}
function page3VideoAnimation(){
    var page3Center = document.querySelector(".page3-center");
var video = document.querySelector("#page3 video"); // Corrected selector

page3Center.addEventListener('click', function() {
    video.play();
    gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0 
    });
});
video.addEventListener('click',function(){
    video.pause(),
    gsap.to(video, {
        transform: "scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius:"30px" 
    });

})
}

function page4NavRemove(){
    document.addEventListener("DOMContentLoaded", function () {
        const page4 = document.querySelector(".page4");
        const nav = document.querySelector("nav");
      
        page4.addEventListener("mouseenter", function () {
          nav.classList.add("hidden");
        });
      
        page4.addEventListener("mouseleave", function () {
          nav.classList.remove("hidden");
        });
      });
      
}

navAnimation();
page2Animation();
page3VideoAnimation()
page4NavRemove();

// var sections = document.querySelectorAll(".sec-right");

// sections.forEach(function(elem){
//     console.log(elem.childNodes)
// })



 var sections = document.querySelectorAll(".sec-right");

sections.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        
        elem.childNodes[3].style.opacity=1
        elem.childNodes[3].play()
    });
    elem.addEventListener("mouseleave", function() {
        
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()
    });
});

