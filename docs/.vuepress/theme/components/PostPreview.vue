<template>
<v-card>
                <v-img
                  :src="post.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline" v-text="post.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                   <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :to="post.path" flat class="blue--text">
                        Read More
                    </v-btn>
                    </v-card-actions>
                </v-card-actions>
              </v-card>
</template>

<script>
export default {
  props: {
    post: {
      required: true
    }
  },

  computed: {
    postPreview() {
      return this.post;
    },
    postDate() {
      const {
        frontmatter: { date }
      } = this.post;

      return new Date(date).toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
};
</script>
