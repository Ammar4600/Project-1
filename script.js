function cursur(params) {
    document.addEventListener("mousemove", (dets)=>{
        gsap.to("#cursur , #cursur_blur",{
        x : dets.x,
        y : dets.y,
        })
        })        
}
cursur();

let nav = document.querySelectorAll("#navbar h4 , button , #footer h4");

nav.forEach((Element)=>{
Element.addEventListener("mouseenter",()=>{
gsap.to("#cursur ",{
    width : "80px",
    height : "80px",
    backgroundColor:"Transparent",
    border: "2px solid white",
})
})
Element.addEventListener("mouseleave",()=>{
gsap.to("#cursur ",{
    width : "20px",
    height : "20px",
    backgroundColor:"#95C11E",
    border: "none",
})
})
})










gsap.to("#navbar",{
    backgroundColor: "#000000f0",
    height: "90px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller: "body",
        // markers:true,
        start : "top -10%",
        end : " top 12%",
        scrub : 4,
    }
})

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger:"#page2",
        scroll: "#page2",
        start: "top 110%",
        end : "top - 13%",
        scrub: 3,
        // markers : true,
    }
})

gsap.to(".colon1",{
    y:60,
    scrollTrigger:{
        trigger : ".para",
        scroller: "body",
        start : "top 10%",
        end : "top 11%",
        scrub:3,
        // markers:true,
    }
})
gsap.to(".colon2",{
    y:-60,
    scrollTrigger:{
        trigger : ".para",
        scroller: "body",
        start : "top 10%",
        end : "top 11%",
        scrub:3,
        // markers:true,
    }
})


gsap.to(".last>h1",{
    y:-75,
    scrollTrigger:{
        trigger:".last",
        scroller:"body",
        start : "top 70%",
        end : "top 73%",
        scrub: 3,
        markers:true,
    }
})