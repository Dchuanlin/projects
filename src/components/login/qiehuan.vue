<template>
	<ul class="qh">
		<router-link tag="li" class="fl" @click.native="fn1(index)" :to="'/login/'+item.tourl" :class="{actives:item.bol}" v-for="(item,index) in msg" :key="item.ms">{{item.name}}</router-link>
	</ul>
</template>

<script>
	export default{
		name:"qihuan",
		data(){
			return {
				msg:[
						{name:"账号密码登录",tourl:"login1",bol:true},
				    	{name:"验证码登录",tourl:"login2",bol:false}
				    ]
			}
		},
		methods:{
			 fn1:function(index){
			 	for(var i=0;i<this.msg.length;i++){
			 		this.msg[i].bol=false
			 	}
			 	this.msg[index].bol=true
			 	this.$router.push(this.msg[index].tourl)
			 }
		}
	}
</script>

<style scoped>
	.qh{
		width: 100%;
		height: 30px;
		line-height: 30px;
		margin-top: 20px;
		list-style: none;
		display: flex;
	}
	.fl{
		width: 50%;
		color: darkslategray;
	}
	.actives{
		color:white ;
		border-bottom: solid 2px blue;
	}
</style>