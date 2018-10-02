<template>
    <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        dark 
        app
        fixed 
        color="teal darken-3"
    >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <span class="hidden-sm-and-down" v-text="title"></span>
        </v-toolbar-title>
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
            drawer: null,
            title: '92 % chaos',
            links: [
                { title: 'Home' },
            ]
        };
    }
}
</script>
