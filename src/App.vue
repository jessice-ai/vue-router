<template>
  <div id="app">
    <div>
      头部
    </div>
    <div class="subody">
      <!-- router-link 路由链接 to 指定路由设置里面的path -->
      <div class="aleft">
          <router-link to="/ac" class="sun_active">首页</router-link><br>
          <router-link to="/ab" class="sun_active">关于我们</router-link>
      </div>
      <div class="aright">
        <!-- router-view 显示对应路由组件页面内容 -->
        <keep-alive>
          <!-- router-view 传值  sunMsg="sdun" 表示 传递的值为sdun  :sunMsg="sdun" 表示传递的是个变量 -->
          <router-view sunMsg="sdun"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
  #app,.subody{margin: 0 auto;width: 400px;}
  .aleft{float: left;margin-top: 20px;}
  .aright{float: right;margin-top: 20px;}
</style>
