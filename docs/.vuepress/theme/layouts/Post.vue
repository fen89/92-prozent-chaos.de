<template>
    <v-app light>
            <v-container>
                <v-layout row wrap align-center>
                    <v-flex>
                        <h2 class="headline">{{ title }}</h2>
                    <Content :custom="false"/>
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
