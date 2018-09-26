<template>
    <v-toolbar class="white">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <NavLinks :links="links"/>
    </v-toolbar>
</template>

<script>
import NavLinks from './NavLinks';

export default {
    components: {
        NavLinks
    },
    data() {
        return {
            title: '92-percent-chaos',
            links: [
                { title: 'Home' },
            ]
        };
    }
}
</script>
