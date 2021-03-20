<template>
  <div>
  	<ul>
  		<li v-for="(val,index) in data" :key="index">{{val}}</li>
  	</ul>
  </div>
</template>

<script>

export default {
	data(){
		return {
			data:[
				"a1","a2","a3","a4"
			]
		}
	}
}
</script>

<style>

</style>
