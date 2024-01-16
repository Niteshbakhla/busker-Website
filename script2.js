const hero = document.querySelector(".hero2 img").offsetWidth;
const windowWidth = window.innerWidth;
const amountToScroll = hero - windowWidth;
const overlay = document.querySelectorAll(".overlay");
const textRight = document.querySelectorAll(".textRight h1");
const bgImage = document.querySelector(".hero4");




let tl = gsap.timeline({
    ease: Power2,
})

tl.to('.above', {
    y: "-100%",
    delay: 0.5,
    stagger: 0.2,
    duration: 1
});

tl.to('.down h1', {
    y: 0,
    duration: 0.9,
    stagger: 0.6
})

tl.to('nav', {
    y: '0',
    duration: 0.9
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        scroller: 'body',
        // markers:true,
        start: '50% 45%',
        end: '50% 10%',
        scrub: 2,
    }
})

tl2.to(".one", {
    x: "-30px"
}, "a")


tl2.to('.two', {
    x: "30px"
}, "a")

gsap.to(".hero2 img", {
    x: "-100%",
    scrollTrigger: {
        trigger: ".hero2",
        scroller: "body",
        start: "5% 0",
        end: "top -500%",
        scrub: 10,
        // markers:true,
        pin: true,
    }
});

let tm = gsap.timeline({
    scrollTrigger: {
        trigger: "hero2",
        scroller: "body",
        start: "90% 40%",
        end: "50% 10%",
        scrub: 4
    }
})

tm.to(".hero .down", {
    y: "80px",
})

gsap.to(".hero3 .para p", {
    scale: "1",
    opacity: "1",
    scrollTrigger: {
        trigger: ".hero3",
        scroller: "body",
        start: "50% 80%",
        end: "50%, 80%",
        scrub: 5,
    }
})

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero3",
        scroller: "body",
        start: "top 0",
        end: "top -800%",
        // markers: true,
        scrub: 0.3,
        pin: true,
    }
});


tl4.to(".hero3 .box", {
    transform: "translate(-50%, -50%)",
}, 'b')

tl4.to(".hero3 .btn", {
    opacity: 1
}, 'b')


tl4.to(".hero3 .image1", {
    transform: "translate(-50%, -250%)"
})


tl4.to(".hero3 .image2", {
    transform: "translate(-50%, -250%)"
}, "a")

tl4.to(".hero3 .para p", {
    opacity: 0
}, 'a')

const image1 = "url(./Assest/images/buskerbgImage1.jpg)";
const image2 = "url(./Assest/images/buskerbgImage2.jpg)";
const image3 = "url(./Assest/images/buskerbgImage3.jpg)";


textRight.forEach(text => {
    text.addEventListener("mouseover", (e) => {
        const className = e.target.className;
        if (className === "bg1") {
            bgImage.style.backgroundImage = image2
        } else if (className === "bg2") {
            bgImage.style.backgroundImage = image3
        }
        else if (className === "bg3") {
            bgImage.style.backgroundImage = image1
        }

        text.style.opacity = "1";
        overlay.forEach(over => {
            gsap.to(over, {
                transform: "translateY(-100%)",
                ease: Power4,
                duration: 1.3
            })
        })



    });

    text.addEventListener("mouseleave", () => {
        text.style.opacity = ".6";
        overlay.forEach(over => {
            gsap.to(over, {
                transform: "translateY(0%)"
            })
        })

    })
})


const card = document.querySelectorAll(".card");
const underline = document.querySelectorAll(".underline");

card.forEach(cards => {
    cards.addEventListener("mouseover", (e) => {
        cards.style.cursor = "pointer"

        if (e.target.id === "musicCardOne") {
            gsap.to("#musicCardOne .underline",{
                textDecoration:"underline"
            })
            let time = gsap.timeline({

            });
            time.to(".firstContainer #card1", {
                rotate: "7deg",
                duration: 0.02
            })
                .to(".firstContainer #card2", {
                    rotate: "7deg",
                    visibility: "visible",
                    duration: 0.3
                })
                .to(".firstContainer #card3", {
                    rotate: "-7deg",
                    visibility: "visible",
                    duration: 0.5
                })

                .to(".firstContainer #card3", {
                    rotate: "-7deg"
                })
        }
        else if (e.target.id === "musicCardTwo") {

            gsap.to("#musicCardTwo .underline",{
                textDecoration:"underline"
            })
            let time = gsap.timeline({});
            time.to(".secondContainer #card1", {
                rotate: "7deg",
                duration: 0.02
            })
                .to(".secondContainer #card2", {
                    rotate: "7deg",
                    visibility: "visible",
                    duration: 0.3
                })
                .to(".secondContainer #card3", {
                    rotate: "-7deg",
                    visibility: "visible",
                    duration: 0.5
                })

                .to(".firstContainer #card3", {
                    rotate: "-7deg"
                })
        }
        else if (e.target.id === "musicCardThree") {
            gsap.to("#musicCardThree .underline",{
                textDecoration:"underline"
            })
            let time = gsap.timeline({});
            time.to(".thirdContainer #card1", {
                rotate: "7deg",
                duration: 0.02
            })
                .to(".thirdContainer #card2", {
                    rotate: "7deg",
                    visibility: "visible",
                    duration: 0.3
                })
                .to(".thirdContainer #card3", {
                    rotate: "-7deg",
                    visibility: "visible",
                    duration: 0.5
                })

                .to(".firstContainer #card3", {
                    rotate: "-7deg"
                })
        }
    })

    cards.addEventListener("mouseleave", () => {
        gsap.to(".underline",{
            textDecoration:"none"
        })
        let time = gsap.timeline({});
        time.to("#card1", {
            rotate: "0deg",
            duration: 0.02
        })
            .to("#card2", {
                rotate: "-8deg",
                visibility: "hidden",
                duration: 0.3
            })
            .to("#card3", {
                rotate: "8deg",
                visibility: "hidden",
                duration: 0.5
            })

            .to("#card3", {
                rotate: "8deg"
            })
    })
})







