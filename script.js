let text = document.querySelector('.card h3')
let btn = document.querySelector('.card button')
let check =  0;

btn.addEventListener('click', ()=>{
    if (check == 0) {
        text.innerText = 'Friends';
        text.style.color = 'green';
        btn.innerText = 'Remove Friend';
        btn.style.background = 'lightsalmon';
        check = 1;
    } else {
        text.innerText = 'Stranger';
        text.style.color = 'crimson';
        btn.innerText = 'Add Friend';
        btn.style.background = 'lightsteelblue';
        check = 0;
    }
})
