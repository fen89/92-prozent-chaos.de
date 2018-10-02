<template>
    <v-app light>
        <Sidebar/>
        <v-container fill-height>
            <v-layout row wrap>
                <v-flex>
                    <!-- <h2 class="headline">Guides</h2> -->
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ pageTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                            <Content :custom="false"/>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import Sidebar from '../components/Sidebar';

export default {
  name: 'home',
  components: {
    Sidebar
  },
  computed: {
      frontmatter() {
          return this.$page.frontmatter;
      },
      pageTitle() {
          return this.frontmatter.title;
      }
  }
};
</script>
