<template>
  <div class="theme-container">
    <!-- 单个主讲人时打开注释 -->
    <div class="theme-banner">
      <img src="../../public/v-logo.png" class="theme-logo" />
      <h1>Meetup in Shenzhen</h1>
      <h3>June 5th, 2021</h3>
    </div>
    <!-- 单个主讲人时取消注释 -->
    <!-- <author-info /> -->
    <!-- <hr /> -->
    <topic-list :list="topicList" />
    <div class="join-link">
      <a>Click here</a>
      <p>, join our net meetup!</p>
    </div>
  </div>
</template>

<script>
import TopicList from "../components/TopicList";
import AuthorInfo from "../components/AuthorInfo";
import portraitImg from "../../public/portrait-example1.jpg";

export default {
  components: {
    TopicList,
    AuthorInfo,
  },

  data() {
    return {
      topicList: [
        {
          id: "1",
          topicTitleEn: "Online Meetup with Evan You",
          topicTitle: "在线对话",
          scheduleDateEn: "Sunday, May 23th, 2021",
          scheduleDate: "2021年5月23日，周日",
          scheduleTime: "7:00PM - 9:00PM",
          meetingPlaceEn: "ONLINE ZOOM VIDEO CONFERENCE",
          meetingPlace: "ZOOM在线会议",
          host: {
            portraitUrl: portraitImg,
            hostName: "李梦媛",
            hostNameEn: "Mengyuan",
            hostDesc: "开源能力中心 | Vue.js开发者",
          },
        },
        {
          id: "2",
          topicTitleEn: "Online Meetup with Evan You",
          topicTitle: "在线对话",
          scheduleDateEn: "Sunday, May 23th, 2021",
          scheduleDate: "2021年5月23日，周日",
          scheduleTime: "7:00PM - 9:00PM",
          meetingPlaceEn: "ONLINE ZOOM VIDEO CONFERENCE",
          meetingPlace: "ZOOM在线会议",
          host: {
            portraitUrl: portraitImg,
            hostName: "李梦媛",
            hostNameEn: "Mengyuan",
            hostDesc: "开源能力中心 | Vue.js开发者",
          },
        },
        {
          id: "3",
          topicTitleEn: "Online Meetup with Evan You",
          topicTitle: "在线对话",
          scheduleDateEn: "Sunday, May 23th, 2021",
          scheduleDate: "2021年5月23日，周日",
          scheduleTime: "7:00PM - 9:00PM",
          meetingPlaceEn: "ONLINE ZOOM VIDEO CONFERENCE",
          meetingPlace: "ZOOM在线会议",
          host: {
            portraitUrl: portraitImg,
            hostName: "李梦媛",
            hostNameEn: "Mengyuan",
            hostDesc: "开源能力中心 | Vue.js开发者",
          },
        },
      ],
    };
  },
};
</script>

<style src="../styles/index.css" scoped></style>