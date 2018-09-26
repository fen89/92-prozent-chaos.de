<template>
    <v-app light>
        <v-container>
            <v-layout row wrap align-center>
                <PostList>
                    <!-- todo -->
                </PostList>
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
}
</script>
