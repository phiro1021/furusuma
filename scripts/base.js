let sha = 'default';
let commits = {};
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
            if (commits.length != data.length && sha != data[0].sha) {
                commits = data;
                sha = commits[0].sha;
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
    let commitList = document.getElementById('commits');
    commitList.innerHTML = '';
    commits.forEach((commit, index) => {
        if(index < 8) {
            let li = document.createElement('li');
            let div = document.createElement('div');
            div.innerHTML = dateFormat(new Date(commit.commit.committer.date), 'YYYY/MM/DD') + '<br>　' + commit.commit.message;
            li.appendChild(div);
            commitList.appendChild(li);    
        }
    });
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

//イベントオブザーバ
window.onload = () => {
    layouts = getLayouts();
    getCommits();
}

//サーバの状態を取得し、レイアウトの変更確認
// const proc = setInterval(getCommits, 3600 * 1000);
const proc = setInterval(() => {
    // console.log('log');
}, 20 / 1000);


/** 日付の取得 */
const dateFormat = (date, format) => {
    let weekday = ["日", "月", "火", "水", "木", "金", "土"];
    format = format != null ? format : 'YYYY/MM/DD(WW) hh:mm:ss';
    date = date != null ? date : new Date();
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/YY/g, ('0' + date.getFullYear()).slice(-2));
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/WW/g, weekday[date.getDay()]);
    format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/Y/g, date.getFullYear());
    format = format.replace(/M/g, (date.getMonth() + 1));
    format = format.replace(/D/g, date.getDate());
    format = format.replace(/h/g, date.getHours());
    format = format.replace(/m/g, date.getMinutes());
    format = format.replace(/s/g, date.getSeconds());
    return format;
}