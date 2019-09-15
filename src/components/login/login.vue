<template>
	<div class="login">
		<div class="login0">
			<div class="login1">登录</div>
			<qiehuan></qiehuan>
			<div class="login2">
			   <router-view></router-view>
			</div>
		</div>
		<div class="login4">
			<mt-button type="primary" size="large" @click="login">登录</mt-button>
			<mt-button type="normal" class="login5" size="large">注册</mt-button>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Button } from 'mint-ui';
	Vue.component(Button.name, Button);
	import qiehuan from "./qiehuan"
	import Data from "@/api/getData"
	export default{
		name:"login",
		components:{
			qiehuan
		},
		methods:{
			login(){
				Data.indexpost().then((res)=>{
					console.log(res)
				})
				
				this.$router.push("/index")
			}
		},
		created(){
		    this.$router.push("/login/login1")
		}
	}
</script>

<style scoped>
	.login0{
		width: 100%;
		height:90px;
		background-image: url(../../assets/topbg.cf9efa9.png);
		background-size: cover;
	}
	.login1{
		width: 100%;
		height:40px;
		line-height: 40px;
		color: white;
	}
	.login2{
		width: 100%;
		height:90px;
		margin-top: 10px;
	}
	.login4{
		width: 90%;
		height:80px;
		margin-top:130px;
		padding-left:5%;
	}
	.login5{
		margin-top: 20px;
	}
</style>