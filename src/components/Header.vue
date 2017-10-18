<template>
  <div class="header_wrap">
    
    <div class="header">
      <a href="#" @click="nav" ><i class="iconfont">&#xe621;</i></a>
      <h1 class="title">天猫超市</h1>
      <div class="city">
          <span>大连<i class="iconfont">&#xe605;</i></span>
      </div>
      <a href="#" ><i class="iconfont">&#xe507;</i></a>
    </div>
    <mt-popup v-model="dis" position="left" class="nav_wrap">
      <div class="nav">
        <div class="title">
          <h2 class="logo">天猫超市</h2>
          <p>在乎每件生活小事</p>
        </div>

        <div class="count">
            <a href="#" class="item"><i class="iconfont">&#xe614;</i>超市首页</a>
            <a href="#" class="item"><i class="iconfont">&#xe60b;</i>搜索</a>
          <div class="categories"><i class="iconfont">&#xe700;</i>
            <a href="#" class="all">全部分类</a>
            <a href="" class="category">糖果饼干</a>
            <a href="" class="category">个人洗护</a>
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
.header_wrap{
  width:3.2rem;
}
.heade{
  height: 0.44rem;
  width: 3.2rem;
}
.header_wrap .header {
  position:fixed;
  top:0;
  left:0;
  height:0.44rem;
  line-height: 0.44rem;
  width:3.2rem;
  background:rgba(100,100,100,0);
  display: block;
  font-size: 0.14rem;

}
.header_wrap .header a{
  width:0.46rem;
  height:0.44rem;
  line-height: 0.44rem;
  text-decoration: none;
  display: inline-block;
  float: left;
  
}
.header_wrap .header a:nth-of-type(2){
  float: right;
}
.header_wrap .header a .iconfont{
  font-size:0.18rem;
  vertical-align: top;
  color:#fff;
}
.header_wrap .header h1{
  display: inline-block;
  font-size:0.24rem;
  width:1.32rem;
  height:0.44rem;
  line-height: 0.44rem;
  float: left;
  color:#fff;
}
.header_wrap .header .city{
  display: inline-block;
  font-size:12px;
  float: left;
  color:#fff;
  height:0.44rem;
  line-height:0.44rem;
}
.header_wrap .header .city span{
  border:0.01rem solid #d8d8d8;
  border-radius: 0.04rem;
  padding:0.02rem 0.02rem 0.02rem 0.02rem;
  position:relative;
}
.header_wrap .header .city span .iconfont{
    color:#fff;
    font-size:0.12rem;
}
  .nav_wrap{
    position:absolute;
    width:3.2rem;
    height:2.69rem;
    background:rgba(61,66,69,.1);
    z-index: 1000;
    top:0;
    left:0;
  }
  .nav_wrap .nav{
    position:absolute;
    top:0;
    background:#fff;
    z-index:1000;
    width:100%;
    height:388px;
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
    z-index:1001;
    box-sizing: border-box;
    width:100%;
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
  .nav_wrap .nav .count{
    position:absolute;
    top:80%;
    left:0;
    z-index: 1001;
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
   .nav_wrap .nav .foot{
    z-index: 1001;
    position: absolute;
    bottom: 0;
    left:0;


   }
   .nav_wrap .nav .foot ul{
    display: block;
    width:100%;
    height:20px;
   }
   .nav_wrap .nav .foot li{
    height:20px;
    line-height:20px;
    font-size:12px;
    float:left;
    padding:0 10px;
    color:#a2a2a2;
   }
   .nav_wrap .nav .foot li a{
    text-decoration: none;
    color:#d8d8d8;
   }



</style>
