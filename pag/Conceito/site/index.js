gsap.registerPlugin(ScrollTrigger);

gsap.to(".aql",{
    scrollTrigger:{
        trigger:".img",
        start:"60% 60%",
        end:"bottom 20%",
        scrub:2,
        ToggleAction:"pause pause pause pause"

    },
    x:1200,
    duration:1,

});






//movimentação de card para o lado da tela

//  gsap.to("@media screen and (max-width:717px) '?????' .img",{
//      scrollTrigger:{
//          trigger:".img",
//          start:"60% 60%",
//          end:"bottom 20%",
//          scrub:1,
//          ToggleAction:"pause pause pause pause"
//      },
//      x:1400,
//      duration:1,
//  });