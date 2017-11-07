import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/views/HelloWorld';
import Sheet from '@/views/Sheet';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld,
    },
    {
      path: '/sheet/:id',
      name: 'sheet',
      component: Sheet,
    },
  ],
});
