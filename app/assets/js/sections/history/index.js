import {
    TweenMax,
    Power2
} from "gsap/TweenMax";

import ScrollMagic from "scrollmagic";

export default (scrollMagicController) => {
    TweenMax.from(".history-item.item-I", 1, {
        y: 70,
        ease: Power2.easeOut
    });

    TweenMax.to(".history-item.item-I", 1,  {
        y: 0,
        ease: Power2.easeOut
    });

    const historyItems = [
        {
            trigger: ".item-II-target",
            target: ".history-item.item-II",
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
            trigger: ".item-II-target",
            target: ".history-title.item-II",
            from: {
                y: -30
            },
            to: {
                y: 0
            }
        },
        {
            trigger: ".item-III-target",
            target: ".history-item.item-III",
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
            trigger: ".item-III-target",
            target: ".history-title.item-III",
            from: {
                y: -30
            },
            to: {
                y: 0
            }
        },
        {
            trigger: ".item-IV-target",
            target: ".history-item.item-IV",
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
            trigger: ".item-IV-target",
            target: ".history-title.item-IV",
            from: {
                y: -30
            },
            to: {
                y: 0
            }
        },
        {
            trigger: ".item-V-target",
            target: ".history-title.item-V",
            from: {
                y: -30
            },
            to: {
                y: 0
            }
        },
        {
            trigger: ".item-V-target",
            target: ".image-I",
            from: {
                opacity: 0.1
            },
            to: {
                opacity: 1
            }
        },
        {
            trigger: ".item-V-target",
            target: ".image-II",
            from: {
                opacity: 0.1
            },
            to: {
                opacity: 1
            }
        },
        {
            trigger: ".item-V-target",
            target: ".image-III",
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
};