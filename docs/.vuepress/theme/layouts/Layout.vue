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
        <a
          href="https://www.huodongxing.com/event/7620150011723"
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
          <p>（关注B站<a href="https://space.bilibili.com/630975201" target="_blank">VueShenZhen</a>获取直播入口）</p>
          <h2>GUEST SPEAKER · 邀请嘉宾</h2>
          <host-list :hosts="hostList"></host-list>
          <h2>QUESTIONS · 内容征集</h2>
          <p>活动形式为线上问答，您可以在<a href="https://www.wjx.cn/vj/YD9swZ9.aspx" target="_blank">VueShenZhen问题收集问卷</a>中留下您感兴趣的问题，活动嘉宾将在直播线上为您解答。</p>
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
          <partner-list :partners="partnerList"></partner-list>
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

export default {
  components: {
    TopicList,
    HostList,
    PartnerList,
  },

  data() {
    return {
      description:
        "Vue Shenzhen 是由一群 Vue.js 开发爱好者自发成立的位于深圳的本地组织，旨在将热情的 Vue.js 开发人员联系起来共同学习和成长。",
      location: "线上访谈",
      guide: "https://space.bilibili.com/630975201",
      time: "2021年10月28日 周四 19:00",
      contact: "扫码关注 VUE SHENZHEN 公众号",
      hostList: [
        {
          id: 1,
          hostName: "Anthony Fu (@antfu)",
          hostDesc:
            "Vue 和 Vite 的核心团队成员，VueUse、Slidev 等多个开源项目的创作者",
          portraitUrl: "/assets/images/antfu.png",
          link: "https://github.com/antfu"
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
      resultHtml: "",
    };
  },
};
</script>

<style src="../styles/index.css" scoped></style>