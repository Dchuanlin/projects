import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import index from '@/components/index/index'
import order from '@/components/order/order'
import customer from '@/components/customer/customer'
import mine from '@/components/mine/mine'

import login1 from '@/components/login/login1'
import login2 from '@/components/login/login2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:login
    },
    {
    	path:"/login",
    	name:"login",
    	component:login,
    	children:[
    			{
    				path:"login1",
    			  component:login1
    			},
    			{
    				path:"login2",
    			  component:login2
    			}
    	]
    },
    {
    	path:"/index",
    	name:"index",
    	component:index
    },
    {
    	path:"/order",
    	name:"order",
    	component:order
    },
    {
    	path:"/customer",
    	name:"customer",
    	component:customer
    },
    {
    	path:"/mine",
    	name:"mine",
    	component:mine
    }
  ]
})
