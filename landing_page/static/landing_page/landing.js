var background = document.querySelector('.back');
var modal = document.querySelector('.mod');
var logForm = document.querySelector('.login');
var but = document.getElementById('btn1')
var butn = document.getElementById('log');
var cmon = document.getElementById('log2');


function signOn()
{
    background.style.display = "block";
    modal.style.display = "block";
}

function signOff()
{
    background.style.display = "none";
    modal.style.display = "none";
}

function logOn()
{
    modal.style.display = "none";
    background.style.display = "block";
    logForm.style.display = "block";
}

function logOff()
{
    background.style.display = "none";
    logForm.style.display = "none";
}

function backTo()
{
    modal.style.display = "block";
    background.style.display = "block";
    logForm.style.display = "none";
}



but.addEventListener('click', signOn);
cmon.addEventListener('click', logOn);
background.addEventListener('click', signOff);
butn.addEventListener('click', logOn);
background.addEventListener('click', logOff);
cmon.addEventListener('click', backTo);


