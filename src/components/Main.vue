
<template>
  <Top></Top>

  <div class="container">
    <el-row class="teamInfo">
      <el-col :span="1">
        <div class="bottom-title left">社会调查</div>
      </el-col>
      <el-col :span="7">
        <div class="info">
          <div class="title">
            <img src="../assets/images/main/logo.png" alt="">
          </div>
          <div class="creator">
            <button>
              中国地质大学（武汉） x 新发展阶段民营企业家履行社会责任的研究
            </button>
          </div>
          <div class="statement">
            <img src="../assets/images/main/联合出品.png" alt="">
          </div>
        </div>
      </el-col>
      <el-col :span="3" :offset="5">
<!--        <img class="logo" src="../assets/images/logo.jpg" alt="failed">-->
        <div class="brief">
          <div>
            随着我国经济的快速发展，民营企业已经成为推动经济增长的重要力量之一。在新的发展阶段，
            民营企业不仅仅是经济领域的参与者，更是社会责任的重要承担者。近年来，社会各界对民营
            企业履行社会责任的期望日益提高，企业家们在追求经济效益的同时，也开始关注环境保护、
            员工福利、社会公益等问题。国家出台了一系列政策，鼓励和引导企业积极承担社会责任，以
            实现经济效益与社会效益的协调发展。此次社会调查的主题是“新发展阶段民营企业家履行社会
            责任的研究”，旨在了解和分析民营企业在现阶段如何应对社会责任的挑战与机遇。调查将深入
            探讨企业家在环保合规、员工权益保障、社区公益活动、残疾人就业等方面的实际行动和成效。
            同时，通过调查分析，找出当前民营企业在履行社会责任过程中所面临的困难和问题，为政策制
            定和企业管理提供参考和借鉴，以促进企业在追求经济利益的同时，更好地承担社会责任，推动社会的和谐发展。
          </div>
          <span class="bold-text-dark">
          </span>
          <button @click="clickToTeam" class="learn-more">
            了解更多&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>
          </button>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="bottom-title right">移步工作坊</div>
      </el-col>
    </el-row>

    <div class="contentInfo">
      <el-row>
        <el-col :span="6" :offset="3">
          <img src="../assets/images/cover.png" alt="failed" id="cover">
        </el-col>
        <el-col :span="9" :offset="4">
          <div>
            <div class="contentInfo-title">
              <img src="../assets/images/main/剧本简介.png" alt="">
            </div>
            <div class="contentInfo-brief">
              在中国经济快速发展的背景下，民营企业已成为国民经济的重要组成部分。数据显示，民营企业占中国企业总数的90%以上，并贡献了60%的国内生产
              总值（GDP）和80%的城镇就业机会。这表明民营企业在经济增长和社会就业方面发挥了关键作用。然而，随着经济转型和社会发展的深入，对企业社
              会责任（CSR）的关注日益增强。企业社会责任不仅是道德义务，更是企业可持续发展的重要因素。企业社会责任涵盖环境保护、社会福利、员工权益
              等多个方面。尽管民营企业在这些方面已有进展，但仍面临挑战，如对社会责任的理解较为表面、实践不足、缺乏系统化机制等。企业家的领导风格和
              决策对社会责任履行至关重要，他们需将社会责任融入企业战略，通过文化建设和制度创新提升员工参与度，并在资源配置中体现社会责任。本研究通
              过文献研究、问卷调查、访谈和案例分析，揭示了民营企业在履行社会责任过程中存在的主要问题和瓶颈。尽管取得了一定成效，如社区服务和环保参
              与，民营企业仍需借鉴国际经验，强化社会责任实践，包括引入先进管理体系、推动透明化和标准化，以确保社会责任融入企业的整体战略中。
            </div>
          </div>
        </el-col>
        <el-col :span="2">
          <button @click="clickToScreenplay" class="learn-more">
            了解更多&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>
          </button>
        </el-col>
      </el-row>
    </div>
  </div>

  <div class="feedback-brief">
    <el-row class="feedback-title">
        <el-col :span="6" :offset="4">———————</el-col>
        <el-col :span="4">
          <div>企业</div>
          <div style="font-size: 24px">Company</div>
        </el-col>
        <el-col :span="6">———————</el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <button class="scrollbar-left" @click="scrollbarLeft">
          <img src="../assets/images/main/jiantou2.png" alt="">
        </button>
      </el-col>
      <el-col :span="20">
        <el-scrollbar class="scrollbar-container" ref="myScrollbar" horizontal>
          <div class="scrollbar-flex-container">
            <feedback v-for="(item,index) in feedbacks"
                      class="feedback-item"
                      :name="item.name"
                      :value="item.value"
                      :content="item.content"
            >


            </feedback>
          </div>
        </el-scrollbar>
      </el-col>
      <el-col :span="2">
        <button class="scrollbar-right" @click="scrollbarRight">
          <img src="../assets/images/main/jiantou.png" alt="">
        </button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" :offset="21">
        <el-button class="feedback-more learn-more" @click="clickToFeedback">
          查看更多&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>
        </el-button>
      </el-col>
    </el-row>

  </div>

  <Bottom_Flag></Bottom_Flag>

