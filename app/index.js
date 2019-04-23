import {
    getFile
} from "js/modules/utils";

import "stylesheets/index.styl";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import headerComponent from "js/components/header";
import preloadComponent from "js/components/preload";
import historySection from "js/sections/history";
import homeSection from "js/sections/home";
import Preload from "preload-it";
import constants from "js/modules/constants";

const controller = new ScrollMagic.Controller();

const preload = Preload();

const filesToLoad = constants.files_to_load.map(item => getFile(item));

preload.fetch(filesToLoad);

preload.oncomplete = () => {
    setTimeout(() => {
        headerComponent();
        homeSection();
        historySection(controller);
        preloadComponent();
        document.body.classList.remove("is-loading");
    }, 1000);
};

preload.onprogress = event => document.getElementById("progress-bar").setAttribute("style", `width: ${event.progress}%`);