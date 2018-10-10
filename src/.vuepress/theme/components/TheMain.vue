<template>
    <main class="main">
        <component :is="layout" :key="$page.path" />
    </main>
</template>

<script>
import Home from "../layouts/Home";
import Post from "../layouts/Post";
import Page from "../layouts/Page";

export default {
    name: 'TheMain',

    components: {
        Home,
        Post,
        Page
    },

    props: {
        layout: {
            type: String,
            required: true
        }
    },
}
</script>
