const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');
const output = document.querySelector('.dont');
const outputPara = document.querySelector('.dont p');
const cb = document.querySelector('.flex:nth-of-type(2) input');
const copy = document.querySelector('.dont i');
const success = document.querySelector('.success');
const body = document.querySelector('body');

const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const num = '0123456789';
const char = '!@#$%-&*';

form.addEventListener('submit', e =>{
    e.preventDefault();
    e.stopPropagation();
    let pass = '';  
    let str = ALPHA + alpha + num;
    if(cb.checked){
        str += char;
    }    
    for(i=0;i<input.value;i++){
        const val =Math.round(Math.random()*(str.length-1));
        pass += str[val];
    }
    output.classList.remove('dont');
    output.classList.add('output');
    outputPara.textContent = pass;
});

copy.addEventListener('click', e => {
    e.stopPropagation();
    navigator.clipboard.writeText(outputPara.textContent);
    success.style.display = 'block';
});

body.addEventListener('click', e =>{
    success.style.display = 'none';
});