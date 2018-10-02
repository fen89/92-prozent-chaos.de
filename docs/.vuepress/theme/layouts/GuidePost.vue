<template>
    <v-app light>
        <v-container fluid>
            <v-layout row wrap align-center>
                <v-flex>
                    <v-card>
                        <!-- <v-img
                            class="white--text"
                            height="170px"
                            src="https://picsum.photos/g/600/400/?random"
                        >
                        </v-img> -->
                        <v-card-title>
                            <span class="headline">{{ title }}</span>
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
export default {
    computed: {
        title() {
            return this.$page.title;
        }
    }
}
</script>

<style>
    .headline {
        text-align: center;
    }
</style>
