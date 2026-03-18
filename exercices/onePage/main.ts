import "@/style.css";
import "./style.css";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const titleTimeline = gsap.timeline();

titleTimeline
    .from('.title', { xPercent: 110, opacity: 0, duration: 1 })
    .from('header .description', { xPercent: 130, opacity: 0, duration: 1 }, "-=0.5"); // commence 0.5s avant la fin du titre

titleTimeline.play();

const aboutTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

aboutTimeline
    .from('#about h2', { yPercent: 50, opacity: 0, duration: 1 })
    .from('#about .description', { x: -100, opacity: 0, duration: 1 }, "-=0.5")
    .from('#about img', { x: 100, opacity: 0, duration: 1 }, "-=0.3");

const serumTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#about_serum",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

serumTimeline
    .from('#about_serum h2', { yPercent: 50, opacity: 0, duration: 1 })
    .from('#about_serum .text-left p', { x: -100, opacity: 0, duration: 1 }, "-=0.5");

gsap.to(".triangle", {
    rotation: 360,
    duration: 10,
    repeat: -1,

    ease: "linear"
});

gsap.to(".circle ", {
    rotation: -360,
    duration: 10,
    repeat: -1,
    ease: "linear"
});