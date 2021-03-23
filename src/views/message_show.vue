<template>
  <div>
  	<!-- $route.params.id 当前路由对象中存着数据 -->
  	ID:{{$route.params.id}}

  	<div>
  		id:{{messageData.id}}
  		id:{{messageData.title}}
  		<button @click="goback">返回按钮</button>
  	</div>

  </div>
</template>

<script>
const allData =	[
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
export default {
	data(){
		return {
			messageData:{}
		}
	},
	mounted(){
		//$route.params.id 当前路由对象中存着传过来的数据
		const id = this.$route.params.id*1
		this.messageData = allData.find(detail => detail.id===id)
	},
	methods:{
		goback(){
			//this.$router.back() //返回上一个路由记录
			this.$router.go(-1) //返回上一个路由记录
		}
		
	},
	//侦听
	watch:{
		$route:function(value){ //监视路由的路径参数(params)变化
			//value 是当前路由对象 当前路由对象中存着传过来的数据
			const id = value.params.id*1
			this.messageData = allData.find(detail => detail.id===id)
		}
	}
}
</script>

<style>

</style>
