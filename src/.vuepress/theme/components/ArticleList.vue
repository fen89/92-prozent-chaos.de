<template>
    <div>
        <router-link
            v-for="article in articles"
            :key="article.key"
            :to="article.path"
            class="block py-5 hover:bg-gray-100 border-b border-t border-transparent hover:border-gray-400 hover:text-black"
        >
        <div class="container">
            <div v-text="article.title" class="font-sans text-2xl mb-1"></div>
            <div v-text="article.frontmatter.description" class="font-content text-lg text-gray-600"></div>
        </div>
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