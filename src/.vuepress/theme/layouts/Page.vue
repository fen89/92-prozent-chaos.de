<template>
    <v-app light>
        <v-container>
            <v-layout row wrap align-center>
                <v-flex>
                    <v-card>
                        <v-img
                            class="white--text"
                            height="50vh"
                            :src="$withBase(postFeaturedImage)"
                        >
                        </v-img>
                        <v-card-title>
                            <span class="headline">{{ title }}</span>
                            <v-chip absolute top right v-for="category of categories" :key="category">{{ category }}</v-chip>
                        </v-card-title>
                        <v-card-text>
                            {{ $page.frontmatter.date }}
                        </v-card-text>
                        <v-card-text class="article">
                            <!-- <pre>cat: {{ $page }}</pre> -->
                            <Content :custom="false"/>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {
    computed: {
        postFeaturedImage() {
            return this.$page.frontmatter.image || 'https://picsum.photos/g/600/400/?random';
        },
        title() {
            return this.$page.title;
        },
        categories() {
            return this.$page.frontmatter.categories;
        }
    }
}
</script>

