<template>
    <v-app light>
        <v-container>
            <v-layout row wrap align-center>
                <v-flex xs12 sm4 class="my-3">
                    <h2 class="headline">Latest Blog posts</h2>
                </v-flex>
                <PostList/>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import PostList from '../components/PostList';

export default {
  name: 'home',
  components: {
    PostList
  }
};
</script>
