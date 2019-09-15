<template>
	<div class="footers" @click="fn">
		<img v-show="!bols" :src="'../../../static/'+obj.img">
		<img v-show="bols" :src="'../../../static/'+obj.img1"/>
		<br/>
		<span :class="{active:bols}">{{obj.name}}</span>
	</div>
</template>

<script>
	export default {
		name:"footers",
		props:["obj","mark","sel"],
		created(){
			console.log(this.bols)
			
		},
		computed:{
			'bols':function(){
				if(this.mark==this.sel){
					return true
				}else{
					return false
				}
			}
		},
		methods:{
			fn(){
				this.$emit('c',this.mark)
				this.$router.push(this.mark)
			}
		}
	}
</script>

<style scoped>
	.footers{
		width: 25%;
	}
	.footers img{
		width: 50%;
	}
	.active{
		color: red;
	}
</style>