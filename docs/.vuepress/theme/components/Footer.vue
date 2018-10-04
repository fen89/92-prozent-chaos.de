<template>
<v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <!-- <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
      </v-card-title> -->

      <v-card-actions class="grey darken-3 justify-center">
        &copy; {{ year }} — <span class="pl-1 font-weight-bold">{{ copyright }}</span>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    computed: {
      copyright() {
        return '92-prozent-chaos.de';
      },
      year() {
        const date = new Date();
        return date.getFullYear();
      }
    }
}
</script>
