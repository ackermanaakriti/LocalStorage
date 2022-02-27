
const arr=[ 'name','student', 'car','age'];
localStorage.setItem('arr',JSON.stringify(arr));
const getthat = JSON.parse( localStorage.getItem('arr'));
document.getElementById('firs').innerHTML=getthat;

let dummyh=document.getElementById('firsth1');
dummyh=[];
localStorage.setItem('dummyh',JSON.stringify(dummyh));
JSON.parse(localStorage.getItem(dummyh));
 

