<template>
	<div class="sousuo">
		<div class="sousuo1">
			武汉 
		</div>
		<div class="sousuo2">
			<input type="text" placeholder="搜索的关键词" v-model="values">
			<span class="search"></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"sousuo",
		data(){
			return {
				values:""
			}
		}
	}
</script>

<style scoped>
	.sousuo{
		width: 100%;
		height:40px;
		line-height: 40px;
		display: flex;
		position: fixed;
		z-index: 999;
		top: 0px;
	}
	.sousuo1{
		width: 25%;
		color: white;
		font-size: 1rem;
		font-weight: 600;
	}
	.sousuo2{
		width: 75%;
		position: relative;
	}
	.sousuo2 input{
		width: 75%;
		height: 25px;
		border-radius:10px;
		outline: none;
		border:solid 1px white;
		padding-left: 12%;
	}
	.search{
		display: inline-block;
		width:1rem;
		height: 1rem;
		background-image: url(../../assets/Shape@3x.1a4219f.png);
		background-size: cover;
		position: absolute;
		z-index: 999;
		top: 0.7rem;
		left: 1.3rem;
	}
</style>