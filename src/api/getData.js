import axios from "axios"
import qs from "qs"
const indexpost=(params)=>{
	return axios.post("/api/index/index/indexpic",qs.stringify({params})).then(res=>res.data)
}
const indexgeted=()=>{
	return axios.get("/api/index/index/indexpic").then(res=>res.data)
}
const indexget=()=>{
	return axios.get("/damai/index/types").then(res=>res.data)
}
const indexgets=(datas)=>{
	return axios.get("/damai/index/details",{params:{...datas}}).then(res=>res.data)
}
export default {
	indexpost,
	indexget,
	indexgets,
	indexgeted
}
