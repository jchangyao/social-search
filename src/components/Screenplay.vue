<script setup>
  import {ref} from "vue";
  import Top from "../components/commons/Top.vue";
  import Bottom from "../components/commons/Bottom.vue";
  import {onMounted} from "vue";
  import Bottom_Flag from "../components/commons/Bottom_Flag.vue";

  const imgCards = ref([
    new URL("../assets/images/roles/role1.png", import.meta.url),
    new URL("../assets/images/roles/role2.png", import.meta.url),
    new URL("../assets/images/roles/role3.png", import.meta.url),
    new URL("../assets/images/roles/role4.png", import.meta.url),
    new URL("../assets/images/roles/role5.png", import.meta.url),
    new URL("../assets/images/roles/role6.png", import.meta.url),
  ]);

  const imgItems = ref([
      new URL("../assets/images/items/item1.png",import.meta.url),
      new URL("../assets/images/items/item2.png",import.meta.url),
      new URL("../assets/images/items/item3.png",import.meta.url),
      new URL("../assets/images/items/item4.png",import.meta.url),
      new URL("../assets/images/items/item5.png",import.meta.url),
      new URL("../assets/images/items/item6.png",import.meta.url),
      new URL("../assets/images/items/item7.png",import.meta.url),
      new URL("../assets/images/items/item8.png",import.meta.url),
      new URL("../assets/images/items/item9.png",import.meta.url),
      new URL("../assets/images/items/item10.png",import.meta.url),
      new URL("../assets/images/items/item11.png",import.meta.url),
      new URL("../assets/images/items/item12.png",import.meta.url),
  ])

  const items= ref([
    { timestamp: '2024-01-01', content: 'Event 1' },
    { timestamp: '2024-03-15', content: 'Event 2' },
    { timestamp: '2024-06-30', content: 'Event 3' },
    // Add more events as needed
  ])

  onMounted(()=>{
    window.scrollTo(0, 0);
  })

</script>

