<template>
  <div class="topic-container">
    <div v-for="(topic, index) in topics" :key="index" class="topic-info-box">
      <div class="topic-info-box">
        <img
          v-if="topic.host"
          :alt="topic.host.hostName"
          class="topic-host-portrait"
          :src="topic.host.portraitUrl"
        />
        <div class="topic-process">
          <div v-if="index > 0" class="process-previous"></div>
          <div class="process-node"></div>
          <div v-if="index < topics.length - 1" class="process-next"></div>
        </div>
        <div class="topic-detail-box">
          <div class="topic-title-flex">
            <h3 v-if="topic.host">{{ topic.host.hostName }}</h3>
            <h4>{{ topic.title }}</h4>
          </div>
          <p class="topic-schedule">{{ topic.schedule }}</p>
          <p class="topic-description">{{ topic.description }}</p>
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
