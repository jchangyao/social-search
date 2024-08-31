<script setup>

import Top from "../components/commons/Top.vue";
import Bottom from "../components/commons/Bottom.vue";
import Bottom_Flag from "../components/commons/Bottom_Flag.vue";
</script>

<template>
  <Top/>
  <!-- 展示第一行 -->
  <el-row class="show-first">
    <el-col :span="8">
      <div class="cooperator">
        <img src="../assets/images/cooperate/3.png" alt="failed">
      </div>
    </el-col>
    <el-col :span="16">
      <div class="cooperate-title">中进科技有限公司</div>
    </el-col>
  </el-row>
  <!-- 展示第二行 -->
  <el-row class="show-second">
    <el-col :span="16">
      <div class="cooperate-title">慈安康复医院</div>
    </el-col>
    <el-col :span="8">
      <img src="../assets/images/cooperate/4.png" alt="failed" height="535px" width="440px">
    </el-col>
  </el-row>
  <!-- 新增第三行 -->
  <el-row class="show-third">
    <el-col :span="8">
      <div class="cooperator">
        <img src="../assets/images/cooperate/7.png" alt="failed">
      </div>
    </el-col>
    <el-col :span="16">
      <div class="cooperate-title">武汉国腾飞商贸有限公司</div>
    </el-col>
  </el-row>
  <!-- 新增第四行 -->
  <el-row class="show-fourth">
    <el-col :span="8">
      <div class="cooperator">
        <img src="../assets/images/cooperate/8.jpg" alt="failed" height="535px" width="440px">
      </div>
    </el-col>
    <el-col :span="16">
      <div class="cooperate-title">ESPCI-PSL 巴黎文理研究大学-巴黎高等物理化工学院研究所</div>
    </el-col>
  </el-row>
  <Bottom_Flag></Bottom_Flag>
  <!--  <Bottom/>-->
</template>

<style scoped>
  .cooperate-title {
    font-size: 30px;
    font-weight: bold;
    margin-left: 100px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .show-first {
    height: 700px;
    background-image: url("../assets/images/cooperate/5.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    .cooperator {
      img{
        margin-top: 50px;
        margin-left: 100px;
        height: 600px;
        border-radius: 30px;
      }
    }
    @import url("../assets/font.css");
    .cooperate-title{
      font-family: Alimama;
      color: #ffffff;
      margin-top: 250px;
      font-size: 60px;
    }
  }

  .show-second{
    height: 700px;
    background-image: url("../assets/images/cooperate/6.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    img{
        margin-top: 50px;
        height: 600px;
        border-radius: 30px;
    }
    @import url("../assets/font.css");
    .cooperate-title{
      font-family: Alimama;
      color: #fff;
      margin-top: 250px;
      font-size: 60px;
    }
  }

  .show-third{
    height: 700px;
    background-image: url("../assets/images/cooperate/1.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    img{
        margin-top: 50px;
        height: 600px;
        border-radius: 30px;
    }
    @import url("../assets/font.css");
    .cooperate-title{
      font-family: Alimama;
      color: #fff;
      margin-top: 250px;
      font-size: 60px;
    }
  }

  .show-fourth{
    height: 700px;
    background-image: url("../assets/images/cooperate/9.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    img{
        margin-top: 50px;
        height: 600px;
        border-radius: 30px;
    }
    @import url("../assets/font.css");
    .cooperate-title{
      font-family: Alimama;
      color: #fff;
      margin-top: 250px;
      font-size: 60px;
    }
  }
</style>
