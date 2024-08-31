<script setup>

</script>

  <template>
    <!-- 页脚 -->
    <div class="footer">
      <div class="container">
        <!-- 底部链接 -->
        <div class="bottom-links">
          <ul class="bottom-links-list clearfix">
            <li><a href="#">关于我们</a></li>
            <li><a href="#">联系我们</a></li>
            <li><a href="https://baike.baidu.com/item/%E8%A1%A1%E9%98%B3%E4%BC%9A%E6%88%98/921349">史实介绍</a></li>
            <li><a href="#">隐私政策</a></li>
            <li><a href="#">服务条款</a></li>
            <li><a href="#">友情链接</a></li>
            <li><a href="#">反馈建议</a></li>
            <li><a href="#">Cookie设置</a></li>
          </ul>
          <div class="copyright">©copywrite 剧绎潇湘</div>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.footer {
  width: 1300px;
  margin: 0 auto;
  height: 200px;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #ccc;
  margin-top: 80px;
}
.container {
  margin: 0 auto;
}
.bottom-links {
  text-align: center;
  margin-top: 25px;
}
.bottom-links-list {
  display: inline-block;
}
.bottom-links-list li {
  float:left;
  list-style: none;
}
.bottom-links-list li a {
  color: inherit;
  text-decoration: none;
  padding: 0 26px;
  border-right: 1px solid white;
}
.bottom-links-list li a:hover {
  color:rgb(190,42,52);
}
.bottom-links-list li:first-child a {
  padding-left: 0;
}
.bottom-links-list li:last-child a {
  padding-right: 0;
  border-right: none;
}
.copyright {
  margin-top: 20px;
}
</style>
