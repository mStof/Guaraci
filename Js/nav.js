function mecanismo () {
    // Add class ativa no container geral
    let nav = document.querySelector('.nav_container')
    nav.classList.toggle('nav_active', scrollY > 0)

    // remove a class para aparecer os links
    let navLinks = document.querySelector('.nav_normal .nav_bar')
    navLinks.classList.toggle('disappear', scrollY == 0)
    
    // remove a class para aparecer o menu
    let navMenu = document.querySelector('.nav_normal label')
    navMenu.classList.toggle('disappear', scrollY == 0)
    
    // add a linha pra separar
    let lineBefore = document.styleSheets[document.styleSheets.length - 1].cssRules[8]
    lineBefore.style.opacity = (scrollY > 0) ? 1 : 0

    // fecha o menu qnd estiver no topo
    let navBtn = document.getElementById('nav_btn')
    navBtn.checked = scrollY > 0 ? null : false
}

document.addEventListener('scroll', mecanismo)