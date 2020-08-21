<template lang="html">
  <div
    v-lazy-container="{ selector: 'img' }"
    :class="`image-placeholder ${isRounded}`"
  >
    <figure :class="`image is-${width}x${height}`">
      <img
        :data-src="imageRequired"
        :data-loading="imageRequired"
        :width="width"
        :height="height"
        :class="classes"
        :alt="alt"
      />
      <figcaption v-if="caption">{{ caption }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'ImageResponsive',
  props: {
    backgroundColor: {
      type: String
    },
    imageUrl: {
      type: String
    },
    caption: {
      type: String
    },
    external: {
      type: Boolean
    },
    alt: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    classes: {
      type: String
    },
    alt: {
      type: String
    },
  },
  computed: {
    imageRequired() {
      return this.external
        ? this.imageUrl
        : require(`../assets/images/${this.imageUrl}`)
    },
    isRounded() {
      return this.rounded ? 'image-placeholder--rounded' : ''
    }
  }
}
</script>

<style scoped lang="scss">
.image-placeholder {
  // overflow: hidden;
  line-height: 0;
  &--rounded {
    border-radius: 100%;
  }
}
img {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  transition: all ease 0.3s;
  opacity: 0;
  &[lazy='loading'] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy='loaded'] {
    opacity: 1;
  }
    &[lazy='error'] {
    opacity: 0.7;
  }
}

figcaption {
  margin: 1em 0 0;
  font-size: 80%;
  line-height: 1.6em;
  text-align: center;
}
</style>
