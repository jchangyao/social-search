<script setup>
import {onMounted, ref} from 'vue'
import Top from "../components/commons/Top.vue";
import Bottom from "../components/commons/Bottom.vue";
import Bottom_Flag from "../components/commons/Bottom_Flag.vue";


onMounted(()=>{
  window.scrollTo(0, 0);
})

</script>

<template>
  <Top></Top>

  <div class="team">
    <div class="team-teamates">
      团队介绍
    </div>
    <el-row class="position">
      队长
    </el-row>

    <el-row>
      <el-col :span="4">
        <div class="teamate-name">刘凌云</div>
      </el-col>
      <el-col :span="20">
       <div class="teamate-introduction">
         <br>
         确定调查目标和范围<br>
         明确调查的主要目标，即研究新发展阶段民营企业家如何履行社会责任。<br>
         确定调查的范围，包括调查的行业领域、企业规模以及地域范围。<br>
       </div>
      </el-col>
    </el-row>
    <el-row class="position">
      成员
    </el-row>
    <el-row>
      
      <el-col :span="4">
        <div class="teamate-name">符人予</div>
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          设计调查问卷和访谈提纲，确保问题的科学性和针对性。<br>
          负责数据的收集、整理、分析，运用统计工具对数据进行深入分析。<br>
          进行调查报告的撰写。<br>
        </div>
      </el-col>
    </el-row>

    <div style="margin-top: 20px;"></div>
    
    <el-row>
      <el-col :span="4">
        <div class="teamate-name">李宇轩</div>
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          确定调查对象并获取样本选择有代表性的民营企业作为调查对象，<br>
          确保不同规模、不同发展阶段和不同地区的企业都被涵盖。<br>
          联系相关企业，说明调查目的，争取企业的合作与支持。<br>
        </div>
      </el-col>
    </el-row>

    <div style="margin-top: 20px;"></div>

    <el-row>
      <el-col :span="4">
        <div class="teamate-name">纪昌耀</div>
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          负责调查报告的整体撰写，整合问卷分析和访谈结果，撰写背景、分析和结论部分。<br>
          确保报告内容的逻辑性、条理性和语言表达的准确性。<br>
          审阅和修改调查报告，确保报告的整体质量。<br>
        </div>
      </el-col>
    </el-row>

    <div style="margin-top: 20px;"></div>

    <el-row>
      <el-col :span="4">
        <div class="teamate-name">冯行哲</div>
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          负责对外联络工作，与企业、政府部门、媒体和社区组织保持沟通。<br>
          组织和协调发布会、研讨会或座谈会，推广调查结果。<br>
          进行现场调研，提供必要的沟通和组织支持。<br>
        </div>
      </el-col>
    </el-row>
  </div>

  <div class="activities">
    <div class="activities-title">
      动态
    </div>
      <el-timeline style="max-width: 400px">
        <el-timeline-item center timestamp="2024/7/6" placement="top">
          <el-card>
            <h4>采访建筑企业负责人，了解该企业在建筑工地安全管理和责任落实方面的措施。</h4>
            <img src="../assets/images/activities/activity9.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2024/7/8" placement="top">
          <el-card>
            <h4>亲自参与防汛工程工作，体验防汛过程和实际操作。</h4>
            <img src="../assets/images/activities/activity8.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2024/7/10" placement="top">
          <el-card>
            <h4>参观残障儿童康复机构的医疗设施，了解设备配置和使用情况。</h4>
            <img src="../assets/images/activities/activity7.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2024/7/10" placement="top">
          <el-card>
            <h4>观察护士如何协助残障儿童进行肢体康复训练。</h4>
            <img src="../assets/images/activities/activity6.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2024/7/10" placement="top">
          <el-card>
            <h4>采访残障儿童康复医疗机构的负责人，了解该机构在救助残障儿童方面的措施和成效。</h4>
            <img src="../assets/images/activities/activity5.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2024/7/15" placement="top">
          <el-card>
            <h4>采访矿产企业负责人，了解该企业在采矿现场的安全管理和环境保护措施。</h4>
            <img src="../assets/images/activities/activity4.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2024/7/17" placement="top">
          <el-card>
            <h4>参观防汛工程现场，了解工程进展和防护措施。</h4>
            <img src="../assets/images/activities/activity3.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2024/7/17" placement="top">
          <el-card>
            <h4>参观施工现场，检查各项安全责任的落实情况</h4>
            <img src="../assets/images/activities/activity2.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2024/7/6" placement="top">
          <el-card>
            <h4>前往第一家民营企业的途中。</h4>
            <img src="../assets/images/activities/activity1.png" alt="">
          </el-card>
        </el-timeline-item>
      </el-timeline>

  </div>

  <Bottom_Flag></Bottom_Flag>

<!--  <Bottom></Bottom>-->
</template>

<style scoped>

  .position {
    margin-top: 20px;
    font-size: 22px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
  }

  .team {
    padding: 0 80px;
  }

  .team img {
    height: 272px;
  }

  .team .team-teamates  {
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
  }

  .teamate-name {
    height: 30px;
    line-height: 30px;
    color: rgb(176,39,66);
    font-weight: bold;
    font-size: 18px;
  }

  .teamate-introduction {
    background-color: rgb(250,235,220);
    color: rgb(176,39,66);
    padding: 10px 20px;
    height: 120px;
  }

  .activities {
    padding: 0 80px;
  }

  .activities .activities-title {
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .activities img {
    width: 350px;
  }
</style>
