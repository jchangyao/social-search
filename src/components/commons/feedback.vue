<script setup>
import { ref } from 'vue'
import {UserFilled} from "@element-plus/icons-vue";

/*从父组件中取出传入的值value，name和content*/
const props = defineProps({
  value: {
    type: Number,
    default: 3.7
  },
  name: {
    type: String,
    default: '刘同学'
  },
  content: {
    type: String,
    default: '非常感谢'
  }
})
const value = props.value
const name = props.name
const content = props.content
</script>

<template>
  <div class="feedback-container">
    <div class="feedback-title">
      <div class="feedback-title-icon">
        <img src="../../assets/images/main/person.png" alt="">
      </div>
      <div class="feedback-title-name">
        {{name}}
      </div>
    </div>
    <div class="feedback-content">
      {{content}}
    </div>
    <div class="feedback-rate">
      <el-rate
          v-model="value"
          disabled
          text-color="#ff9900"
          :colors="['#99A9BF', '#F7BA2A', '#FEEAB6']"
      />
    </div>
  </div>

</template>

<style scoped>
  .feedback-container {
    height: 270px;
    margin-top:30px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 40px;
    background-image: linear-gradient(to bottom,rgb(122, 8, 8),rgb(255, 198, 198));
    border-radius: 40px;
    color: white;
    position: relative;
  }

  .feedback-container .feedback-title {
    .feedback-title-icon{
      position: absolute;
      display: flex;
      top: -12%;
      img{
        height: 70px;
      }
    }
    .feedback-title-name{
      margin-top: 40px;
      margin-bottom: 30px;
    }
  }

  .feedback-container .feedback-content {
    height:140px;
    width: 160px;
  }

  .feedback-container .feedback-rate {
    margin-left: 30%;
  }
</style>
