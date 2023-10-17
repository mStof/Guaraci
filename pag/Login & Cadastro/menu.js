const modal = document.querySelector('.modal');
var radio = document.querySelectorAll('nav input[type="radio"]')
const menu = document.querySelector('input#menu')

const removeCheck = () => {
    for (const i of radio) {
        if(i.checked) {
            modal.style.display = 'block'
            return
        }
        else {
            modal.style.display = 'none'
        }
    }
}
document.getElementsByTagName('body')[0].addEventListener('click', removeCheck)
modal.addEventListener('click', () => {
    modal.style.display = 'none';
    for (const i of radio){ i.checked = false}
})

//-----------
if(!(menu == null)){
menu.addEventListener('click', () => {
    console.log('here')
    let menu = document.querySelector('input#menu')
    if(!menu.checked){
        for (const i of radio) {
            i.checked = false
        }
    }
})
}