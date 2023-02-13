import{_ as g,o as r,c,d as t,F as _,f as p,g as m,t as o,a as b,h as I,v as x}from"./index-959aee45.js";const{VITE_APP_URL:i,VITE_APP_PATH:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"azraelk",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},C={data(){return{products:[],productId:"",cart:{},isLoading:!1,loadingItem:"",user:{name:"",email:"",tel:"",address:""},message:""}},methods:{getCarts(){this.$http.get(`${i}/api/${u}/cart`).then(e=>{this.cart=e.data.data}).catch(e=>{console.error(e)})},updatedCartItem(e){const a={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${i}/api/${u}/cart/${e.id}`,{data:a}).then(d=>{this.getCarts(),alert(d.data.message),this.loadingItem=""}).catch(d=>{console.error(d)})},delCartItem(e){this.loadingItem=e.id,this.$http.delete(`${i}/api/${u}/cart/${e.id}`).then(a=>{this.getCarts(),alert(a.data.message),this.loadingItem=""}).catch(a=>{console.error(a)})},deleteAll(){this.$http.delete(`${i}/api/${u}/carts`).then(e=>{this.getCarts(),alert("購物車已全部刪除")}).catch(e=>alert(e.response.data.message))},changeLoading(e){this.loadingItem=e},onSubmit(){console.log(this.user)},isPhone(e){return/^(09)[0-9]{8}$/.test(e)?!0:"需要正確的電話號碼"}},mounted(){this.getCarts()}},f=t("div",null,"購物車",-1),v={class:"text-end"},$={class:"table align-middle"},y=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",null,"圖片"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",{class:"text-end"},"單價")])],-1),P=["disabled","onClick"],V=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),k=["src"],A={class:"input-group input-group-sm"},E=["onUpdate:modelValue","disabled","onChange"],T=["value"],L={class:"text-end"},U=t("td",{colspan:"4",class:"text-end"},"總計",-1),D={class:"text-end"},N=t("td",{colspan:"4",class:"text-end text-success"},"折扣價",-1),q={class:"text-end text-success"};function w(e,a,d,B,n,h){return r(),c(_,null,[f,t("div",v,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:a[0]||(a[0]=s=>h.deleteAll())}," 清空購物車 ")]),t("table",$,[y,t("tbody",null,[n.cart.carts?(r(!0),c(_,{key:0},p(n.cart.carts,s=>(r(),c("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:s.id===n.loadingItem,onClick:l=>h.delCartItem(s)},[V,b(" x ")],8,P)]),t("td",null,o(s.product.title),1),t("td",null,[t("img",{src:s.product.imageUrl,width:"50",alt:""},null,8,k)]),t("td",null,[t("div",A,[I(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":l=>s.qty=l,disabled:s.id===n.loadingItem,onChange:l=>h.updatedCartItem(s)},[(r(),c(_,null,p(20,l=>t("option",{value:l,key:"i+'12345'"},o(l),9,T)),64))],40,E),[[x,s.qty]])])]),t("td",L,o(s.total),1)]))),128)):m("",!0)]),t("tfoot",null,[t("tr",null,[U,t("td",D,o(n.cart.total),1)]),t("tr",null,[N,t("td",q,o(n.cart.final_total),1)])])])],64)}const S=g(C,[["render",w]]);export{S as default};
