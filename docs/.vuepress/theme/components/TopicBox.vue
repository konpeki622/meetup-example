<template>
  <section>
    <div>
      <h1>{{ topic.topicTitle }}</h1>
    </div>
    <div>
      <h3>{{ topic.desc }}</h3>
      <h3>{{ topic.time }}</h3>
    </div>
  </section>
</template>

<script>

export default {

  props: ["topic"],
};
</script>
<style src="../styles/topic.css" scoped></style>