<template>
  <Top></Top>
  <div class="contentInfo">
    <el-row>
      <el-col :span="6" :offset="3">
        <img src="../assets/images/cover.png" alt="failed" id="cover">
      </el-col>
      <el-col :span="8" :offset="4">
        <div>
          <div class="contentInfo-title">
            <img src="../assets/images/main/剧本简介.png" alt="">
          </div>
          <div class="contentInfo-brief">
            在中国经济快速发展的背景下，民营企业已成为国民经济的重要组成部分。数据显示，
            民营企业占中国企业总数的90%以上，并贡献了60%的国内生产总值（GDP）和80%的城
            镇就业机会。这表明民营企业在经济增长和社会就业方面发挥了关键作用。然而，随着
            经济转型和社会发展的深入，对企业社会责任（CSR）的关注日益增强。企业社会责任
            不仅是道德义务，更是企业可持续发展的重要因素。企业社会责任涵盖环境保护、社会
            福利、员工权益等多个方面。尽管民营企业在这些方面已有进展，但仍面临挑战，如对
            社会责任的理解较为表面、实践不足、缺乏系统化机制等。企业家的领导风格和决策对
            社会责任履行至关重要，他们需将社会责任融入企业战略，通过文化建设和制度创新提
            升员工参与度，并在资源配置中体现社会责任。本研究通过文献研究、问卷调查、访谈
            和案例分析，揭示了民营企业在履行社会责任过程中存在的主要问题和瓶颈。尽管取得
            了一定成效，如社区服务和环保参与，民营企业仍需借鉴国际经验，强化社会责任实践，
            包括引入先进管理体系、推动透明化和标准化，以确保社会责任融入企业的整体战略中。
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="container">
    <el-row>
      <div class="process">社会调查全过程</div>
        <el-steps style="max-width: 1400px;" :active="0">
          <el-step title="项目准备阶段"
                   description="根据调查目标和主题，制定详细的调查计划和时间表，确定调
                   查范围和对象。组建调查小组并明确分工，确保每个成员都了解任务和职责。
                   同时，准备调查所需的工具，如问卷、录音设备、访谈提纲等。" />
          <el-step title="问卷设计阶段"
                   description="根据调查目标和内容，设计科学合理的问卷和访谈提纲。确保
                   问题涵盖社会责任、员工福利、环保措施、社区服务等关键领域。进行内部审
                   核和测试，确保问卷的有效性和准确性。" />
          <el-step title="样本选择阶段"
                   description="确定调查对象，选择有代表性的民营企业作为调查样本。确保
                   涵盖不同类型的企业，如建筑、残障医疗、采矿、冶钢等行业，保证调查的广
                   泛性和全面性。" />
          <el-step title="实地调查阶段"
                   description="按照计划前往各企业进行实地调查。小组成员分工合作，有序
                   进行问卷调查和深度访谈。记录调查数据，拍摄相关照片，确保获取第一手的
                   真实资料。" />
          <el-step title="数据整理阶段"
                   description="将收集到的调查问卷和访谈记录进行整理和分类。运用统计分
                   析方法对定量数据进行分析，并对定性数据进行归纳总结，为后续报告撰写提
                   供基础。" />
          <el-step title="分析讨论阶段"
                   description="小组成员集体讨论数据分析结果，识别问题和亮点。针对不同
                   企业在履行社会责任方面的表现，提出有针对性的意见和建议。讨论报告的结
                   构和重点内容。”" />
          <el-step title="调查报告撰写阶段*"
                   description="根据分析结果，撰写详细的调查报告。报告应包括调查背景、
                   方法、结果分析、典型案例和改进建议。确保内容逻辑清晰，数据准确，并突
                   出调查的发现和结论。。" />
          <el-step title="结果反馈与推广阶段"
                   description="将调查结果反馈给参与的企业，并与相关政府部门、学术机构
                   、媒体等进行交流和讨论。通过座谈会、研讨会等形式推广调查成果，提高社
                   会对企业社会责任的关注。" />
        </el-steps>
    </el-row>

    <div class="roles">
      <div class="catalog">启航</div>
      <el-carousel :interval="4000" type="card" height="450px" indicator-position="outside">
        <el-carousel-item v-for="(item,index) in imgCards" :key="index">
          <img :src="item" alt="failed">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="items">
      <div class="catalog">宝贵的瞬间</div>
      <el-carousel :interval="4000" type="card" height="450px" indicator-position="outside">
        <el-carousel-item v-for="(item,index) in imgItems" :key="index">
          <img :src="item" alt="failed">
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>

  <Bottom_Flag></Bottom_Flag>

<!--  <Bottom></Bottom>-->
</template>

<style scoped>

  .container {
    padding: 0 80px;
    background-image: linear-gradient(to bottom, rgb(255, 219, 212), rgb(255, 255, 255));
  }
  .contentInfo {
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
  .contentInfo .contentInfo-title {
    font-size: 40px;
    font-weight: bold;
    margin-top: 80px;
    img{
      height: 200px;
    }
  }
  .contentInfo .contentInfo-brief {
    margin-top: 60px;
    margin-left: 20px;
    width: 550px;
    color: white;
    font-size: 16px;
    line-height: 1.5;
  }

  .process {
    font-size: 30px;
    margin-top: 40px;
    margin-bottom: 15px;
  }


  /*#region角色卡片轮播图*/

  .roles {
    margin:0 auto;
    margin-top: 80px;
    width: 950px;
    text-align: center;
  }

  .items {
    margin: 0 auto;
    margin-top: 80px;
    width: 950px;
    text-align: center;
  }

  .container .el-carousel__item img {
    width: 350px;
    height: 450px;
  }

  .el-carousel__item {
    width: 400px;
    margin: 0;
  }

  .roles span {
    font-size: 25px;
  }

  .catalog {
    font-size: 28px;
    margin-bottom: 20px;
  }




  /*#endregion*/

  .horizontal-timeline {
    max-width: 100%;
    overflow-x: auto;
  }


</style>
