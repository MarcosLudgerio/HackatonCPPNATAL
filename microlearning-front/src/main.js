import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import LoadScript from 'vue-plugin-load-script';


//Rotas
import Home from './routes/Home.vue';
import Equipe from './routes/Equipe.vue'
import NotFound from './routes/Home.vue';
import Trilhas from './routes/Trilhas.vue';
import Entrar from './routes/Entrar.vue';
import Trilha from './routes/Trilha.vue';

Vue.use(LoadScript)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', name: 'Home' ,component: Home},
  {path: '/equipe', name:'Equipe', component: Equipe},
  {path:'/trilhas', name:'Trilhas', component: Trilhas},
  {path:'/trilha', name:'Trilha', component: Trilha},
  {path: '/entrar', name:'Entrar', component: Entrar}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render: h => h(App),
})
