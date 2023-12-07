



var button = document.getElementById('More');

    button.addEventListener('click', function(){

        var card = document.querySelector('.card');

            card.classList.toggle('ativo');

                if (card.classList.contains('ativo')){
                    return button.textContent = 'Ler menos';
                }

                button0.textContent = 'Ler mais';
    })

//1 
var button0 = document.getElementById('More0');

    button0.addEventListener('click', function(){

        var card0 = document.querySelector('.card0');

            card0.classList.toggle('ativo0');

                if (card0.classList.contains('ativo0')){
                    return button0.textContent = 'Ler menos';
                }

                button0.textContent = 'Ler mais';
    })


// 2
    
    var button1 = document.getElementById('More1');

    button1.addEventListener('click', function(){

        var card1 = document.querySelector('.card1');

            card1.classList.toggle('ativo1');

                if (card1.classList.contains('ativo1')){
                    return button1.textContent = 'Ler menos';
                }

                button1.textContent = 'Ler mais';
    })

// 3


    var button2 = document.getElementById('More2');

    button2.addEventListener('click', function(){

        var card2 = document.querySelector('.card2');

            card2.classList.toggle('ativo2');

                if (card2.classList.contains('ativo2')){
                    return button2.textContent = 'Ler menos';
                }

                button2.textContent = 'Ler mais';
    })




    var button3 = document.getElementById('More3');

    button3.addEventListener('click', function(){

        var card3 = document.querySelector('.card3');

            card3.classList.toggle('ativo3');

                if (card3.classList.contains('ativo3')){
                    return button3.textContent = 'Ler menos';
                }

                button2.textContent = 'Ler mais';
    })


    var tabelaB = document.getElementById('More3');

    tabelaB.addEventListener('click', function(){

        var card3Tab = document.querySelector('.tabela');

            card3Tab.classList.toggle('tabAtiva');


    })
    