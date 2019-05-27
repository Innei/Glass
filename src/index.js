window.onload = function () {
    document.body.classList.remove('loading');
    const btn = document.getElementById('changeTheme');
    btn.onclick = changeTheme;
}

function changeTheme() {
    const doc = document.querySelector('html');
    const body = document.body;
    if (doc.classList.contains('white')) {
       body.classList.add('loading');
        setTimeout(() => {
            document.body.classList.remove('loading');
        },500)
        doc.classList.remove('white')
    }
    else {
        body.classList.add('loading');
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 500)
        doc.classList.add('white')
    }
}