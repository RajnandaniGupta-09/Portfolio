const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".mini-circle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
function firstPageAnim(){
    var tl=gsap.timeline();
    tl.from(".nav",{
       y:'-10',
       opacity:0,
       duration:1.5,
       ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay:-1,
        stagger:0.2
     })
     .from(".hero-footer",{
        y: -10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
     })
 }
circleMouseFollower();
firstPageAnim();
const elem = document.querySelectorAll('.elem');
elem.forEach(elem =>{
    const icon= elem.querySelector('.icon');
    const content = elem.querySelector('.content');
    elem.addEventListener('click',()=>{
        icon.classList.toggle('active');
        content.classList.toggle('active');
    })
})