import {
    TweenMax,
    Power2
} from "gsap/TweenMax";

export default () => {
    TweenMax.from(".home-title-trigger", 1, {
        y: -15,
        ease: Power2.easeOut
    });

    TweenMax.from(".home-desc-trigger", 1, {
        y: 15,
        ease: Power2.easeOut
    });
};