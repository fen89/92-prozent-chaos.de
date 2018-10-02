<template>
    <v-app light>
        <GuideSidebar/>
        <v-container fluid fill-height>
            <v-layout row wrap>
                <v-flex>
                    <h2 class="headline">Guides</h2>
                    <Content :custom="false"/>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import GuideSidebar from '../components/GuideSidebar';
import PostList from '../components/PostList';

export default {
  name: 'home',
  components: {
    GuideSidebar,
    PostList
  }
};
</script>
