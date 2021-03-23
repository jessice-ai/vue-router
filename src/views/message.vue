<template>
  <div>
  	<ul>
  		<li v-for="(val,index) in data" :key="index">
  			<!-- ES6语法 做链接传值 -->
  			<router-link :to="`/ac/sm/detail/${val.id}`">{{val.title}}</router-link> 
  			<a href="">删除</a> <button @click="sunpush(`/ac/sm/detail/${val.id}`)">push jump</button>
  		</li>
  	</ul>
  	<!-- router-view 传值  sunMsg="sdun" 表示 传递的值为sdun  :sunMsg="sdun" 表示传递的是个变量 -->
  	<router-view sunMsg="sdun"></router-view>
  </div>
</template>

<script>
export default {
	data(){
		return {
			data:[
				{
					id:1,
					title:"message1",
				},
				{
					id:2,
					title:"message2",
				},
				{
					id:3,
					title:"message3",
				}
			]
		}
	},
	methods:{

		sunpush(path){
			this.$router.push(path)    //JS路由跳转,特点:点击返回按钮,可以返回当前路由,上一步
			this.$router.replace(path) //JS路由跳转,特点:点击返回按钮,跳出当前路由
		}
	}
}
</script>

<style>

</style>
