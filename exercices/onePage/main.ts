import "@/style.css";
import "./style.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import gsap from "gsap";
import Swiper from "swiper";

import {ScrollTrigger} from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {Autoplay, Navigation, Pagination} from 'swiper/modules';




gsap.registerPlugin(ScrollTrigger, SplitText)

const splitTitle = new SplitText("header .title, header .description", {
    type: "chars"
});

const titleTimeline = gsap.timeline();

titleTimeline.from(splitTitle.chars, {
    y: 50,
    opacity: 0,
    stagger: 0.05,
    duration: 0.8,
    ease: "back.out(1.7)"
});


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
})

/* slider*/
new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 4000,
    allowTouchMove: true,

    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});