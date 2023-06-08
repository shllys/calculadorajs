const pantalla = document.querySelector('#display');
const botones = document.querySelectorAll('button');

botones.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'reset') {
            display.innerText = '';
        } else if (item.id == 'clear') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'igual') {
            display.innerText = eval(display.innerText);
        } else {
            display.innerText += item.id;
        }
    }
});

const dos = document.getElementById('dos');
dos.addEventListener('click', () => {
    let body = document.querySelector('body');
    let toggle = document.getElementById('circle');
    body.classList.add('active1');
    body.classList.remove('active2');
    toggle.style.left = '37%';
    toggle.style.background = '#e88113';
})

const uno = document.getElementById('uno');
uno.addEventListener('click', () => {
    let body = document.querySelector('body');
    let toggle = document.getElementById('circle');
    body.classList.remove('active1');
    body.classList.remove('active2');
    toggle.style.left = '6%';
    toggle.style.background = '#d13f3d';
})

const tres = document.getElementById('tres');
tres.addEventListener('click', () => {
    let body = document.querySelector('body');
    let toggle = document.getElementById('circle');
    body.classList.add('active2');
    body.classList.remove('active1');
    toggle.style.left = '70%';
    toggle.style.background = '#3cb3ea';
})