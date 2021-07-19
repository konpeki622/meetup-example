<template>
  <div class="partner-container">
    <div v-for="partner in partners" :key="partner.id">
      <img
        @click="newTabTo(partner.link)"
        class="partner-logo"
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
    newTabTo(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style src="../styles/partner.css" scoped></style>