<template>
  <div id="global-layout">
    <header id="global-header">
      <div id="global-header-theme">
        <!-- <img id="global-header-logo" /> -->
        <h1 id="global-header-title">VUE SHENZHEN</h1>
      </div>
      <h1 id="global-header-options">Contact</h1>
    </header>
    <component :is="layout"></component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFount";
    },
  },
};
</script>

<style src="../styles/global.css" scoped></style>
