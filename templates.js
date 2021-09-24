//Vue templates
let templates = [
  {
    name: 'about-main',
    template: null,
    template_url: './component/about.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false
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
        dialog: false
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
        dialog: false
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
        dialog: false
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
        dialog: false
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
        dialog: false
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

