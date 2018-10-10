<template>
    <div>
        <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        dark 
        app
        fixed 
        color="teal darken-3"
    >
        <v-toolbar-title style="" class="navigation-title ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <span class="hidden-sm-and-down" v-text="title"></span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <TheHeaderNavLinks :links="links"/>
    </v-toolbar>
    <TheHeaderBanner v-if="isHome" />
    </div>
</template>

<script>
import TheHeaderNavLinks from './TheHeaderNavLinks';
import TheHeaderBanner from './TheHeaderBanner';

export default {
    components: {
        TheHeaderNavLinks,
        TheHeaderBanner
    },
    data() {
        return {
            drawer: null,
            title: '92 % chaos',
            links: [
                { title: 'Home' },
            ]
        };
    },
    computed: {
        isHome() {
            return this.$page.path === '/';
        }
    }
}
</script>

<style scoped>
    .navigation-title {
        width: 300px; 
        z-index: 999;
    }
</style>

