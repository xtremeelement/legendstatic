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
    "header .logo",
    {
        
        opacity: 0
    },
    {
        opacity: 1,
        
        duration: 1
    }
).fromTo(
    "header .menu",
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

// document.querySelector(".close-mobile-menu").addEventListener('click', ()=>{
//     document.querySelector("#mobile-menu").classList.remove("active");
// });

// document.querySelector(".open-mobile-menu").addEventListener('click', ()=>{
//     document.querySelector("#mobile-menu").classList.add("active");
// });

const mobileMenutTL = gsap.timeline({
    paused: true
});

mobileMenutTL
    .fromTo(
        "#mobile-menu",
        {
            x: "-100%"
        },
        {
            x: 0
        }
    ).fromTo(
        "#mobile-menu .menu .link",
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: .4,
            stagger: .2
        }
    );


const openMobileMenu = document.querySelector(".open-mobile-menu");
openMobileMenu.addEventListener("click", ()=>{
    mobileMenutTL.play();
})


const closeMobileMenu = document.querySelector(".close-mobile-menu");
closeMobileMenu.addEventListener('click', ()=>{
    mobileMenutTL.reverse();
})

const mobileModeOn = () => {
    if(window.innerWidth <= 991){
        document.querySelector("header .menu").classList.add("mobile");
    }else{
        document.querySelector("header .menu").classList.remove("mobile");
    }
};

mobileModeOn();
window.addEventListener("resize", function(event){
    mobileModeOn();
})
