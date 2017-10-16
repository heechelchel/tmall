<template>
  <mt-swipe :auto="2000" class="swiper">

    <mt-swipe-item><img src="https://img.alicdn.com/tfs/TB1UbTPhPihSKJjy0FeXXbJtpXa-1125-543.jpg_760x760Q75s50.jpg_.webp"></mt-swipe-item>
    <mt-swipe-item><img src="https://img.alicdn.com/tfs/TB15IJsdp9gSKJjSspbXXbeNXXa-1125-543.jpg_760x760Q75s50.jpg_.webp"></mt-swipe-item>
    <mt-swipe-item><img src="https://img.alicdn.com/tfs/TB1B_NZhfBNTKJjy0FdXXcPpVXa-1125-543.jpg_760x760Q75s50.jpg_.webp"></mt-swipe-item>

  </mt-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'swiper',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper{
    margin-top: 44px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 181px;
    overflow: hidden;
  }
  .swiper img{
    position: absolute;
    height: 100%;
    display: block;
    width: 100%;
    top: 0;
    left: 0;
    background-position: 50% 65%;
  }
</style>
