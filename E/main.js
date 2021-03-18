const firstsh = document.getElementById('firstshow');
const firsthi = document.getElementById('firsthide');
var first_click = true;
change();
firstsh.onclick = function () {
    if (first_click) {
        nochange();
        first_click = false;
    }
    else {
        change();
        first_click = true;
    }
}



const secondsh = document.getElementById('secondshow');
const hide = document.getElementById('hide');
const hide_show = document.querySelector('.hide_show');
s_nochange();
secondsh.onclick = function () {
    s_change();
}

hide.onclick = function () {
    s_nochange();
}

function s_change() {
    hide_show.style.display = '';
}

function s_nochange() {
    hide_show.style.display = 'none';

}

function change() {
    firsthi.style.display = '';
    firstsh.innerText = "Hide";
    firstsh.style.color = "black";
}
function nochange() {
    firsthi.style.display = 'none';
    firstsh.innerText = "Show";
    firstsh.style.color = "white";

}
