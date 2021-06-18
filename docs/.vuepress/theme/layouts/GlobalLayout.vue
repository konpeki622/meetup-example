<template>
  <div id="global-layout">
    <header id="global-header">
      <div id="global-header-theme">
        <!-- <img id="global-header-logo" /> -->
        <h1 id="global-header-title">VUE SHENZHEN · 深圳</h1>
      </div>
      <!-- <h1 id="global-header-options">Contact</h1> -->
    </header>
    <component :is="layout"></component>
  </div>
</template>

<script>
export default {
  created() {
    (function () {
      var bp = document.createElement("script");
      var curProtocol = window.location.protocol.split(":")[0];
      if (curProtocol === "https") {
        bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
      } else {
        bp.src = "http://push.zhanzhang.baidu.com/push.js";
      }
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
    })();
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
  },
};
</script>

<style src="../styles/global.css" scoped></style>
