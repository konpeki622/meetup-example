<template>
  <section class="theme-container">
    <div id="theme-banner">
      <img
        alt="深圳"
        src="/assets/images/banner-back.png"
        class="banner-background-img"
      />
      <div class="banner-container">
        <img
          id="banner"
          alt="vueshenzhen"
          src="/assets/images/banner-main.png"
          class="banner-img"
        />
        <img alt="vue.js" src="/assets/images/v-logo.png" class="banner-logo" />
        <h1>VUE SHENZHEN · 深圳</h1>
        <h5>meetup</h5>
        <a
          href="https://www.huodongxing.com/people/4924099457396"
          target="_blank"
          rel="nofollow"
          >Register now · 立刻报名</a
        >
      </div>
    </div>
    <div id="theme-body">
      <div class="body-divider-back"></div>
      <div class="body-divider-box">
        <div class="body-divider"></div>
      </div>
      <div class="body-container">
        <img
          alt="top-img"
          src="/assets/images/body-top.png"
          class="body-top-img"
        />
        <div class="body-box">
          <h2>ABOUT US · 关于我们</h2>
          <p>{{ description }}</p>
          <h2>TIME · 举办时间</h2>
          <p>
            <span
              ><img
                src="/assets/images/time-icon.png"
                class="body-box-time-icon" /></span
            ><span>{{ time }}</span>
          </p>
          <h2>LOCATION · 举办地点</h2>
          <p>{{ location }}</p>
          <h2 style="margin-bottom: 16px">SCHEDULE · 活动日程</h2>
          <topic-list :topics="topicList"></topic-list>
          <h2>GUEST SPEAKER · 演讲嘉宾</h2>
          <host-list :hosts="hostList"></host-list>
          <h2 style="margin-bottom: 8px">CONTACT US · 联系我们</h2>
          <div class="body-box-code">
            <img
              alt="vueshenzhen-code"
              src="/assets/images/vuesz-code.gif"
              class="body-box-code-img"
            />
            <div class="body-box-code-slogan">{{ contact }}</div>
          </div>
        </div>
        <div class="body-box-sponsor">
          <h2>SPONSOR · 赞助者</h2>
          <p>
            <sponser-list :sponsers="sponserList"></sponser-list>
          </p>
        </div>
        <img
          alt="bottom-img"
          src="/assets/images/body-bottom.png"
          class="body-bottom-img"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HostList from "../components/HostList.vue";
import SponserList from "../components/SponserList.vue";
import TopicList from "../components/TopicList.vue";

export default {
  components: {
    TopicList,
    HostList,
    SponserList,
  },

  data() {
    return {
      description:
        "Vue Shenzhen 是由一群 Vue.js 开发爱好者自发成立的位于深圳的本地组织，旨在将热情的 Vue.js 开发人员联系起来共同学习和成长。",
      location: "深圳市龙岗区坂田天安云谷（暂定）",
      time: "2021年8月21日 周六",
      contact: "扫码关注 VUE SHENZHEN 公众号",
      topicList: [
        {
          id: 1,
          host: {
            hostName: "林成璋",
            hostDesc:
              "Vue.js 团队成员，Vue 3 JSX 插件维护者，字节跳动前端工程师",
            portraitUrl: "/assets/images/amour1688.jpeg",
          },
          title: "Vue 3 + TypeScript 深度实践",
          description:
            "以 Vue3 的静态类型系统实现为切入点，帮助初学者由浅入深学习 TypeScript",
        },
      ],
      hostList: [
        {
          id: 1,
          hostName: "林成璋 (Amour1688)",
          hostDesc:
            "Vue.js 团队成员，Vue 3 JSX 插件维护者，字节跳动前端工程师。",
          portraitUrl: "/assets/images/amour1688.jpeg",
        },
        { hostName: "神秘嘉宾", hostDesc: "敬请期待" },
      ],
      sponserList: [
        {
          name: "掘金",
          logo: "/assets/images/juejin-logo.png",
        },
      ],
    };
  },
};
</script>

<style src="../styles/index.css" scoped></style>