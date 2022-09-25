document.querySelector('#menu').addEventListener('click', ()=> {
    document.querySelector('nav ul').classList.toggle('showmenu');
})

let mybtn = document.getElementById('myBtn')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 980 || document.documentElement.scrollTop > 980) {
        mybtn.style.display = "block";
    } else {
        mybtn.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}