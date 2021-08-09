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
          href="https://www.huodongxing.com/event/4609525326200"
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
          <p>{{ guide }}</p>
          <div class="map-flex"><div id="mapContainer"></div></div>
          <h2>GUEST SPEAKER · 演讲嘉宾</h2>
          <host-list :hosts="hostList"></host-list>
          <h2 style="margin-bottom: 16px">SCHEDULE · 活动日程</h2>
          <topic-list :topics="topicList"></topic-list>
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
      location: "深圳市龙岗区坂田天安云谷2栋-2楼-AI创新中心",
      guide: "（地铁10号线岗头站C1出口，左转往西350m）",
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
          schedule: "15:00 - 15:40",
          description:
            "以 Vue3 的静态类型系统实现为切入点，帮助初学者由浅入深学习 TypeScript",
        },
        {
          id: 2,
          host: {
            hostName: "王鹏",
            hostDesc:
              "开源技术爱好者，axios、exceljs、cJSON等社区maintainer，华为软件工程师。",
            portraitUrl: "/assets/images/wangpeng.jpeg",
          },
          title: "基于 vue-codemod 工具的 Vue 3 升级最佳实践",
          schedule: "15:40 - 16:20",
          description:
            "基于 AST 技术对 Vue 2 语法进行解析，自动将源码升级为 Vue 3 语法，结合从大量开源项目中总结出的手动升级手册，最后辅以 vue-compat 工具做运行时兼容，修复少量运行时告警，帮助开发者将 Vue 2 项目快速升级到 Vue 3",
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
        {
          id: 2,
          hostName: "王鹏",
          hostDesc:
            "开源技术爱好者，axios 、exceljs 、cJSON 等社区 maintainer，华为软件工程师。",
          portraitUrl: "/assets/images/wangpeng.jpeg",
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
      ],
      resultHtml: "",
    };
  },

  mounted() {
    var map = new BMapGL.Map("mapContainer", {
      enableRotate: false,
      enableTilt: false,
    });
    var point = new BMapGL.Point(114.077584, 22.664015);
    map.centerAndZoom(point, 18);
    map.enableScrollWheelZoom(true);
    var walking = new BMapGL.WalkingRoute(map, {
      renderOptions: { map: map, autoViewport: true },
    });
    walking.search("岗头地铁站-C1口", "天安云谷1期南区-2栋");
    walking.setPolylinesSetCallback(function (lines) {
      for (var line in lines) {
        lines[line].getPolyline().setStrokeOpacity(0.5);
      }
    });
  },

  destroyed() {},
};
</script>

<style src="../styles/index.css" scoped></style>