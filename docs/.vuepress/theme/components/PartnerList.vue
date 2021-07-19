<template>
  <div class="partner-container">
    <div v-for="partner in partners" :key="partner.id">
        <img class="partner-logo" :alt="partner.name" :src="partner.logo" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["partners"],
};
</script>

<style src="../styles/partner.css" scoped></style>