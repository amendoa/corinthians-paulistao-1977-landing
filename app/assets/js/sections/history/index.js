import {
    TweenMax,
    Power2
} from "gsap/TweenMax";

import {
    getFile
} from "js/modules/utils";

import ScrollMagic from "scrollmagic";

export default (scrollMagicController, preload) => {
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
        TweenMax.from(".history-item.item-I", 1, {
            y: 15,
            ease: Power2.easeOut
        });
    
        TweenMax.to(".history-item.item-I", 1,  {
            y: 0,
            ease: Power2.easeOut
        });
    
        const historyItems = [
            {
                trigger: ".history-title.item-II",
                target: ".history-item.item-II .image, .history-item.item-II .paragraph",
                from: {
                    y: 70,
                    opacity: 0.1
                },
                to: {
                    y: 0,
                    opacity: 1
                }
            },
            {
                trigger: ".history-title.item-II",
                target: ".history-title.item-II",
                from: {
                    y: -30
                },
                to: {
                    y: 0
                }
            },
            {
                trigger: ".history-title.item-III",
                target: ".history-item.item-III .image, .history-item.item-III .paragraph",
                from: {
                    y: 70,
                    opacity: 0.1
                },
                to: {
                    y: 0,
                    opacity: 1
                }
            },
            {
                trigger: ".history-title.item-III",
                target: ".history-title.item-III",
                from: {
                    y: -30
                },
                to: {
                    y: 0
                }
            },
            {
                trigger: ".history-title.item-IV",
                target: ".history-item.item-IV .image, .history-item.item-IV .paragraph",
                from: {
                    y: 70,
                    opacity: 0.1
                },
                to: {
                    y: 0,
                    opacity: 1
                }
            },
            {
                trigger: ".history-title.item-IV",
                target: ".history-title.item-IV",
                from: {
                    y: -30
                },
                to: {
                    y: 0
                }
            },
            {
                trigger: ".history-title.item-V",
                target: ".history-title.item-V",
                from: {
                    y: -30
                },
                to: {
                    y: 0
                }
            },
            {
                trigger: ".history-title.item-V",
                target: ".photos-item .image",
                from: {
                    opacity: 0.1
                },
                to: {
                    opacity: 1
                }
            }
        ];
    
        historyItems.forEach((item) => {
            const {
                target,
                trigger,
                from,
                to
            } = item;
    
            TweenMax.set(target, from);
       
            new ScrollMagic.Scene({
                triggerElement: trigger,
                duration: 1000
            })
                .setTween(target, 1, {
                    ...to,
                    ease: Power2.easeOut
                })
                .addTo(scrollMagicController);
        });
    }
};