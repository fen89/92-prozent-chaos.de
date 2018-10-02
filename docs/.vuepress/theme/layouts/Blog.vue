<template>
    <v-app light>
            <v-container>
                <v-layout row wrap align-center>
                    <v-flex>
                        <h2 class="headline">{{ title }}</h2>
                        <h3>BLOG</h3>
                        <pre>{{ content }}</pre>
                        <Content :custom="false"/>
                        <PostList>
                    <!-- todo -->
                </PostList>
                    </v-flex>
                </v-layout>
            </v-container>
    </v-app>
</template>

<script>
import PostList from '../components/PostList';

export default {
    name: 'blog',
    components: {
        PostList
    }, 
    computed: {
        title() {
            return this.$page.title;
        },
        content() {
            return this.$page;
        }
    }
}
</script>

<style>
    .headline {
        text-align: center;
    }
</style>
