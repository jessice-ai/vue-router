<template>
  <div>
  	<ul>
  		<li v-for="(val,index) in data" :key="index">
  			<!-- ES6语法 做链接传值 -->
  			<router-link :to="`/ac/sm/detail/${val.id}`">{{val.title}}</router-link>
  			<a href="">删除</a>
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
	// mounted(){
	// 	//模拟ajax请求返回数据
	// 	setTimeout(()=>{
	// 		const sundata = [
	// 			{
	// 				id:1,
	// 				title:"message1",
	// 			},
	// 			{
	// 				id:2,
	// 				title:"message2",
	// 			},
	// 			{
	// 				id:3,
	// 				title:"message3",
	// 			}
	// 		]
	// 		this.data = sundata
	// 	},1000)
	// }

}
</script>

<style>

</style>
