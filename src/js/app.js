import Twitch from './vendor/twitch';

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


/**
 * Initialize Twitch Node SDK
 */
Twitch.init({
  clientId: 'fkk3fkefezb58675yxpxu4ggh5ydgoq',
  electron: true
}, (err, status) => {
  // TODO: BREAK ALL THE THINGS, warn user about not connecting
  if(err) console.log(err);
  else startWatchers();
});

function startWatchers() {
  /**
   * Update Twitch Auth in root Vue on login
   */
   Twitch.events.addListener('auth.login', function(status) {
    router.app.auth(status.authenticated);
   });
}

/**
 * Initialize Router
 */
Vue.use(Router);
Vue.use(Resource);

const router = new Router();

router.map({
  '/dash': { component: DashView },
  '/chat': { component: ChatView },
  '/poll': { component: PollView },
  '/alert': { component: AlertView },
  '/bot': { component: BotView },
  '/song': { component: SongView }
});

router.beforeEach(({to, next}) => {
  /**
   * Login before loading view
   */
  if(!router.app.Twitch.authenticated) {
    Twitch.login({
      scope: ['user_read', 'channel_read']
    });

    /**
     * Wait for channel obj, then transisiton
     */
    let unwatch = router.app.$watch('Twitch.channel', (nVal) => {
      if(nVal) {
        unwatch();
        next();
      }
    });
  } else next();
  window.scrollTo(0, 0);
});

router.afterEach(() => {
  setTimeout(() => { componentHandler.upgradeDom(); });
});

router.redirect({
  '*': '/dash'
});

/**
 * Start app
 */
router.start(App, 'app');
