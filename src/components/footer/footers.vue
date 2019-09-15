<template>
	<div class="footered">
		<Footers v-for="(item,ind) in msg1" :key="item.sm" :sel="sel" :obj="item" :mark="item.tourl" @c="getVal"></Footers>
	</div>
</template>

<script>
	import Footers from "./footer"
	export default {
		name:"footers",
	
		components:{
			Footers
		},
		created(){
			
		},
		data(){
			return {
				msg1:[{name:"首页",img:"home1.png",img1:"home.png",tourl:"/index",bols:true},
						{name:"订单",img:"books.png",img1:"book.png",tourl:"/order",bols:false},
						{name:"客服",img:"kefu.png",img1:"kefu.png",tourl:"/customer",bols:false},
						{name:"我的",img:"mine1.png",img1:"mine.png",tourl:"/mine",bols:false}
					],
					sel:'/index'
			}
		},
		methods:{
			getVal(v){
				this.sel = v;
			}
//			fn2:function(ind){
//				console.log("aaa")
//				for(var i=0;i<this.msg1.length;i++){
//					this.msg1[i].bols=false
//				}
//				this.msg1[ind].bols=true
//				this.$router.push(this.msg1[ind].tourl)
//			}
		}
	}
</script>

<style scoped>
	.footered{
		width: 100%;
		height: 60px;
		display: flex;
		padding-top: 2%;
		border-top: solid 1px gainsboro;
		z-index: 999;
		position: fixed;
		bottom: 0px;
	}
</style>