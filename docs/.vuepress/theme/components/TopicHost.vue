<template>
  <section class="info-container">
    <img class="portrait-img" :src="host.portraitUrl" />
    <div class="info-detail">
      <div class="info-text-name">{{ host.hostName }}</div>
      <div class="info-text-role">{{ host.hostRole }}</div>
      <div class="info-text-desc">{{ host.hostDesc }}</div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["host"],
};
</script>

<style src="../styles/host.css" scoped></style>