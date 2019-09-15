<template>
  <div id="app">
    <router-view/>
    <footered v-show="ht"></footered>
  </div>
</template>

<script>
	import Data from "./api/getData"
	import footered from "@/components/footer/footers"
export default {
  name: 'App',
  data(){
  	return {
  		ht:false
  	}
  },
  components:{
	    Data,
	    footered
  },
  watch:{
  	'$route':function(a){
  		console.log(a.path)
  		if(a.path=="/index"||a.path=="/order"||a.path=="/customer"||a.path=="/mine"){
  			this.ht=true
  		}else{
  			this.ht=false
  		}
  	}
  },
mounted(){
//	this.$router.push("/index")
	var obj={
			password: "Aa123456",
			smscode: '',
			country_code: '86',
			phone1: "15827422475",
			login_type: 1
			}
	var objs={
		typeId:1,
		count:3
	}
	Data.indexget().then((rel)=>{
		console.log(rel)
	})
	Data.indexpost(obj).then((rel)=>{
		console.log(rel)
	})
	Data.indexgets(objs).then((rel)=>{
		console.log(rel)
	})
}
}
</script>

<style>
*{
	padding: 0px;
	margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
}
</style>
