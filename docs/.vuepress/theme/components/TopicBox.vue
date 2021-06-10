<template>
  <div>
    <!-- 单个主讲人时注释掉 -->
    <topic-host :host="topic.host" />
    <div>
      <h1>{{ topic.topicTitle }}</h1>
    </div>
    <div>
      <h3>{{ topic.desc }}</h3>
      <h3>{{ topic.time }}</h3>
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
