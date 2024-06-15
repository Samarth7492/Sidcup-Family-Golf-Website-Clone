var crsr=document.querySelector("#cursor");
var blur=document.querySelector("#blur");
document.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x-200+"px";
  crsr.style.top=dets.y-200+"px";
  blur.style.left=dets.x+"px"
  blur.style.top=dets.y+"px"
})
gsap.to(".navbar",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
         trigger:"#nav",
         scroller:"body",
         markers:true,
         start:"top -10%",
         end:"top -11%",
         scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})