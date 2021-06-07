<template>
  <div class="topic-container">
      <div v-for="topic in list" :key="topic.id" class="topic-info-box">
        <topic-box :topic="topic" />
      </div>
  </div>
</template>

<script>
import TopicBox from "./TopicBox";

export default {
  props: ["list"],

  components: {
    TopicBox,
  },
};
</script>

<style src="../styles/topic.css" scoped></style>