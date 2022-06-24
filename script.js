let count = 0;

const number = document.querySelector('#number');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn){
    btn.addEventListener('click', function(c){
        const classes = c.currentTarget.classList;

        if(classes.contains('decrease-btn')){
            count--;
        }

        else if(classes.contains('increase-btn')){
            count++;
        }

        else {
            count = 0;
        }
        number.textContent = count;

        if(count < 0){
            number.style.color = 'red'
        }

        else if(count > 0){
            number.style.color = 'green'
        }

        else{
            number.style.color = 'black'
        }
    })
})