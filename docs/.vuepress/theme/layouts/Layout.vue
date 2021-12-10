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
        <h5>Meetup</h5>
        <a href="http://hdxu.cn/hNY08" target="_blank" rel="nofollow"
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
          <h2>LATEST · 最新活动</h2>
          <p>
            <span
              ><img
                src="/assets/images/time-icon.png"
                class="body-box-time-icon"/></span
            ><span>{{ time }}</span>
          </p>
          <p>
            进入<a :href="live.link" target="_blank" rel="nofollow">{{
              live.name
            }}</a
            >线上参与
          </p>
          <h2>GUEST SPEAKER · 邀请嘉宾</h2>
          <host-list :hosts="hostList" />
          <h2>TOPICS · 分享议题</h2>
          <topic-list :topics="topicList" />
          <p>
            您可以在<a :href="quiz.link" target="_blank" rel="nofollow">{{
              quiz.name
            }}</a
            >中留下感兴趣的问题，活动嘉宾将在线上直播为您解答。
          </p>
          <h2>REVIEW · 往期回顾</h2>
          <review-list :reviews="reviewList" />
          <h2 style="margin-bottom: 3vw">CONTACT US · 联系我们</h2>
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
          <h2>PARTNERS · 合作伙伴</h2>
          <partner-list :partners="partnerList" />
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
import PartnerList from "../components/PartnerList.vue";
import TopicList from "../components/TopicList.vue";
import ReviewList from "../components/ReviewList.vue";

export default {
  components: {
    TopicList,
    HostList,
    PartnerList,
    ReviewList,
  },
  data() {
    return {
      description:
        "Vue Shenzhen 是由一群 Vue.js 开发爱好者自发成立的位于深圳的本地组织，旨在将热情的 Vue.js 开发人员联系起来共同学习和成长。",
      time: "2021年12月30日 周四 19:00",
      live: {
        name: "VueShenZhen直播间",
        link: "https://live.bilibili.com/23180029",
      },
      quiz: {
        name: "问卷收集",
        link: "https://www.wjx.cn/vj/YDuHsz0.aspx",
      },
      contact: "扫码关注 VUE SHENZHEN 公众号",
      hostList: [
        {
          hostName: "戴威 (@edison1105)",
          hostDesc: "Vue.js Team Member，Vue3 活跃贡献者。",
          portraitUrl: "/assets/images/avatar.jpg",
          link: "https://github.com/edison1105",
        },
      ],
      topicList: [
        {
          title: "Vue3 Virtual DOM 性能优化",
          schedule: "19:00 - 20:00",
          description:
            "Vue3 为了优化运行时性能，对 Virtual DOM 进行了重构。本次分享将带你了解传统 diff 算法的性能瓶颈以及Vue3 对Virtual DOM和diff 算法的改进思路。",
        },
      ],
      reviewList: [
        {
          title: "2021.08.21 Vue Shenzhen Meetup （嘉宾：林成璋、王鹏）",
          link:
            "https://www.bilibili.com/video/BV17L411b7gd?share_source=copy_web",
        },
        {
          title: "2021.10.28 Vue Shenzhen Meetup （嘉宾：Anthony Fu）",
          link:
            "https://www.bilibili.com/video/BV1jL4y1q76J?share_source=copy_web",
        },
      ],
      partnerList: [
        {
          name: "掘金",
          logo: "/assets/images/juejin-logo.png",
          link: "https://www.juejin.cn",
          key: "juejin",
        },
        {
          name: "活动行",
          logo: "/assets/images/huodongx-logo.png",
          link: "https://www.huodongxing.com/",
          key: "huodongx",
        },
        {
          name: "开源中国",
          logo: "/assets/images/oschina-logo.svg",
          link: "https://www.oschina.net/",
          key: "oschina",
        },
        {
          name: "哔哩哔哩视频",
          logo: "/assets/images/bilibili-logo.png",
          link: "https://www.bilibili.com/",
          key: "bilibili",
        },
        {
          name: "思否",
          logo: "/assets/images/segmentfault-logo.svg",
          link: "https://segmentfault.com/",
          key: "segmentfault",
        },
      ],
    };
  },
};
</script>

<style src="../styles/index.css" scoped></style>
