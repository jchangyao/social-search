
<template>
    <el-menu
        :default-active="$route.path"
        :router="true"
        class="el-menu-top"
        mode="horizontal"
        :ellipsis="false"
        background-color="rgb(139,26,26)"
        text-color="#fff"
        active-text-color="#fff"
    >
      <el-menu-item index="0" id="name">
        <img src="../../assets/images/logo_CUG.png" alt="failed">
        <span>中国地质大学（武汉）</span>
      </el-menu-item>
      <div class="flex-grow"/>
        <el-menu-item index="/main" @click="clickToHome">首页</el-menu-item>
        <el-menu-item index="/team" @click="clickToTeam">工作坊</el-menu-item>
        <el-menu-item index="/screenplay" @click="clickToScreenplay">调查剖析</el-menu-item>
        <el-menu-item index="/feedback" @click="clickToFeedback">考察实景</el-menu-item>
        <el-menu-item index="/cooperate" @click="clickToCooperate">合作单位</el-menu-item>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";

//使用路径变量
const router = useRouter();
const activeIndex = router.currentRoute._value.path
console.log(activeIndex)

const clickToHome=()=>{
  router.push({
    path:'main'
  })
}

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

const clickToCooperate=()=>{
  router.push({
    path:'cooperate'
  })
}

const handleMenuSelect=(index)=> {
  activeIndex.value = index; // 切换选中的菜单项索引
}

</script>

<style scoped lang="less">
.el-menu-item{
  font-size:16px !important;
  img {
    height: 60px;
    margin-top: 6px;
    margin-right: 10px;
  }
  span {
    font-size: 25px;
  }
}

@import url("../../assets/font.css");
.el-menu-top {
  font-family: Alimama;
  padding: 0 80px;
  height:70px;
  line-height: 70px;

  #name {
    background-color: transparent !important;
    border: none !important;
    color: white !important;
    cursor: inherit !important;
    pointer-events: inherit !important;
  }
}

.flex-grow {
  flex-grow: 1;
}
</style>