<!--  <Bottom></Bottom>-->
</template>

<script setup>
import Top from "../components/commons/Top.vue";
import { ref } from 'vue'
import Bottom from "../components/commons/Bottom.vue";
import {UserFilled} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import feedback from "../components/commons/feedback.vue";
import Bottom_Flag from "../components/commons/Bottom_Flag.vue";

//使用路径变量
const router = useRouter();

const value = ref(3.7)
const name = ref('陈同学')
const src = "../assets/audio/test.mp3"
const colors = ref(['#99A9BF', '#FF1493', '#E93628'])
const myScrollbar = ref(null)
const feedbacks = [
  {
    name:'武汉国腾飞商贸有限公司',
    value:5,
    content:"“关于建筑的民企：这家民营建筑企业专注于各类建筑工程的施工与管理，致力于确保施工安全和质量合规。”"
  },
  {
    name:'慈安康复医院',
    value:5,
    content:"“关于残障医疗的民企：该民营医疗机构专注于为残障儿童提供康复治疗，帮助他们改善生活质量和融入社会。”"
  },
  {
    name:'大冶市中进科技有限公司',
    value:5,
    content:"“关于冶钢的民企：该民营冶钢企业主要从事钢铁生产和冶炼，着力提升生产效率并确保环境友好型制造。”"
  },
  {
    name:'巴黎高等物理化工学院研究所',
    value:5,
    content:"“关于生物基因研究的民企：这家民营研究所专注于生物基因的研究和开发，致力于推动基因技术在医疗和农业等领域的应用。”"
  },
]

const clickToFeedback=()=>{
  router.push({
    path:'feedback'
  })
}

const clickToTeam=()=>{
  router.push({
    path:'team'
  })
}

const clickToScreenplay=()=>{
  router.push({
    path:'screenplay'
  })
}

//滚动条向右滚动事件
const scrollbarRight = () => {
  const scrollWrapper = myScrollbar.value?.$el.querySelector('.el-scrollbar__wrap');
  if (!scrollWrapper) return;

  let startTime = null;
  const duration = 500; // 滚动动画持续时间，单位毫秒
  const startScrollLeft = scrollWrapper.scrollLeft;
  const targetScrollLeft = startScrollLeft+100;

  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;

    // 使用ease-out动画效果计算当前滚动位置
    const progress = Math.min(elapsedTime / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 3); // cubic easing
    const currentScrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easeProgress;

    scrollWrapper.scrollLeft = currentScrollLeft;

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}

