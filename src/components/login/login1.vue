<template>
	<div>
		<mt-field label="username" placeholder="用户名" v-model="username"></mt-field>
	    <mt-field label="password" placeholder="密码" type="password" v-model="password"></mt-field>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Field } from 'mint-ui';
	Vue.component(Field.name, Field);
	export default{
		name:"login1",
		data(){
			return {
				username:"",
				password:""
			}
		}
	}
</script>

<style>
</style>