<template>
  <div class="topic-container">
    <div v-for="(topic, index) in topics" :key="topic.id" class="topic-info-box">
      <div class="topic-info-box">
        <img class="topic-host-portrait" :src="topic.host.portraitUrl" />
        <div class="topic-process">
          <div v-if="index > 0" class="process-previous"></div>
          <div class="process-node"></div>
          <div class="process-next"></div>
        </div>
        <div class="topic-detail-box">
          <div class="topic-title-flex">
            <h3>{{ topic.host.hostName }}</h3>
            <h4>{{ topic.title }}</h4>
          </div>
          <p>{{ topic.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["topics"],
};
</script>

<style src="../styles/topic.css" scoped></style>