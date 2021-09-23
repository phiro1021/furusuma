const init = async () => {
  //Vue templates
  let templates = [
    { name: 'about-main', template: null, url: './component/about.html' },
    { name: 'work-main', template: null, url: './component/work.html' },
    { name: 'game-main', template: null, url: './component/game.html' },
    { name: 'tool-main', template: null, url: './component/tool.html' },
    { name: 'blog-main', template: null, url: './component/blog.html' },
    { name: 'help-main', template: null, url: './component/help.html' }
  ];
  const getTemplate = (name) => {
    return templates.find((template) => {
      return template.name == name;
    });
  };

  await Promise.all(templates.map(async template => {
    await axios.get(template.url, {
      headers: {
        "Content-Type": "	text/html"
      },
      data: {}
    })
      .then((result) => {
        template.template = {
          props: ['id'],
          template: result.data
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  }));

  //vue route set
  const routes = [
    { path: '/about', component: getTemplate('about-main').template, props: true, },
    { path: '/work', component: getTemplate('work-main').template, props: true },
    { path: '/game', component: getTemplate('game-main').template, props: true, },
    { path: '/tool', component: getTemplate('tool-main').template, props: true, },
    { path: '/blog', component: getTemplate('blog-main').template, props: true, },
    { path: '/help', component: getTemplate('help-main').template, props: true, }
  ];

  new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router: new VueRouter({
      routes: routes
    }),
    data: () => ({
      drawer: null,
      overlay: false,
    }),
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    },
    computed: {
      username() {
        // `params` が表示される
        return this.$route.params.username
      }
    },
  }).$mount('#app')
}

init();
