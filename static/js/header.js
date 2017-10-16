Vue.component('header-comp', {
	props: {"title_p": String,
			"flag":Boolean
	},
	template: '<header> <div class="list iconfont" @click="navbar()">&#xe623;</div> <div class="title">卖座电影</div> <div class="city">大连<i class="iconfont">&#xe600;</i></div> <div class="user iconfont">&#xe61f;</div> </header>',
	methods:{
		navbar:function(){
			this.flag = !this.flag;

		}
	}



});