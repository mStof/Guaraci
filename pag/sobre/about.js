
//1 
var button0 = document.getElementById('More0');

    button0.addEventListener('click', function(){

        var card0 = document.querySelector('.card0');

            card0.classList.toggle('ativo0');

                if (card0.classList.contains('ativo0')){
                    return button0.textContent = 'Read less';
                }

                button0.textContent = 'Read more';
    })


// 2
    
    var button1 = document.getElementById('More1');

    button1.addEventListener('click', function(){

        var card1 = document.querySelector('.card1');

            card1.classList.toggle('ativo1');

                if (card1.classList.contains('ativo1')){
                    return button1.textContent = 'Read less';
                }

                button1.textContent = 'Read more';
    })

// 3


    var button2 = document.getElementById('More2');

    button2.addEventListener('click', function(){

        var card2 = document.querySelector('.card2');

            card2.classList.toggle('ativo2');

                if (card2.classList.contains('ativo2')){
                    return button2.textContent = 'Read less';
                }

                button2.textContent = 'Read more';
    })

    