import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import App from './app.vue';

import ChatView from './components/views/ChatView.vue';
import PollView from './components/views/PollView.vue';
import BotView from './components/views/BotView.vue';
import AlertView from './components/views/AlertView.vue';
import SongView from './components/views/SongView.vue';
import DashView from './components/views/DashView.vue';

Vue.use(Router);
Vue.use(Resource);

const router = new Router();

router.map({
  '/dash': {
    component: DashView
  },
  '/chat': {
    component: ChatView
  },
  '/poll': {
    component: PollView
  },
  '/alert': {
    component: AlertView
  },
  '/bot': {
    component: BotView
  },
  '/song': {
    component: SongView
  }
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

router.afterEach(() => {
  setTimeout(() => { componentHandler.upgradeDom(); });
});

router.redirect({
  '*': '/dash'
});

router.start(App, 'app');
