<template>
	<div class="jiudian">
		<div class="jiudian1" v-for="item in msg2" :key="item.mj">
			<img :src="'../../../static/'+item.img"/>
			<span>{{item.name}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:"jiudian",
		data(){
			return {
				msg2:[{img:"N0llS0pheG5rMVp0andUU01CREUxNTY0MDI3ODk4.png",name:"酒店"},
					  {img:"OGNwOTFJZ05uUXpEakhUNWZyaWgxNTY0MDI3ODE5.png",name:"机票"},
					  {img:"c3llem5SZjI4akFaRTFYRnRLQzQxNTY0MDI3ODI1.png",name:"火车票"},
					  {img:"Z01KNHFOeldtUWVwakQ2YUI4U0YxNTY0MDI3ODE0.png",name:"商城"},
				      {img:"Y1dqaTJSU0cwSEQ0QXNUZjNZdFgxNTY0MDI3OTAy.png",name:"门票"}]
			}
		}
	}
</script>

<style scoped>
	.jiudian{
		width: 100%;
		height: 90px;
		display: flex;
	}
	.jiudian1{
		width: 20%;
	}
	.jiudian1 img{
		width: 80%;
		margin-bottom: -1rem;
	}
</style>