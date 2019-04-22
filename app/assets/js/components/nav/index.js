import {
    Howl
} from "howler";

import {
    TweenMax,
    Power2
} from "gsap/TweenMax";

(() => {
    let soundIsPlaying = true;

    const soundTrack = new Howl({
        src: [
            "/assets/sounds/soundtrack.mp3"
        ],
        loop: true,
        volume: 0.1,
        // autoplay: true
    });

    const muteButton = document.getElementById("mute-button");

    muteButton.addEventListener("click", () => {
        soundIsPlaying = !soundIsPlaying;

        if (soundIsPlaying) {
            soundTrack.play();
            muteButton.classList.remove("is-muted");
        } else {
            soundTrack.pause();
            muteButton.classList.add("is-muted");
        }
    });

    TweenMax.from(".nav", 1, {
        y: -70,
        ease: Power2.easeOut    
    });

    TweenMax.to(".nav", 1,  {
        y: 0,
        ease: Power2.easeOut
    });

})();