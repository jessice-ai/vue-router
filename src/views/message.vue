<template>
  <div>
  	<ul>
  		<li v-for="(val,index) in data" :key="index">{{val.title}} <a href="">删除</a></li>
  	</ul>
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
