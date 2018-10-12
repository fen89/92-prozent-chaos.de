<template>
    <v-app light>
        <v-container>
            <v-layout row wrap align-center>
                 <Content/>
            </v-layout>
            <!-- <TheCategoryFilter/> -->
            <v-layout row wrap align-center>
                <PostList/>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import TheCategoryFilter from '../components/TheCategoryFilter';
import PostList from "../components/PostList";

export default {
  name: "Home",
  components: {
    TheCategoryFilter,
    PostList
  }
};
</script>
