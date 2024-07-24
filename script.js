function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
init();




//* loading animation 

function loadingAnimation() {

    var tl0 = gsap.timeline()

    tl0.to(".line0", {
        z: 10,
        // scale:0,
        opacity: 1,
        // stagger:0.25,
        duration: 0.56,
        // delay:0.5,
        ease: "power3.inOut"
    })
    tl0.to(".line1", {
        z: 10,
        // scale:0,
        opacity: 1,
        stagger: 0.25,
        duration: 0.24,
        // delay:0.1,
        ease: "power3.inOut"
    })
    tl0.to(".line2", {
        z: 10,
        // scale:2,
        opacity: 1,
        // stagger:0.25,
        duration: 0.24,
        // delay:0.5,
        ease: "power3.inOut"
    })
    tl0.to(".line3", {
        z: 10,
        // scale:2,
        opacity: 1,
        // stagger:0.25,
        duration: 0.24,
        // delay:0.5,
        ease: "power3.inOut"
    })
    tl0.to(".line4", {
        z: 10,
        opacity: 1,
        // stagger:0.25,
        duration: 0.24,
        // delay:0.5,
        ease: "power3.inOut"
    })
    tl0.to(".line5", {
        z: 10,
        opacity: 1,
        // stagger:0.25,
        duration: 0.24,
        // delay:0.5,
        ease: "power3.inOut"
    })
    tl0.to(".line6", {
        z: 10,
        opacity: 1,
        // stagger:0.25,
        duration: 0.24,
        // delay:0.5,
        ease: "power3.inOut"
    })
    tl0.to(".line7", {
        z: 10,
        opacity: 1,
        // stagger:0.25,
        duration: 0.24,
        // delay:0.5,
        ease: "power3.inOut"
    })
    tl0.to(".line8", {
        z: 100,
        opacity: 1,
        // stagger:0.25,
        duration: 1,
        // delay:0.5,
        ease: "power3.inOut"
    })

    tl0.to("#brown", {
        height: "100%",
        duration: 0.3,
        ease: Expo.easeInOut,
    })

    tl0.to("#grey", {
        height: "100%",
        duration: 0.3,
        ease: Expo.easeInOut,
    })
    tl0.to("#loader", {
        opacity: 0,
        ease: Expo.easeInOut,
    })
    //  tl0.from("#page1",{
    //     y:1200,
    //     ease:Expo.easeInOut,
    //  })

    tl0.to("#loader", {
        display: "none",
    })
};

loadingAnimation();



//! loading end 




//*   Mouse crsr 

var main = document.querySelector("#main")
var cursor = document.querySelector("#crsr")

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.3,
        easse: "back.out",
    })
})






//* Home page 


let container = document.querySelector('.container');
let layer = document.querySelectorAll('.layer');

container.onmousemove = function (e) {
    let X = e.pageX;
    let Y = e.pageY;

    layer[0].style.transform = 'translate(' + X / 100 * -7 + 'px, ' + Y / 100 * -7 + 'px)';
    layer[1].style.transform = 'translate(' + X / 100 * -6 + 'px, ' + Y / 100 * -6 + 'px)';
    layer[2].style.transform = 'translate(' + X / 100 * -3 + 'px, ' + Y / 100 * -3 + 'px)';
    layer[3].style.transform = 'translate(' + X / 100 * -11 + 'px, ' + Y / 100 * -11 + 'px)';
    layer[4].style.transform = 'translate(' + X / 100 * 4 + 'px, ' + Y / 100 * 4 + 'px)';
    layer[5].style.transform = 'translate(' + X / 100 * 7 + 'px, ' + Y / 100 * 7 + 'px)';
    layer[6].style.transform = 'translate(' + X / 100 * 11 + 'px, ' + Y / 100 * 11 + 'px)';
    layer[7].style.transform = 'translate(' + X / 100 * 11 + 'px, ' + Y / 100 * 11 + 'px)';
}



//! Home anime end 


//* page 1 anime



gsap.to("#page1 .right-layer", {
    transform: "translate(150%)",
    opacity: 0,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        ease: "power2",
    }
});

gsap.to("#page1 .left-layer", {
    transform: "translate(-150%)",
    opacity: 0,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        ease: "power2",
        pin: true,
    }
})


gsap.from("#page1 #part-2 .overlay", {
    scale: 0,
    scrollTrigger: {
        trigger: "#part-1",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        // markers: true,
        scroller: "#main",
        ease: "power4",
    }
})
gsap.from("#page1 .search", {
    scale: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: "#part-1",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        // markers: true,
        scroller: "#main",
    }
})


//! page 1 end 






//* page 2 anime 



var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        start: "0% 100%",
        end: "50% 50%",
        scrub: 2,
        scroller: "#main",
    }
})

tl2.from(".rounded-div-wrapper", {
    height: 0,
    marginTop: 0
})


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "20% 50%",
        scroller: "#main",
        end: "100% 50%",
        scrub: 2,
    },
})
tl.to(".text-area2 h1", {
    width: "100%",
})
tl.to(".text-area2 h2", {
    delay: -0.2,
    width: "100%",
});



