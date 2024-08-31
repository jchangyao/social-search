<script setup>
  import {ref} from 'vue'
  import {UserFilled} from "@element-plus/icons-vue";
  import ThumbsUp from "../../components/commons/ThumbsUp.vue";
  const time = ref('2天前')
  const content = ref('民营企业良好地履行了社会责任，增添了社会发展的幸福感。')
  const name = ref('刘同学')
</script>

<template>
  <el-row class="container">
    <el-col :span="1">
      <el-avatar :icon="UserFilled" style="margin-top: 5px"/>
    </el-col>
    <el-col :span="16">
      <div class="opinion-from">
        <span class="name">
          {{name}}
        </span>
        <span class="time">
          · {{time}}
        </span>
      </div>
      <div class="opinion-content">
        {{content}}
      </div>
    </el-col>
    <el-col :span="1" :offset="5">
      <ThumbsUp></ThumbsUp>
    </el-col>
  </el-row>
</template>

<style scoped>

  .container {
    margin-bottom: 40px;
  }

  .opinion-from {
    color: rgb(135,143,154);
    margin-bottom: 8px;
  }

  .name {
    font-size: 14px;
  }

  .time {
    font-size: 14px;
  }



</style>
