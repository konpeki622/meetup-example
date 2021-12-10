<template>
  <section class="review-container">
    <ul class="review-flex-box">
      <li v-for="(review, index) in reviews" :key="index">
        <p>
          <span>{{ review.title }}</span
          ><a
            class="review-link"
            :href="review.link"
            target="_blank"
            rel="nofollow"
            >观看回放>></a
          >
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["reviews"],
};
</script>

<style src="../styles/review.css" scoped></style>
