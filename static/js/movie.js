
Vue.component('movie-comp', {
    props: {"list": Array},
    template: '<div class="movie">' +
    '<ul>' +
    '<li class="item-movie" v-for="item in list" :key="item.moviename" v-if="item.count > 0">' +
    '<div class="img"><img :src="item.logo"></div>' +
    '<div class="desc">' +
    '<div class="left">' +
    '<div class="moviename">{{item.moviename}}</div>' +
    '<div class="count">' +
    '<span>{{item.count}}</span>' +
    '<span>家影院上映</span>' +
    '<span>2636738</span>' +
    '<span>人购票</span>' +
    '</div>' +
    '</div>' +
    '<div class="right">' +
    '<span>8.4</span>' +
    '</div>' +
    '</div>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>'
});


