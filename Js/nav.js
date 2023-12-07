function scrollInSite () {
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
    let newArray = Object.keys(document.styleSheets).map(e => document.styleSheets[e])
    let navCss = newArray.findIndex((e) => e.href === "https://mstof.github.io/Projeto-integrador/css/nav.css") // o number do nav.css
    let lineBefore = document.styleSheets[navCss].cssRules[8]
    lineBefore.style.opacity = (scrollY > 0) ? 1 : 0

    // fecha o menu qnd estiver no topo
    let navBtn = document.getElementById('nav_btn')
    navBtn.checked = scrollY > 0 ? null : false
}

function noScrollInSite() {
    document.documentElement.style.setProperty('--color', '#f5f5f5')
    let navLinks = document.querySelector('.nav_normal .nav_bar')
    navLinks.classList.remove('disappear')

    let navMenu = document.querySelector('.nav_normal label')
    navMenu.classList.remove('disappear')

    let lineBefore = document.styleSheets[document.styleSheets.length - 1].cssRules[8]
    lineBefore.style.opacity = 1
    return console.log('No scroll in site')
}

let body = document.body, html = document.documentElement;
const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
console.log(docHeight)
if(docHeight > window.innerHeight){
    document.addEventListener('scroll', scrollInSite)
}
else{
    noScrollInSite()
}
