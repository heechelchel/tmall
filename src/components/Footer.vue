<template>
  <div class="foot_wrap">
      <a href="">
            <i class="iconfont pick">&#xe692;</i>
            <p class="itemtext pick">首页</p>
      </a>
      <a href="">
            <i class="iconfont">&#xe676;</i>
            <p class="itemtext">翻盘</p>
      </a>
      <a href="">
            <i class="iconfont">&#xe674;</i>
            <p class="itemtext">品牌特惠</p>
      </a>
      <a href="">
            <i class="iconfont">&#xe700;</i>
            <p class="itemtext">分类</p>
      </a>
      <a href="">
            <i class="iconfont">&#xe79c;</i>
            <p class="itemtext">我的</p>
      </a>
  </div>
</template>

<script>
export default {
  name: 'footer_c',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
  .foot_wrap{
    position: fixed;
    bottom:0;
    left:0;
    width:3.2rem;
    height:0.495rem;
    background:#fff;
    border-top:0.01rem solid #eee;
  }
  .foot_wrap a{
    display:block;
    float: left;
    height:0.495rem;
    line-height:0.495rem;
    width:0.64rem;
    font-size:0.12rem;
    text-decoration: none;
  }
  .foot_wrap a .iconfont{
    font-size:0.16rem;
    color:#000;
  }
  .foot_wrap a .itemtext{
    font-size:0.12rem;
    color:#000;
  }
  .foot_wrap a .pick{
    color:#11BB55;
  }
</style>