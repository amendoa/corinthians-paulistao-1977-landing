import "stylesheets/index.styl";
import "animation.gsap";
import ScrollMagic from "scrollmagic";
import headerComponent from "js/components/header";
import preloadComponent from "js/components/preload";
import historySection from "js/sections/history";
import homeSection from "js/sections/home";
import constants from "js/modules/constants";
import Preloader from "preloader.js";

import {
    Howl
} from "howler";

const controller = new ScrollMagic.Controller();

const preloader = new Preloader({
    resources: constants.files_to_load
});

preloader.addProgressListener((loaded, length) => document.getElementById("progress-bar").setAttribute("style", `width: ${loaded / length * 100}%`) );

preloader.addCompletionListener(() => {
    const soundTrack = new Howl({
        src: [
            "/assets/sounds/soundtrack.mp3"
        ],
        loop: true,
        volume: 0.1
    });

    soundTrack.once("load", () => {
        setTimeout(() => {
            headerComponent(soundTrack);
            preloadComponent();
            document.body.classList.remove("is-loading");
            homeSection();
            historySection(controller);
        }, 1000);
    });
});

preloader.start();