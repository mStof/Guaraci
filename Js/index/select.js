const select_lingua = document.querySelector("select#select_lingua");
const select_mode = document.querySelector("select#select_modo");

select_mode.addEventListener('change', () => {
    localStorage.setItem('mode', select_mode.value)
})
      
select_lingua.addEventListener("change", () => {
let Flags = {
        flags: ["img/Index/Brazil_flag.svg", "img/Index/USA_Flag.svg"],
        alt: ["Brazil_flag", "USA_flag"],
        text: ["Começar", "Start"]
        };
        
        document.querySelector("img.flag").src = (select_lingua.value == "US") ? Flags.flags[1] : Flags.flags[0];
        document.querySelector("img.flag").alt = (select_lingua.value == "US") ? Flags.alt[1] : Flags.alt[0];
        document.querySelector("h1.iniciar").innerHTML = (select_lingua.value == "US") ? Flags.text[1] : Flags.text[0];
    });
    
    select_mode.addEventListener("change", () => {
        document.querySelector(":root").classList.toggle("dark");
    });
    
    // EsterEggs
select_lingua.addEventListener("change", () => {
    if (select_lingua.value == "PT") {
        document.querySelector("img.flag").addEventListener("mousedown", () => {
            setTimeout(() => { document.querySelector("img.flag").src = "img/Index/Brazil_flag_PT.svg";}, 1000 * 5);
    })}
})