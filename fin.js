// header1 

let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let jungBx = document.querySelectorAll('.jung');

let a = 0;   
rightBtn.addEventListener('click', ()=> {
    a++;
    if (a > jungBx.length - 1) {
        a = 0;
        jungBx[0].classList.remove('hide');
        jungBx[jungBx.length - 1].classList.add('hide');
    }
    jungBx[a].classList.remove('hide');
    jungBx[a - 1].classList.add('hide');
});

leftBtn.addEventListener('click' , ()=> {
    a--;
    if( a < 0) {
        a = jungBx.length - 1;
        jungBx[0].classList.add('hide');
    }
    jungBx[a].classList.remove('hide');
    jungBx[a + 1].classList.add('hide');
});

