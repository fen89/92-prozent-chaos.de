<template>
    <div class="theme-container" :class="pageClasses">
        <v-app light>
            <Navbar/>
            <v-content>
                <MainHero/>
                <component class="main-content" :is="layout"/>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import nprogress from 'nprogress';

import Home from './layouts/Home';
import Blog from './layouts/Blog';
import Post from './layouts/Post';
import MainHero from './components/MainHero';
import Navbar from './components/Navbar';

export default {
    name: 'layout',
    components: {
        Home,
        Blog,
        Post,
        MainHero,
        Navbar
    },

    computed: {
        layout() {
            const { path } = this.$page;
            console.log('path', path);
            if (path === '/') {
                return 'home';
            } else if (new RegExp('^/blog/$').test(path)) {
                return 'blog';
            } else {
                return 'post';
            }
        },

        pageClasses() {
            return `${this.layout}-page`;
        },
    },

    mounted() {
        // nprogress bar config
        nprogress.configure({ showSpinner: false });

        this.$router.beforeEach((to, from, next) => {
            if (to.path !== from.path) {
                nprogress.start();
            }

            next();
        });

        this.$router.afterEach(() => {
            nprogress.done();
        });
    }
}
</script>

<style src="./styles/theme.styl" lang="stylus"></style>