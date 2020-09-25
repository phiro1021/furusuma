let sha = 'default';
let commits = 0;
let layouts = {};
let lock = {
    object: document.getElementById('lock'),
    set: () => { lock.object.style.display = 'block'; },
    release: () => { lock.object.style.display = 'none'; }
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

//gitHubのコミット状態を取得
const getCommits = async () => {
    fetch('https://api.github.com/repos/phiro1021/public/commits')
        .then(response => response.json())
        .then(data => {
            if (commits != data.length && sha != data[0].sha) {
                commits = data.length;
                sha = data[0].sha;
                syncLayouts();
            }
        });
}

//レイアウトの適用
const syncLayouts = async (target) => {
    lock.set();
    //レイアウト同期対象の選択
    let targets = target == null ? Object.keys(layouts) : [target];
    const sync = (() => {
        targets.forEach(key => {
            fetch('./layouts/' + key + '.html?sha=' + sha)
                .then(response => response.text())
                .then(data => {
                    layouts[key].innerHTML = data;
                });
        });
        return new Promise(resolve => setTimeout(resolve, 500));
    });
    await sync();
    lock.release();
}
//レイアウトの表示
const showLayout = async (target) => {
    layouts[target].style.display = 'block';
}
//レイアウトの非表示
const hideLayout = async (target) => {
    layouts[target].style.display = 'none';
}

window.onload = () => {
    layouts = getLayouts();
    getCommits();
}

//サーバの状態を取得し、レイアウトの変更確認
const proc = setInterval(getCommits, 3600 * 1000);

