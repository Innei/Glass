window.onload = function () {

    completed();
    const theme = document.getElementById('changeTheme');
    const font = document.getElementById('changeFont');
    theme.onclick = changeTheme;
    font.onclick = changeFont;

    const close = document.querySelector('.notsupport');
    if (window.getComputedStyle(close).getPropertyValue("display") === 'none') {
        close.remove();
    }
    else {
        close.onclick = e => {
            e.target.style = 'animation: fade-off .5s both ease-in-out;'
            setTimeout(() => {
                e.target.remove()
            }, 500);
        }
    }
}

function completed() {
    document.body.classList.add('completed');
    setTimeout(() => {
        document.body.removeAttribute('class');
    }, 500);
}

function changeTheme() {
    const doc = document.documentElement;
    const body = document.body;
    if (doc.classList.contains('white')) {
        body.classList.add('loading');
        setTimeout(() => {
            body.classList.add('completed');
            setTimeout(() => {
                body.removeAttribute('class')
            }, 500);
        }, 500)
        doc.classList.remove('white')
    }
    else {
        body.classList.add('loading');
        body.classList.add('loading');
        setTimeout(() => {
            body.classList.add('completed');
            setTimeout(() => {
                body.removeAttribute('class')
            }, 500);
        }, 500)
        doc.classList.add('white')
    }
}
var f;
function changeFont() {
    const head = document.head;
    const font = document.createElement('link');
    const doc = document.documentElement;
    if (!f) {
        font.setAttribute('rel', 'stylesheet');
        font.setAttribute('href', './src/font.css');
        head.appendChild(font);
        f = true;
    }
    if (!doc.classList.contains('font')) {
        doc.classList.add('font')
    }
    else {
        doc.classList.remove('font')
    }

}

// pjax 

new Pjax({
    elements: "a:not([target])",
    selectors: [
        "title",
        "main",
        'nav',
    ],
    cacheBust: false,
})
document.addEventListener('pjax:send', () => {
    document.body.classList.add("loading")
})
document.addEventListener('pjax:complete', window.onload);
