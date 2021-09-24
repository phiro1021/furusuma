//Vue templates
let templates = [
  {
    name: 'about-main',
    template: null,
    template_url: './component/about.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          { title: 'About Me', href: '' },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'work-main',
    template: null,
    template_url: './component/work.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          { title: '仕事内容', href: '' },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'game-main',
    template: null,
    template_url: './component/game.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          { title: 'ぼくの自由研究所web', href: 'https://kids-labo.atelierent.jp/' },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'tool-main',
    template: null,
    template_url: './component/tool.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          { title: '日曜運営局', href: 'https://sun.atelierent.jp' },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'blog-main',
    template: null,
    template_url: './component/blog.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          { title: 'Qiita', href: 'https://qiita.com/phiro1021' },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'help-main',
    template: null,
    template_url: './component/help.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          { title: 'このページについて', href: '' },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  }
];

const getTemplate = (name) => {
  return templates.find((template) => {
    return template.name == name;
  });
};

