const divSol = document.querySelector('#sol');
gsap.to('.sol_svg', {
    rotate:360,
    repeat:-1,
    ease: "none",
    duration: 15,
    
})



const voltar = () => {
    var tlVoltar = gsap.timeline()

    tlVoltar.to('body', {
        background:'url(img/Index/Montanha_direita.svg) no-repeat right bottom, url(img/Index/Montanha_esquerda.svg) no-repeat -110px 120% var(--primary-green)',
        overflow:'auto',
        duration:0,
    })
    tlVoltar.to('nav',{
        opacity:0,
        duration:.3
    }, '.sol_svg-=1')

    setTimeout(() => {
        window.scrollTo({top: 0, behavior:'smooth'})
    }, 1000);

    tlVoltar.to('.sol_svg', {
        scale:1,
        duration:1,
    })
    tlVoltar.to('.sol_svg', {
        x:0+'%',
        duration:1,
    })
    tlVoltar.to('.sol_svg', {
        yPercent:'none',
        top:35+"%",
        cursor:'pointer',
        duration:1,
    })
    tlVoltar.to(divSol, {
        position:'relative',
        y:'none',
        height:'auto',
        duration: 0,
    })
    tlVoltar.to('.content_inicial, #sol h1', {
        opacity: 1,
        duration:1,
    })
}

const moverSol = () => {
    var tlSol = gsap.timeline()
    tlSol.to('.content_inicial, #sol h1', {
        opacity: 0,
        duration:1,
    })
    
    tlSol.to(divSol, {
        position:'fixed',
        y:0,
        height:100+'vh',
        duration: 0,
    })
    tlSol.to('.sol_svg', {
        yPercent:-50,
        top:50+'%',
        cursor:'auto',
        duration:1,
    })
    tlSol.to('.sol_svg', {
        x:50+'%',
        duration:1,
    })
    tlSol.to('.sol_svg', {
        scale:1.4,
        duration:1,
    })
    tlSol.to('nav',{
        opacity:1,
        duration:.3
    }, '.sol_svg-=1')
    tlSol.to('body', {
        backgroundImage:'none',
        overflow:'auto',
        duration:0,
    })
}

divSol.addEventListener('click', moverSol)
document.querySelector('.material-symbols-rounded').addEventListener('click', voltar)