//! page 2 end 






//* page 3 anime good reads 



var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers:true,
        start: "top 5%",
        end: "top 20%",
        scrub: 3,
    }
})
tl3.to("#page3", {
    backgroundColor: "#010101",
    color: "rgb(255, 255, 255)",
})

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers:true,
        start: "top 0%",
        end: "top -180%",
        scrub: 3,
        // pin:true,
    }
})
tl4.to("#page3", {
    backgroundColor: "#010101",
    color: "#CD946B",
})

gsap.from("#page3 .good", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top 10%",
        scrub: 2,
        ease: "power4",
    }
})

gsap.to("#page3 .good-item", {
    transform: "translateX(-600%)",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -500%",
        scrub: 2,
        pin: true,
        ease: "power4",
    }
})


//! page 3 anime good reads end







//* Author Section gsap Start


var tl8 = gsap.timeline()

tl8.from("#page4 .author", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#page4 .author h1",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        ease: "power2.inOut",
    }
});

tl8.from("#page4 #author1", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#page4 #author1",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        ease: "power2.inOut",
    }
});

tl8.to("#page4", {
    backgroundColor: "#221916",
    color: "#CD946B",
    scrollTrigger: {
        trigger: "#page4 #author1",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        ease: "power2.inOut",
    }
});


tl8.from("#page4 #author2", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#page4 #author2",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        ease: "power2.inOut",
    }
});

tl8.to("#page4", {
    backgroundColor: "#D5CEA3",
    color: "#21191A",
    scrollTrigger: {
        trigger: "#page4 #author2",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        ease: "power2.inOut",
    }
});

tl8.from("#page4 #author3", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#page4 #author3",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        ease: "power2.inOut",
    }
});

tl8.to("#page4", {
    backgroundColor: "#8A8A8A",
    color: "#191919",
    scrollTrigger: {
        trigger: "#page4 #author3",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        ease: "power2.inOut",
    }
});

tl8.from("#page4 #author4", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#page4 #author4",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        ease: "power2.inOut",
    }
});

tl8.to("#page4", {
    backgroundColor: "#B79C73",
    color: "black",
    scrollTrigger: {
        trigger: "#page4 #author4",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        ease: "power2.inOut",
    }
});


//! Author Section gsap End








// *categories section gsap //


var tl14 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,
        ease: "power2.inOut",
    }
});
tl14.to(".text", {
    top: "-7%",
}, 'a')
    .to("#card1", {
        top: "35%",
    }, 'a')
    .to("#card2", {
        top: "130%",
    }, 'a')
    .to("#card2", {
        top: "42%"
    }, 'b')
    .to("#card1", {
        width: "65%",
        height: "65vh"
    }, 'b')

    .to("#card3", {
        top: "130%"
    }, 'b')
    // .to("#card3",{
    //     top:"130%"
    // },'c')
    .to("#card3", {
        top: "50%"
    }, 'c')
    .to("#card2", {
        width: "70%",
        height: "70vh"
    }, 'c')



// !categories section End gsap //






//*  your daily dose page-7 


gsap.from("#page7 .cate", {
    y: -100,
    opacity: 0,
    stagger: -3,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        ease: "power2.inOut",
    }
})
gsap.to("#page7 .slide img", {
    scale: 2,
    opacity: 0,
    stagger: -0.2,
    // duration:1.3,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        // markers:true,
        start: "top 0%",
        end: "top -650%",
        scrub: 3,
        pin: true,
        ease: 'power3.inOut'
    }
})

//! your daily dose page-7  





//* Mystery Box animation


let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page8",
        scroller: "#main",
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin: true,
        // markers: true,
        ease: "power2.inOut",
    },
});
tl7.to("#demo", {
    bottom: "7%",
})
tl7.to(".our-work-txt-div", {
    height: "60vh",
}, 'height')
tl7.to(".our-work-txt", {
    height: "60vh",
}, 'height')
tl7.to("#our", {
    left: "0%",
}, 'height')
tl7.to("#work", {
    right: "0%",
}, 'height')
tl7.to(".scroll-img", {
    marginTop: "-200%",
})

//! Mystery Box animation End








//* About Section



gsap.from("#page9 .about h2", {
    y: 150,
    scrollTrigger: {
        trigger: "#page9 .about",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        ease: "power2.inOut",
    }
});

tl8.to("#page9", {
    backgroundColor: "#FDCAA6",
    color: "black",
    scrollTrigger: {
        trigger: "#page9",
        scroller: "#main",
        // markers:true,
        start: "top 60%",
        end: "top 40%",
        scrub: true,
        ease: "power2.inOut",
    }
});

gsap.from("#page9 .line h4", {
    y: 100,
    scrollTrigger: {
        trigger: "#page9 .line",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        ease: "power2.inOut",
    }
});
gsap.from("#page9 .about-btn", {
    y: 100,
    scrollTrigger: {
        trigger: "#page9 .about-btn",
        scroller: "#main",
        // markers:true,
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
        ease: "power2.inOut",
    }
});



//! About Section End 





