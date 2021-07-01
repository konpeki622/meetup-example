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
          alt="深圳"
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
          alt="vueshenzhen-top-img"
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
                alt="vueshenzhen-time-icon"
                src="/assets/images/time-icon.png"
                class="body-box-time-icon" /></span
            ><span>{{ time }}</span>
          </p>
          <h2>LOCATION · 举办地点</h2>
          <p>{{ location }}</p>
          <h2>SCHEDULE · 活动日程</h2>
          <p>敬请期待</p>
          <h2>GUEST SPEAKER · 演讲嘉宾</h2>
          <host-list :hosts="hostList"></host-list>
          <h2 style="margin-bottom: 0.5rem">CONTACT US · 联系我们</h2>
          <div class="body-box-code">
            <img
              alt="vueshenzhen-code"
              src="/assets/images/vuesz-code-mobile.gif"
              class="body-box-code-img"
            />
            <div class="body-box-code-slogan">{{ contact }}</div>
          </div>
        </div>
        <div class="body-box-sponsor">
          <h2>BECOME A SPONSOR · 成为赞助者</h2>
          <p>虚位以待</p>
        </div>
        <img
          alt="vueshenzhen-bottom-img"
          src="/assets/images/body-bottom.png"
          class="body-bottom-img"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HostList from "../components/HostList";
// import TopicList from "../components/TopicList";

export default {
  components: {
    // TopicList,
    HostList,
  },

  data() {
    return {
      description:
        "Vue Shenzhen 是由一群 Vue.js 开发爱好者自发成立的位于深圳的本地组织，旨在将热情的 Vue.js 开发人员联系起来共同学习和成长。",
      location: "深圳市龙岗区坂田天安云谷（暂定）",
      time: "2021年8月 周六",
      contact: "扫码关注 VUE SHENZHEN 公众号",
      // topicList: [],
      hostList: [
        {
          hostName: "霍春阳·HcySunYang",
          hostDesc:
            " Vue.js 核心团队成员，自由职业者，曾就职于美团点评、字节跳动等公司，目前主要负责 Vue3 的维护。",
          portraitUrl: "/assets/images/hcysunyang.jpeg",
        },
        { hostName: "神秘嘉宾", hostDesc: "敬请期待" },
      ],
    };
  },
};
</script>

<style src="../styles/index.css" scoped></style>