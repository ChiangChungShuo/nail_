import{_ as c,r as a,o as u,c as l,b as d,d as e,a as p,t as r,F as _}from"./index-4a4d3a3a.js";const{VITE_APP_URL:g,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"azraelk",BASE_URL:"/weekk66/",MODE:"production",DEV:!1,PROD:!0},P={data(){return{isLoading:!1,product:{}}},methods:{gteProduct(){console.log("$route",this.$route);const{id:s}=this.$route.params;console.log(s),console.log("router",this.$router),this.$http.get(`${g}/api/${h}/product/${s}`).then(t=>{this.product=t.data.product}).catch(t=>{console.error(t)})}},mounted(){this.gteProduct(),this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1e3)}},m=["src"];function V(s,t,L,f,o,E){const i=a("VueLoading");return u(),l(_,null,[d(i,{active:o.isLoading,"onUpdate:active":t[0]||(t[0]=n=>o.isLoading=n)},null,8,["active"]),e("div",null,[p(" 單一產品頁面 "),e("h2",null,r(o.product.title),1),e("img",{src:o.product.imageUrl,width:"500",alt:""},null,8,m),e("p",null,r(o.product.description),1)])],64)}const v=c(P,[["render",V]]);export{v as default};
