<template>
    <div>
        <router-link
            v-for="article in articles"
            :key="article.key"
            :to="article.path"
        >
        hello
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        articles: Array,
    }
}
</script>