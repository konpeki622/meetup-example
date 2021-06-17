<template>
  <section class="theme-container">
    <div id="theme-banner">
      <img
        alt="深圳"
        src="/assets/images/banner.jpeg"
        class="theme-banner-background"
      />
      <img
        alt="vue.js"
        src="/assets/images/v-logo.png"
        class="theme-banner-logo"
      />
      <h1>VUE SHENZHEN · 深圳</h1>
      <div>
        <a
          href="https://www.huodongxing.com/people/4924099457396"
          target="_blank"
          rel="”nofollow”"
          >Register now · 立刻报名</a
        >
      </div>
    </div>
    <div id="theme-divider"></div>
    <div id="theme-body">
      <div class="theme-title">
        <h2>LOCATION · 举办地点</h2>
      </div>
      <!-- <p>{{ time }} | {{ location }}</p> -->
      <p>深圳市龙岗坂田天安云谷</p>
      <div class="theme-title">
        <h2>SCHEDULE · 活动日程</h2>
      </div>
      <!-- <topic-list :list="topicList" /> -->
      <p>敬请期待</p>
      <div class="theme-title">
        <h2>GUEST SPEAKER·演讲嘉宾</h2>
      </div>
      <p>敬请期待</p>
    </div>

    <div class="theme-title">
      <h2>CONTACT US·联系我们</h2>
    </div>
    <div class="theme-bottom">
      <img
        alt="vueshenzhen"
        src="/assets/images/vuesz_code.gif"
        class="theme-bottom-img"
      />
      <img
        alt="vueshenzhen"
        src="/assets/images/vuesz_code_mobile.gif"
        class="theme-bottom-img--mobile"
      />
      <div class="theme-bottom-slogan">{{ contact }}</div>
    </div>
  </section>
</template>

<script>
// import TopicList from "../components/TopicList";
// import portraitImg from "../../public/assets/images/portrait-example1.jpg";

export default {
  // components: {
  //   TopicList,
  // },

  data() {
    return {
      location: "深圳华为坂田基地F3",
      time: "2021年6月1日",
      contact: "扫码加入VUE SHENZHEN微信群",
      // topicList: [
      //   {
      //     id: "1",
      //     topicTitle: "Vite，下一代Web工具",
      //     time: "9:00AM-10:00AM",
      //     desc: "分享内容主要是现有Web开发的痛点以及Vite的解决方案。",
      //     host: {
      //       portraitUrl: portraitImg,
      //       hostName: "李梦媛",
      //       joinWay: "远程参与",
      //       hostNameEn: "Mengyuan",
      //       hostDesc: "前Google Creative Lab成员",
      //       hostRole: "Vue.js开发者",
      //     },
      //   },
      //   {
      //     id: "2",
      //     topicTitle: "Vite，下一代Web工具",
      //     time: "10:00AM-0:00PM",
      //     desc: "分享内容主要是现有Web开发的痛点以及Vite的解决方案。",
      //     host: {
      //       portraitUrl: portraitImg,
      //       hostName: "李梦媛",
      //       joinWay: "远程参与",
      //       hostNameEn: "Mengyuan",
      //       hostDesc: "前Google Creative Lab成员",
      //       hostRole: "Vue.js开发者",
      //     },
      //   },
      //   {
      //     id: "3",
      //     topicTitle: "Vite，下一代Web工具",
      //     time: "2:00PM-3:00PM",
      //     desc: "分享内容主要是现有Web开发的痛点以及Vite的解决方案。",
      //     host: {
      //       portraitUrl: portraitImg,
      //       hostName: "李梦媛",
      //       joinWay: "远程参与",
      //       hostNameEn: "Mengyuan",
      //       hostDesc: "前Google Creative Lab成员",
      //       hostRole: "Vue.js开发者",
      //     },
      //   },
      // ],
    };
  },
};
</script>

<style src="../styles/index.css" scoped></style>