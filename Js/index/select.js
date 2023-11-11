const select_lingua = document.querySelector("select#select_lingua");
const select_mode = document.querySelector("select#select_modo");
const sites = document.querySelectorAll('nav ul li a')

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

    let links = {
        nomes_ing:['Rites', 'Concept', 'Login', 'Help', 'Credits'],

        links_ing:['pag/Rituais/index_rituais.html',
                    'pag/Conceito/site/index_construction.html',
                    'pag/Login & Cadastro/login_cadastro_em.html',
                    'pag/sobre/about.html', 
                    'pag/Desenvolvedores/creditos_em.html'],

        nomes_pt:['Rituais', 'Conceito', 'Login', 'Ajuda', 'Créditos'],

        links_pt:['pag/Rituais/index_rituais.html',
                  'pag/Conceito/site/index_construção.html',
                  'pag/Login & Cadastro/login_cadastro.html',
                  'pag/sobre/sobre.html', 
                  'pag/Desenvolvedores/creditos.html'],
    }
        if(select_lingua.value == "US"){
            for (let i = 0; i < sites.length; i++) {
                sites[i].textContent = links.nomes_ing[i]
                sites[i].href = links.links_ing[i]
            }
        }else{
            for (let i = 0; i < sites.length; i++) {
                sites[i].textContent = links.nomes_pt[i]
                sites[i].href = links.links_pt[i]
            }
        }
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