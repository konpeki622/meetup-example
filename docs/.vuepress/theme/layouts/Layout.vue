<template>
  <section class="theme-container">
    <div class="theme-banner">
      <img src="../../public/v-logo.png" class="theme-logo" />
      <h1>VUE SHENZHEN · 深圳</h1>
      <div>
        <a>Register now · 立刻报名</a>
      </div>
    </div>
    <div class="theme-body">
      <div class="theme-title">
        <p></p>
        <h2>LOCATION</h2>
      </div>
      <p>{{ time }} | {{ location }}</p>
      <div class="theme-title">
        <p></p>
        <h2>SCHEDULE</h2>
      </div>
      <topic-list :list="topicList" />
    </div>
  </section>
</template>

<script>
import TopicList from "../components/TopicList";
import portraitImg from "../../public/portrait-example1.jpg";

export default {
  components: {
    TopicList,
  },

  data() {
    return {
      location: "深圳华为坂田基地F3",
      time: "2021年6月1日",
      topicList: [
        {
          id: "1",
          topicTitle: "Vite，下一代Web工具",
          time: "9:00AM-10:00AM",
          desc: "分享内容主要是现有Web开发的痛点以及Vite的解决方案。",
          host: {
            portraitUrl: portraitImg,
            hostName: "李梦媛",
            joinWay: "远程参与",
            hostNameEn: "Mengyuan",
            hostDesc: "前Google Creative Lab成员",
            hostRole: "Vue.js开发者",
          },
        },
        {
          id: "2",
          topicTitle: "Vite，下一代Web工具",
          time: "10:00AM-0:00PM",
          desc: "分享内容主要是现有Web开发的痛点以及Vite的解决方案。",
          host: {
            portraitUrl: portraitImg,
            hostName: "李梦媛",
            joinWay: "远程参与",
            hostNameEn: "Mengyuan",
            hostDesc: "前Google Creative Lab成员",
            hostRole: "Vue.js开发者",
          },
        },
        {
          id: "3",
          topicTitle: "Vite，下一代Web工具",
          time: "2:00PM-3:00PM",
          desc: "分享内容主要是现有Web开发的痛点以及Vite的解决方案。",
          host: {
            portraitUrl: portraitImg,
            hostName: "李梦媛",
            joinWay: "远程参与",
            hostNameEn: "Mengyuan",
            hostDesc: "前Google Creative Lab成员",
            hostRole: "Vue.js开发者",
          },
        },
      ],
    };
  },
};
</script>

<style src="../styles/index.css" scoped></style>