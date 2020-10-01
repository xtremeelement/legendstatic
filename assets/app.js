let tl = gsap.timeline();

tl.fromTo(
    "#jumbo .titles h1",
    {
        x: -100,
        opacity: 0
    },
    {
        x: 100,
        opacity: 1,
        duration: 2

    },
    '>+3'
).fromTo(
    "#jumbo .titles h2",
    {
        x: 1000,
        opacity: 0
    },
    {
        x:100,
        opacity: 1,
        duration: 2
    },
    '>-2'
)

let jumboTL = gsap.timeline();

jumboTL.fromTo(
    "#jumbo .transparent-color",
    {
        opacity: 0
    },
    {
        opacity: 1,
        duration: 2
    }
).fromTo(
    ".logo",
    {
        
        opacity: 0
    },
    {
        opacity: 1,
        
        duration: 1
    }
).fromTo(
    ".menu",
    {
        x: 200,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration:1
    },
    '>-1.3'
).fromTo(
    "#jumbo .store-info",
    {
        opacity: 0
    },
    {
        opacity: 1,
        duraction: 2
    },
    ">-1"
    
).fromTo(
    "#jumbo .store-info img",
    {
        y: 400,
        opacity: 0,
    },
    {
        y:0,
        duration: 1,
        opacity: 1,
        stagger: .2
    },
    '>-1'
).fromTo(
    "#jumbo .state",
    {
        opacity: 0,
        x: 400
    },
    {
        opacity: 1,
        x: 0,
        duration: 1
    },
    
)

var myNav = document.querySelector("header");
      window.onscroll = function() {
        "use strict";
        if (window.pageYOffset > 1) {
          myNav.classList.add("navColor");
        } else {
          myNav.classList.remove("navColor");
        }
      };
