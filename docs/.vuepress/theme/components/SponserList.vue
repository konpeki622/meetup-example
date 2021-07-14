<template>
  <div class="sponser-container">
    <div v-for="sponser in sponsers" :key="sponser.id">
        <img class="sponser-logo" :alt="sponser.name" :src="sponser.logo" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["sponsers"],
};
</script>

<style src="../styles/sponser.css" scoped></style>