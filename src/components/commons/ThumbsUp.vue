<!-- 点赞 -->
<template>
  <div id=''>
    <div class="circle" @click="handleClick" :class="isUp?'check':''">
      <div class="img-box" :class="isUp?'img-box-check':''">
        <img v-if="isUp" src="../../assets/images/fab2.png" alt="" />
        <img v-else src="../../assets/images/fab.png" alt="" />
        <span>{{nums}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue";

  const nums=ref(132)
  let isUp=ref(false)
  const  handleClick=()=>{
    isUp.value = !isUp.value
    if(isUp.value){
      nums.value = nums.value +1
    }
    else{
      nums.value = nums.value -1
    }
  }


</script>
<style lang='less' scoped>
.circle {
  margin-top: 20px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 0px 0px 0px rgba(223, 46, 58, 0.5);
  .img-box {
    width: 20px;
    height: 20px;
    margin: 5px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none; // 防止快速点击图片被选中。
    & img {
      width: 100%;
      height: 100%;
    }
  }
}
.check {
  -webkit-transition: box-shadow 0.5s;
  -moz-transition: box-shadow 0.5s;
  -o-transition: box-shadow 0.5s;
  transition: box-shadow 0.5s;
  box-shadow: 0px 0px 0px 1em rgba(226, 32, 44, 0);
}
.img-box-check {
  animation: anm 0.5s;
  -moz-animation: anm 0.5s;
  -webkit-animation: anm 0.5s;
  -o-animation: anm 0.5s;
}
@keyframes anm {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
  }
  50% {
    transform: scale(1.3);
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
  }
}

@-moz-keyframes anm {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
  }
  50% {
    transform: scale(1.3);
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
  }
}

@-webkit-keyframes anm {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
  }
  50% {
    transform: scale(1.3);
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
  }
}

@-o-keyframes anm {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
  }
  50% {
    transform: scale(1.3);
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
  }
}

</style>
