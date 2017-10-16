<template>
  <div class="header">
    <div id="header">
      <a href="#"><i class="iconfont">&#xe623;</i></a>
      <div class="city">
        <h1 class="title">天猫超市</h1>
        <div class="city_selector">
          <span>大连</span>
        </div>
      </div>
      <a href="" class="tinycart"><i class="iconfont">&#xe501;</i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header_c',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{
  width:100%;
  height:44px;
}
.header #header{
    font-size: 12px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 1px 0 rgba(0,0,0,.05), 0 0.5px 0 rgba(0,0,0,.09);
    z-index: 998;
    line-height: 44px;
    background: #fff;
    color: #5F646E;
    text-align: center;
    display: flex;
  }
.header #header a{
  text-decoration:none;
}
.header #header a .iconfont{
      display:block;
      text-decoration: none;
      width: 46px;
      height: 100%;
}
.header #header .city{
    position: absolute;
    bottom: 0;
    left: 35%;
    height: 44px;
     display:flex;

}
.header #header .city .title{
    color: #1b5;
    pointer-events: none;
    font-size: 21px;
    font-weight: 400;

}
.header #header .city .city_selector{
    display: flex;
}
.header #header .city .city_selector span{
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    padding: 0 14px 0 4px;
    -webkit-transform: scale(.89);
    transform: scale(.89);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    display: block;
    line-height: 18px;
    text-align: center;
}
.header #header .tinycart{
    width: 46px;
    height: 100%;
    display: block;
    font-size: 22px;
    position: absolute;
    bottom: 0;
    left: 90%;

  }
.header #header .tinycart .iconfont{
    width: 46px;
    height: 100%;
    display: block;
    display: flex;
    font-size: 22px;
}



</style>
