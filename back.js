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

navAnimation();


