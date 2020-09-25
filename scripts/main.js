let sha = '';
let commits = 0;
let layouts = {};

window.onload = ()=> {
    layouts = getLayouts();
    setLayouts();
}

//レイアウトターゲットの取得
const getLayouts = () => {
    return {
        header: document.getElementsByTagName('header')[0],
        main: document.getElementsByTagName('main')[0],
        aside: document.getElementsByTagName('aside')[0],
        footer: document.getElementsByTagName('footer')[0],
    }
}

//サーバの状態を取得し、レイアウトの変更確認
const proc = setInterval(() => {
    fetch('https://api.github.com/repos/phiro1021/public/commits')
        .then(response => response.json())
        .then(data => {
            if (commits != data.length && sha != data[0].sha) {
                commits = data.length;
                sha = data[0].sha;
                setLayouts();
            }
        });
}, 60 * 1000);

//レイアウトの適用
const setLayouts = () => {
    Object.keys(layouts).forEach(key => {
        fetch('./layouts/' + key + '.html')
            .then(response => response.text())
            .then(data => {
                layouts[key].innerHTML = data;
            });
    });
}
