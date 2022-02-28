
// const arr=[ 'name','student', 'car','age'];
// localStorage.setItem('arr',JSON.stringify(arr));
// const getthat = JSON.parse( localStorage.getItem('arr'));
// document.getElementById('firs').innerHTML=getthat;

let dummyh=document.getElementById('firstinput');
const mybtn=document.getElementById('firs_button')
mybtn.addEventListener('click',myfunction)
function myfunction()
{
localStorage.setItem('dummyh',dummyh.value);
 let myvalue=localStorage.getItem('dummyh');
document.getElementById('mylist').innerHTML=myvalue;
console.log(myvalue);
}

