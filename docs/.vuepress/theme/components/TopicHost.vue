<template>
  <div class="info-container">
    <img class="portrait-img" :src="host.portraitUrl" />
    <div class="info-detail">
      <div class="info-text-name">{{ host.hostName }} · {{ host.hostNameEn }}</div>
      <div class="info-text-role">{{ host.hostDesc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["host"],
};
</script>

<style src="../styles/host.css" scoped></style>