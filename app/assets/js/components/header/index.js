import {
    TweenMax,
    Power2
} from "gsap/TweenMax";

export default (soundTrack) => {
    let soundIsPlaying = true;

    soundTrack.play();

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

    TweenMax.from(".header", 1, {
        y: -15,
        ease: Power2.easeOut
    });

    TweenMax.to(".header", 1, {
        y: 0,
        ease: Power2.easeOut
    });
};