<template>
  <div class="entrance">
   <a href="#">
     <div class="img-wrap">
       <img src="https://img.alicdn.com/tps/i4/TB1O516fE3IL1JjSZFMwu1jrFXa.png_170x120Q50s50.jpg_.webp">
     </div>
     <span>生鲜水果</span>
   </a>
   <a href="#">
     <div class="img-wrap">
       <img src="https://img.alicdn.com/tps/i4/TB1DBWnRXXXXXX2XXXXwu0bFXXX.png_170x120Q50s50.jpg_.webp">
     </div>
     <span>优先零食</span>
   </a>
   <a href="#">
     <div class="img-wrap">
       <img src="https://img.alicdn.com/tps/i4/TB1rcejRpXXXXcDXVXXwu0bFXXX.png_170x120Q50s50.jpg_.webp">
     </div>
     <span>奶品水印</span>
   </a>
   <a href="#">
     <div class="img-wrap">
       <img src="https://img.alicdn.com/tps/i4/TB1huTkSpXXXXX3aXXXwu0bFXXX.png_170x120Q50s50.jpg_.webp">
     </div>
     <span>粮油厨房</span>
   </a>
   <a href="#">
     <div class="img-wrap">
       <img src="https://img.alicdn.com/tps/i4/TB1x6L1cgsSMeJjSspeErS77VXa.PNG_170x120Q50s50.jpg_.webp">
     </div>
     <span>家用电器</span>
   </a>
   <a href="#">
     <div class="img-wrap">
       <img src="https://img.alicdn.com/tfs/TB12eD4RXXXXXc.XpXXXXXXXXXX-168-168.png_170x120Q90s50.jpg_.webp">
     </div>
     <span>母婴用品</span>
   </a>
   <a href="#">
     <div class="img-wrap">
       <img src="https://img.alicdn.com/tps/i4/TB1rvbRQVXXXXaOXVXXwu0bFXXX.png_170x120Q50s50.jpg_.webp">
     </div>
     <span>洗护美妆</span>
   </a>
   <a href="#">
     <div class="img-wrap">
       <img src="https://img.alicdn.com/tps/i4/TB1VOLWQVXXXXaxXFXXwu0bFXXX.png_170x120Q50s50.jpg_.webp">
     </div>
     <span>家居清洁</span>
   </a>
   <a href="#">
     <div class="img-wrap">
       <img src="https://img.alicdn.com/tps/i4/TB1nddzSVXXXXaxXFXXwu0bFXXX.png_170x120Q50s50.jpg_.webp">
     </div>
     <span>3C汽配</span>
   </a>
   <a href="#">
     <div class="img-wrap">
       <img src="https://img.alicdn.com/tps/i4/TB1Ac8uSVXXXXcRXFXXwu0bFXXX.png_170x120Q50s50.jpg_.webp">
     </div>
     <span>家纺内衣</span>
   </a>
  </div>
</template>

<script>
export default {
  name: 'entrance',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
  .entrance{
    background-color: #fff;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
    position: relative;
    z-index: 0;
    display: block;
    overflow: hidden;
    display: block;
    line-height: 1.231;
  }
  .entrance a{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 0.64rem;
    float: left;
    position: relative;
    text-decoration: none;
    color: inherit;
    margin-bottom: 0.1rem;
  }
  .entrance a div{
    display: block;
    width: 78.87%;
    position: relative;
    height:78.87%;}
  
  .entrance a div img{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 0.47rem;
    display: block;
    border-radius: 50%;
  }
  .entrance a span{
    color: #2F2F2F;
    font-size:0.12rem;
    line-height: 1;
    display: block;
    margin-top: 0.68rem;
  }

</style>