<template>
    <div class="theme-container" :class="pageClasses">
        <v-app light>
            <Navbar @toggle-sidebar="toggleSidebar"/>
            <v-content>
                <MainHero v-if="isHeroVisible"/>
                <component class="main-content" :is="layout" :class="{ 'mt-5': !isHeroVisible }"/>
                <Footer/>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import nprogress from 'nprogress';

import Home from './layouts/Home';
import Blog from './layouts/Blog';
import Guide from './layouts/Guide';
import GuidePost from './layouts/GuidePost';
import Post from './layouts/Post';
import MainHero from './components/MainHero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
    name: 'layout',
    components: {
        Home,
        Blog,
        Guide,
        GuidePost,
        Post,
        MainHero,
        Navbar,
        Footer
    },

    data() {
        return {
            isSidebarOpen: false
        };
    },

    computed: {
        layout() {
            const { path } = this.$page;

            if (path === '/') {
                return 'home';
            } else if (new RegExp('^/blog/$').test(path)) {
                return 'blog';
            } else if (new RegExp('^/guides/$').test(path)) {
                return 'guide';
            } else if (new RegExp('^/guides/').test(path)) {
                return 'guide';
            } else {
                return 'post';
            }
        },

        isHeroVisible() {
            const { path } = this.$page;
            if (path === '/') {
                return true;
            } 

            return false;
        },

        pageClasses() {
            return `${this.layout}-page`;
        },
    },

    mounted() {
        // nprogress bar config
        nprogress.configure({ showSpinner: true });

        this.$router.beforeEach((to, from, next) => {
            if (to.path !== from.path) {
                nprogress.start();
            }

            next();
        });

        this.$router.afterEach(() => {
            nprogress.done();
        });
    },

    methods: {
        toggleSidebar(to) {
            this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
        }
    }
}
</script>

<style src="./styles/theme.styl" lang="stylus"></style>