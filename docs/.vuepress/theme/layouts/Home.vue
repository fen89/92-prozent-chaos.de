<template>
    <v-app light>
        <v-container>
            <v-layout row wrap align-center>
                 <Content/>
            </v-layout>
            <v-layout row wrap align-center>
                <v-flex xs12 class="my-3">
                   <v-container>
                        <h1>Aktuelle Blogbeiträge</h1>
                   </v-container>
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
