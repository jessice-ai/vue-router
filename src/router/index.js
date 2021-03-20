/**
 * 路由器模块
 */
import Vue from 'vue' //vue-router是Vue的插件，顾引入vue
import VueRouter from 'vue-router'
import sunAbout from '../views/about.vue'
import sunHome from '../views/home.vue'
import sunNews from '../views/news.vue'
import sunmessage from '../views/message.vue'
import message_show from '../views/message_show.vue'

Vue.use(VueRouter)

//向外暴露VueRouter对象
export default new VueRouter({
	//这里配置一个或多个路由
	routes:[
		{
			path:'/ab', //指定路由名称
			component:sunAbout,  //路由指向的组件,注意这里值不能使用引号
			
		},
		{
			path:'/ac', //指定路由名称
			component:sunHome,  //路由指向的组件,注意这里值不能使用引号
			// 说明: 组件 sunAbout 页面内部还要使用路由，则需要使用嵌套路由 设置关键词:children
			children:[
				{
					path:'/ac/sn',  //这里path需要注意写法，可简化为 path:'sn'
					component:sunNews
				},
				{
					path:'/ac/sm',
					component:sunmessage,
					children:[
						{
							path:'/ac/sm/detail/:id', //路由传值,使用:id占位
							component:message_show
						}
					]
				},
				{
					path:'/', //给嵌套路由设置一个默认路由
					redirect:'/ac/sn'
				}
			]
		},
		{
			path:'/', //请求根路由时,重定向到首页路由
			redirect:'/ac'
		}

	]
})