const scrollbarLeft = () => {
  const scrollWrapper = myScrollbar.value?.$el.querySelector('.el-scrollbar__wrap');
  if (!scrollWrapper) return;

  let startTime = null;
  const duration = 500; // 滚动动画持续时间，单位毫秒
  const startScrollLeft = scrollWrapper.scrollLeft;
  const targetScrollLeft = startScrollLeft-100;

  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;

    // 使用ease-out动画效果计算当前滚动位置
    const progress = Math.min(elapsedTime / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 3); // cubic easing
    const currentScrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easeProgress;

    scrollWrapper.scrollLeft = currentScrollLeft;

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}


</script>

<style scoped>
.container {
  position: relative;
}
/*#region团队介绍部分*/
.container .teamInfo {
  height: 690px;
  background-image: url("../assets/images/main/background1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .info{
    width: 800px;
    text-align: center;
  }
  @import url("../assets/font.css");
  .bottom-title {
    font-family: Alimama;
    color: white;
    width: 100px;
    font-size: 18px;
    margin-top: 630px;
  }
  .left{
    margin-left: 20px;
  }
  .right {
    margin-right: 20px;
  }
}

@import url("../assets/font.css");
.container .teamInfo .info .creator button{
  font-family: Alimama;
  background-color: rgb(157, 42, 24);
  color: white;
  border: 0;
  border-radius: 10px;
  width: 500px;
  font-size: 16px;
  padding-top:5px;
  padding-bottom: 5px;
  letter-spacing: 10px;
  margin-top: 40px;
}

.container .title {
  img{
    height: 350px;
  }
}

.container .teamInfo .info .statement {
  margin-top: 40px;
  img{
    height: 25px;
  }
}

.container .brief {
  padding-top: 120px;
  margin-left: 60px;
  width: 600px;
  font-size: 16px;
  button{
    margin-top: 40px;
  }
}

.learn-more {
  background-image: url("../assets/images/main/learn_more.png");
  background-size: 100% 100%;
  border-radius: 14px;
  border: 0;
  padding: 5px 15px;
  color:white;
  cursor: pointer;
}

.learn-more:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}

.container .logo {
  height: 480px;
  width: 480px;
}
/*#endregion团队介绍*/

/*region剧本介绍*/
.container .contentInfo {
  height: 740px;
  background-image: url("../assets/images/main/background2.png");
  #cover{
    border-radius: 20px;
    margin-top: 100px;
    height: 550px;
  }
  button{
    margin-top: 650px;
  }
}


.container .contentInfo .contentInfo-title {
  font-size: 40px;
  font-weight: bold;
  margin-top: 80px;
  img{
    height: 200px;
  }
}

.container .contentInfo .contentInfo-brief {
  margin-top: 60px;
  margin-left: 20px;
  width: 500px;
  color: white;
  font-size: 16px;
  line-height: 1.5;
}


/*endregion剧本介绍*/

/*#region评价反馈*/
.feedback-brief {
  height: 700px;
  background-image: linear-gradient(to bottom, rgb(255, 219, 212), rgb(255, 255, 255));
}

.feedback-brief .feedback-title {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding-top:40px;
  color: rgb(120,21,13);
  margin-bottom: 60px;
}

.feedback-brief .feedback-introduction {
  margin: 10px 0;
}

.feedback-brief .feedback-more {
  background-color:#E93628;
  color:white;
  margin-top: 30px;
  margin-bottom: 30px;
}

.feedback-brief .scrollbar-container {
  height: 450px;
}

.feedback-brief .scrollbar-flex-container {
  display: flex;
}

.feedback-brief .scrollbar-left{
  margin-left: 40%;
  margin-top: 100%;
  border:none;
  background: rgba(255,255,255,0);
  img {
    width: 20px;
  }
}

.feedback-brief .scrollbar-right{
  margin-left: 30%;
  margin-top: 100%;
  border:none;
  background: rgba(255,255,255,0);
  img{
    width: 60px;
  }
}

.feedback-item:nth-child(odd) {
  margin-top: 140px;
}



/*#endregion*/
</style>
