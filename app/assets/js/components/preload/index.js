import {
    TweenMax,
    Power2
} from "gsap/TweenMax";

export default () => {
    init();
    
    function init () {
        setAnimations();
    }

    function setAnimations () {
        TweenMax.to(".preload-container", 1, {
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: () => {
                const preloadContainer = document.getElementById("preload-container");
                preloadContainer.classList.add("hided");
            }
        });
    }
};