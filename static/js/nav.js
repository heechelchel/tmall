/**
 * Created by Administrator on 2017/10/10 0010.
 */
Vue.component('nav-comp', {
    props: {"flag":Boolean
    },
    template: '<div class="nav" v-if="flag"> <nav> <ul> <li><a href="#">首页<i class="iconfont">&#xf0343;</i></a></li> <li><a href="./html/movie.html">影片<i class="iconfont">&#xf0343;</i></a></li> <li><a href="">影院<i class="iconfont">&#xf0343;</i></a></li> <li><a href="">商城<i class="iconfont">&#xf0343;</i></a></li> <li><a href="">我的<i class="iconfont">&#xf0343;</i></a></li> <li><a href="">卖座卡<i class="iconfont">&#xf0343;</i></a></li> </ul> </nav> </div>',

});