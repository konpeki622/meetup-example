<template>
  <div class="partner-container">
    <div v-for="partner in partners" :key="partner.key">
      <img
        @click="openNewTabTo(partner.link)"
        :class="`partner-logo ${partner.key}`"
        :alt="partner.name"
        :src="partner.logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["partners"],
  methods: {
    openNewTabTo(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style src="../styles/partner.css" scoped></style>
