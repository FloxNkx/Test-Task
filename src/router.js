import Vue from 'vue';
import Home from './views/Home';
import Router from 'vue-router';
import Winners from './views/Winners';
import Episode from './views/Episode';
import Seasons from './views/Seasons';
import Favourite from './views/Favourite';
import Character from './views/Character';
import Occupation from './views/Occupation';
import AppNotFound from './views/AppNotFound';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/seasons/:id',
      name: 'season',
      component: Seasons,
    },
    {
      path: "/season/:s_id/episode/:e_id",
      name: "episode-details",
      component: Episode,
      props: true
    },
    {
      path: "/character/:ch_id",
      name: "character",
      component: Character,
      props: true
    },
    { 
      name: 'occupation', 
      path: '/occupation', 
      component: Occupation,
    },
    { 
      name: 'favourite', 
      path: '/favourite', 
      component: Favourite,
    },
    { 
      name: 'winners', 
      path: '/winners', 
      component: Winners,
    },
    { 
      name: 'notFound', 
      path: '*', 
      component: AppNotFound,
    }
  ]
})
