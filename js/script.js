gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effect: true
})


const tl = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        trigger: ".brand__1",
        start: "50% 50%",
        endTrigger: ".brand__1",
        end: "bottom 50%",
    },
});

tl.to(".brand__1", {
    rotateZ: 360,
});

// FADE UP EFFECT ON OPEN WINDOW
const fadeOpen = gsap.timeline({ defaults: { duration: .3 } });
fadeOpen.from(".nav__logo", { opacity: 0, y: -100 })
    .from(".nav__link-fade1", { opacity: 0, y: -100 })
    .from(".nav__link-fade2", { opacity: 0, y: -100 })
    .from(".nav__link-fade3", { opacity: 0, y: -100 })
    .from(".nav__link-fade4", { opacity: 0, y: -100 })
    .from(".nav__btn", { opacity: 0, y: -100 })


const fadeOpen2 = gsap.timeline({ defaults: { duration: .3 } });
fadeOpen2.from(".start__title", { opacity: 0, x: -100 })
    .from(".start__p", { opacity: 0, x: -100 })
    .from(".header__img1", { opacity: 0, x: -100 })
    .from(".header__img2", { opacity: 0, x: -100 })


const fadeOpen3 = gsap.timeline({ defaults: { duration: 2 } });
fadeOpen3.from(".start__child2", { opacity: 0, x: 100, rotate: 360 })



// FADE UP ON SCROLL EFFECT
gsap.utils.toArray('.animate-up').forEach((el, index) => {
    let fade = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none reverse",
        }
    })

    fade
        .set(el, { transformOrigin: 'center center' })
        .fromTo(el, { opacity: 0, scale: 0.8, y: "+=200" }, { opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false })
})