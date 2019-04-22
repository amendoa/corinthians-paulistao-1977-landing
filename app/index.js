import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "assets/js/components/nav";
import "assets/stylesheets/index.styl";
import historySection from "assets/js/sections/history";
import homeSection from "assets/js/sections/home";

const controller = new ScrollMagic.Controller();
historySection(controller);
homeSection();