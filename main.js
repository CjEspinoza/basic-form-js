let fn = document.getElementById('firstname').value;
console.log(fn);

function getData(){
    let fn = document.getElementById('firstname').value;
    let output = document.querySelector('#password');
    output.setAttribute('value', fn);
}