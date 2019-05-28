window.onload = function () {
   
    document.body.classList.add('completed');
    setTimeout(() => {
        document.body.removeAttribute('class')
    }, 500);
    const btn = document.getElementById('changeTheme');
    btn.onclick = changeTheme;
}

function changeTheme() {
    const doc = document.documentElement;
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