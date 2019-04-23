import {
    TweenMax,
    Power2
} from "gsap/TweenMax";

export default () => {
    init();
    

    function init () {
        setAnimations();
        setImagesSrc();
    }

    function setImagesSrc () {
        // console.log(preload.getItemByUrl(getFile("images/image1.jpg")).blobUrl);
        // console.log(preload.getItemByUrl(getFile("images/image2.jpg")).blobUrl);
    }

    function setAnimations () {
        TweenMax.to(".preload-container", 1,  {
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: () => {
                const preloadContainer = document.getElementById("preload-container");
                preloadContainer.classList.add("hided");
            }
        });
    }
};