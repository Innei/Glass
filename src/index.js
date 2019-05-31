window.onload = function () {

    completed();
    const theme = document.getElementById('changeTheme');
    const font = document.getElementById('changeFont');
    theme.onclick = changeTheme;
    font.onclick = changeFont;

    const more_btn = document.querySelector('#more-icon > i');


    if (more_btn) {
     
        more_btn.onclick = load_more;
        window.onscroll = () => {
            let documentElement = document.documentElement;
            // 判断是否到底, chrome documentElement.scrollTop获取滚动高度  safari document.body.scrollTop获取 增加兼容性
            if (documentElement.scrollTop || document.body.scrollTop + window.innerHeight == documentElement.scrollHeight || document.body.scrollTop) {
                setTimeout(load_more, 1000)
            }
        }
    }

};

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
        }, 500);
        doc.classList.remove('white')
    } else {
        body.classList.add('loading');
        body.classList.add('loading');
        setTimeout(() => {
            body.classList.add('completed');
            setTimeout(() => {
                body.removeAttribute('class')
            }, 500);
        }, 500);
        doc.classList.add('white')
    }
}

function close_notice() {
    const close = document.querySelector('.notsupport');
    if (window.getComputedStyle(close).getPropertyValue("display") === 'none') {
        close.remove();
    } else {
        close.onclick = e => {
            e.target.style = 'animation: fade-off .5s both ease-in-out;';
            setTimeout(() => {
                e.target.remove()
            }, 500);
        }
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
    } else {
        doc.classList.remove('font')
    }

}

function load_more() {

    const loading = document.getElementById('more-loading');
    loading.style.display = 'block';
    const xhr = new XMLHttpRequest();
    xhr.open('get', './about.html');
    let dom = document.createElement('div');
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            document.querySelector('#more-icon').remove();
            loading.remove();
            const content = document.getElementById('more-content');
            content.removeAttribute('style');
            dom.innerHTML = xhr.responseText;

            content.innerHTML = dom.querySelector("main").innerHTML;

            dom = null;

        }
    };
    xhr.send();
}


// pjax

new Pjax({
    elements: "a:not([target])",
    selectors: [
        "title",
        "container",
        'nav',
    ],
    cacheBust: false,
});
document.addEventListener('pjax:send', () => {
    document.body.classList.add("loading")
});
document.addEventListener('pjax:complete', window.onload);
document.addEventListener('DOMContentLoaded', close_notice);
