<template>
  <div class="topic-box">
    <!-- 单个主讲人时注释掉 -->
    <topic-host :host="topic.host" />
    <div>
      <h1>{{ topic.topicTitleEn }}</h1>
      <h1>{{ topic.topicTitle }}</h1>
    </div>
    <div>
      <h3>{{ topic.scheduleDateEn }}</h3>
      <h3>{{ topic.scheduleDate }}</h3>
      <h3>{{ topic.scheduleTime }}</h3>
      <h3>{{ topic.meetingPlaceEn }}</h3>
      <h3>{{ topic.meetingPlace }}</h3>
    </div>
  </div>
</template>

<script>
import TopicHost from "./TopicHost";

export default {
  components: {
    TopicHost,
  },

  props: ["topic"],
};
</script>
<style src="../styles/topic.css" scoped></style>
