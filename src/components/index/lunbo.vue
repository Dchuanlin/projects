<template>
	<div class="lunbo">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in msg" :key="item.li">
		  	<img :src="item.poster">
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	import Vue from "vue"
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	import Data from "@/api/getData"
	export default{
		name:"lunbo",
		data(){
			return {
				msg:[]
			}
		},
		mounted(){
			var objss={
				typeId:1,
				count:5
			}
			Data.indexgets(objss).then((res)=>{
				this.msg=res
				console.log(this.msg)
			})
		}
	}
</script>

<style scoped>
	.lunbo{
		width: 100%;
		height: 150px;
		overflow: hidden;
	}
	.lunbo img{
		width: 100%;
		
	}
</style>