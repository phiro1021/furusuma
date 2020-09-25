//レイアウトターゲットの取得
let layouts = {
    header: document.getElementsByTagName('header')[0],
    main: document.getElementsByTagName('main')[0],
    aside: document.getElementsByTagName('aside')[0],
    footer: document.getElementsByTagName('footer')[0],
}
//レイアウトの適用
Object.keys(layouts).forEach(key => {
    fetch('./layouts/' + key + '.html')
        .then(response => response.text())
        .then(data => {
            layouts[key].innerHTML = data;
        });
});

