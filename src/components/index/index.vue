<template>
	<div>
		<heads></heads>
		<lunbo></lunbo>
		<jiudian></jiudian>
	</div>
	
</template>

<script>
	import heads from "./sousuo"
	import lunbo from "./lunbo"
	import jiudian from "./jiudian"
	export default{
		name:"index",
		components:{
			heads,
			lunbo,
			jiudian
		}
	}
</script>

<style>
</style>