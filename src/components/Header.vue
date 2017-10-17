<template>
  <div class="header">
    <div id="header">
      <a href="#" @click="nav"><i class="iconfont">&#xe623;</i></a>
      <div class="city">
        <h1 class="title">天猫超市</h1>
        <div class="city_selector">
          <span>大连</span>
        </div>
      </div>
      <a href="" class="tinycart"><i class="iconfont">&#xe501;</i></a>
    </div>

    <mt-popup v-model="dis" position="left" class="nav_wrap">
      <div class="nav" v-model="dis" position="left">
        <div class="title">
          <h2 class="logo">天猫超市</h2>
          <p>在乎每件生活小事</p>
        </div>
        <div class="count">
            <a href="#" class="item"><i class="iconfont">&#xe614;</i>超市首页</a>
            <a href="#" class="item"><i class="iconfont">&#xe60b;</i>搜索</a>
          <div class="categories"><i class="iconfont">&#xe700;</i><a href="#" class="all">全部分类</a>
            <a href="" class="category">糖果饼干</a>
            <a href="" class="category">个人洗护</a>
          </div>
        </div>  
      </div>
      
        <div class="foot">
        <ul>
          <li class="item">88包邮</li>
          <li class="item">极速达</li>
        </ul>
        <ul>
          <li class="item">正品保障</li>
          <li class="item">一站购齐</li>
          <li><a href="#">资质凭证</a></li>
        </ul>
        </div>
      
    </mt-popup>
  </div>

</template>

<script>
import { Popup } from 'mint-ui';
import axios from 'axios';
export default {
  name: 'header_c',
  data () {
    return {
      dis:false
      }
    },
  methods:{
    nav:function(){
       this.dis=true
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
.nav_wrap{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(61,66,69,.1);
    z-index: 1000;
     display: none;
  }
  .nav_wrap .nav{
    position:absolute;
    top:0;
    bottom: 0;
    left: 0;
    right:30.67%;
    background:#fff;
    z-index: 999;
  }
  .nav_wrap .nav .title{
    height:120px;
    background: #1B5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding-left:15px;
    color:#fff;
    text-align: left;
  }
  
  
  .nav_wrap .nav .title p{
      font-size: 12px;
    margin-top: 1px;
    letter-spacing: 3px;
  }
  .nav_wrap .nav .title .logo{
    line-height: 28px;
    font-size:20px;
  }
  
  .nav_wrap .nav .count a{
    text-decoration: none;
    cursor: auto;
    color:#666;
    font-size:12px;
  }
  .nav_wrap .nav .count .item{
    position: relative;
    display: block;
    height:16px;
    line-height:16px;
    padding: 14px 0;
    text-align:left;
    padding-left: 15px;
  }
  .nav_wrap .nav .count .item .iconfont{
    color: #1B5;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    margin-right: 8px;
  }
  .nav_wrap .nav .count .item::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 39px;
    right: 0;
    border-bottom: 1px solid #f6f6f6;
    height: 0;
  }
   .nav_wrap .nav .count .categories{
    height:44px;
    display: flex;
    padding:0 0 0 15px;
    line-height: 44px
   } 
   .nav_wrap .nav .count .categories .iconfont{
    color: #1B5;
    font-size:16px;
    margin-right: 8px;
   }
   .nav_wrap .nav .count .categories .all{
      margin-right:5px;
   }
   .nav_wrap .nav .count .categories .category{
      border-radius: 30px;
      padding: 0 4px;
      font-size: 12px;
      background-color: #eee;
      height: 20px;
      line-height: 20px;
      margin-top:12px;
      margin-right:4px;
   }
   .foot{
    z-index: 1001;
    position: absolute;
    bottom: 2%;
    left:0;


   }
   .foot ul{
    display: block;
    width:100%;
    height:20px;
   }
   .foot li{
    height:20px;
    line-height:20px;
    font-size:12px;
    float:left;
    padding:0 10px;
    color:#a2a2a2;
   }
   .foot li a{
    text-decoration: none;
    color:#d8d8d8;
   }



</style>
