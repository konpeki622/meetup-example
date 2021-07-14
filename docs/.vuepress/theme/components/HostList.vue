<template>
  <section class="host-container">
    <div class="host-box" v-for="host in hosts" :key="host.id">
      <div class="host-portrait">
        <img
          :class="`portrait-img${host.portraitUrl? '' : '--default'}`"
          :alt="host.hostName"
          :src="
            host.portraitUrl
              ? host.portraitUrl
              : '/assets/images/default-portrait.png'
          "
        />
      </div>
      <div class="host-detail">
        <div class="host-text-name">{{ host.hostName }}</div>
        <div class="host-text-desc" v-if="host.hostDesc">
          {{ host.hostDesc }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["hosts"],
};
</script>

<style src="../styles/host.css" scoped></style>