
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// const Foo = { template: '<div>Master</div>' }
// const Bar = { template: '<div>Senpai</div>' }

//import component
import index from './components/Index.vue';
import create from './components/Create.vue';

Vue.component('example-component', require('./components/ExampleComponent.vue'));
const routes = [
    { path: '/', component: index },
    { path: '/create', component: create }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

const app = new Vue({
    router
}).$mount('#add')
