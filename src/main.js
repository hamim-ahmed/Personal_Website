import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import MainComponent from './components/MainComponent.vue'
import about from './components/about.vue'
import home from './components/home.vue'
import resume from './components/resume.vue'
import mywork from './components/mywork.vue'
import contact from './components/contact.vue'
import more from './components/more.vue'
import test from './components/test.vue'
import skills from './components/skills.vue'
import blog from './components/blog.vue'



const router= createRouter({
    history: createWebHistory(),
    routes:[
        // {path: '/about', component: about},
        // {path: '/', component: home},
        // {path: '/resume', component: resume},
        // {path: '/mywork', component: mywork},
        // {path: '/knowmore', component:more},
        // {path: '/contact', component: contact},
        // {path: '/test', component:test},
        // {path: '/myblogs', component: blog},
         
        {
          path: '/myblogs',
          name: 'blog',
          component: blog,
        },
        {
            path: '/',
            name: 'MainComponent',
            component: MainComponent,
          },
       
    ]
});

const app = createApp(App)
    app.component('MainComponent',MainComponent)
    app.component('home',home)
    app.component('about',about)
    app.component('resume',resume)
    app.component('mywork', mywork)
    app.component('knowmore', more)
    app.component('contact', contact)
    app.component('test', test)
    app.component('skills', skills)
    app.component('blog',blog)



app.use(router);
app.mount('#app');

