<template>
    <v-btn :to="link" flat>
            {{ item.text }}
    </v-btn>
</template>

<script>
export default {
    props: {
        item: {
            required: true
        }
    },

    computed: {
        link() {
            return this.item.link;
        },

        exact() {
            if (this.$site.locales) {
                return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link);
            }

            return this.link === '/';
        }
    }
}
</script>
