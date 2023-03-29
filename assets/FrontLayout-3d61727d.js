import{_ as h,R as v,m as g,a as _,r,o as f,c as b,b as t,d as a,w as o,F as x,e as p,f as e,t as k}from"./index-f258c36f.js";import{N as y,P as N}from"./pagination-9695d47d.js";import{c as d}from"./cart-07e8f437.js";import"./sweetalert2.all-d856edd8.js";const w={name:"my-component",data(){return{modules:[y,N]}},components:{RouterView:v},computed:{...g(d,["carts"])},methods:{..._(d,["getCart"]),scrollToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},mounted(){this.getCart();const n=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);document.querySelectorAll(".navbar-nav .nav-link").forEach(l=>{l.addEventListener("click",()=>{n&&document.querySelector(".navbar-collapse.show")&&document.querySelector(".navbar-toggler").click()})})}},B={class:"navbar sticky-top navbar-expand-md navbar-light bg-light"},T={class:"container"},F=p('<a class="navbar-brand" href="#"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676496643032.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=BnWQM8NuRPfUhK9%2FZBEtS%2BS4hOHGy32xLLD4Jx2O4mG5iZJVypjqmppQTOLVl7%2BXu441eNorIWgF9SJ90G9yxSAbj%2BmCKWFC1oHN2SKAzB8RpcAUtNXTRj8YV7cLtw2Kq7R%2FKAFLhdd6kb%2B7EvxqivdagIvxtyf6kK8vzN0kEWIb3dTMD63uxTNPEdH3qFnf9IFYjUmfTuFqlVie22ToeOdxQ0BanJemzHAEJgm%2BxnISvz0fepNzOKCaYnMhaDoYF6pc9RTNZDJ%2FUpAzzikxNL%2BIE3diPT%2BSVvaJ8vQWkbyPOReiLTPx6BFVXR15CPOf4VOx6QQkA1RVdetktOj05w%3D%3D" alt="" width="60"><span class="h6 mx-3" style="color:#4e6752;">Morizanko Nails Studio</span></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>',2),R={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},S={class:"navbar-nav"},z=t("i",{class:"bi bi-heart-fill"},null,-1),A=t("i",{class:"bi bi-cart-fill"},null,-1),V={class:"badge badge-pill rounded-pill bg-danger"},L={style:{"min-height":"calc(100vh - 40px)"}},O={class:"container"},E={class:"contact my-5"},P={class:"row flex-wrap g-4"},q={class:"col-md-4"},I=t("a",{class:"navbar-brand",href:"#"},[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676496643032.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BnWQM8NuRPfUhK9%2FZBEtS%2BS4hOHGy32xLLD4Jx2O4mG5iZJVypjqmppQTOLVl7%2BXu441eNorIWgF9SJ90G9yxSAbj%2BmCKWFC1oHN2SKAzB8RpcAUtNXTRj8YV7cLtw2Kq7R%2FKAFLhdd6kb%2B7EvxqivdagIvxtyf6kK8vzN0kEWIb3dTMD63uxTNPEdH3qFnf9IFYjUmfTuFqlVie22ToeOdxQ0BanJemzHAEJgm%2BxnISvz0fepNzOKCaYnMhaDoYF6pc9RTNZDJ%2FUpAzzikxNL%2BIE3diPT%2BSVvaJ8vQWkbyPOReiLTPx6BFVXR15CPOf4VOx6QQkA1RVdetktOj05w%3D%3D",alt:"",class:"mx-4",width:"60"}),t("span",{class:"h6 mx-3",style:{color:"#4e6752"}},"Morizanko Nails Studio")],-1),C={class:"d-flex mx-3 mt-5"},J=t("h6",null,"更多關於Morizanko",-1),K=p('<a href="https://line.me/R/ti/p/@285fyfqx"><img class="mx-4" style="width:30px;" src="https://cdn-icons-png.flaticon.com/128/2504/2504922.png" alt=""></a><a href="https://www.instagram.com/morizanko_nails/"><img style="width:30px;" src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt=""></a><a href="https://www.facebook.com/profile.php?id=100089475684235"><img class="mx-4" style="width:30px;" src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt=""></a>',3),M=t("div",{class:"col-md-4 d-flex justify-content-center"},[t("div",{class:""},[t("h5",null,"🤎 如何預約 / 詢問"),t("p",null,"請私訊官方Line ＠285fyfqx"),t("h5",null,"🏡 工作室位址"),t("p",null,"近桃園市區（南門市場）")])],-1),D=t("div",{class:"col-md-4"},[t("img",{style:{"max-width":"100%"},src:"https://i.imgur.com/hkiZo3R.png",alt:""})],-1),j=t("img",{src:"https://i.imgur.com/hOTAIBu.png",alt:""},null,-1),Q=[j],W=t("footer",{class:"footer py-2 bg-primary"},[t("div",{class:"container text-center"},[t("small",{class:"text-white fw-light mb-0"},"Copyright © 2023 Marizanko Nails Studio. All Rights Reserved. ")])],-1);function G(n,i,l,H,U,c){const s=r("RouterLink"),m=r("RouterView");return f(),b(x,null,[t("nav",B,[t("div",T,[F,t("div",R,[t("div",S,[a(s,{class:"nav-link",to:"/news"},{default:o(()=>[e("最新消息")]),_:1}),a(s,{class:"nav-link",to:"/reserve"},{default:o(()=>[e("預約須知")]),_:1}),a(s,{class:"nav-link",to:"/products"},{default:o(()=>[e("美甲款式")]),_:1}),a(s,{class:"nav-link",to:"/question"},{default:o(()=>[e("常見問題")]),_:1}),a(s,{class:"nav-link",to:"/about"},{default:o(()=>[e("聯絡我們")]),_:1}),a(s,{class:"nav-link",to:"/collect"},{default:o(()=>[z]),_:1}),t("div",null,[a(s,{class:"nav-link",to:"/cart"},{default:o(()=>[A,t("span",V,k(n.carts.length),1)]),_:1})])])])])]),t("main",L,[a(m)]),t("div",O,[t("div",E,[t("div",P,[t("div",q,[I,t("div",C,[J,a(s,{class:"nav-link",to:"/admin"},{default:o(()=>[e("後台")]),_:1}),K])]),M,D]),t("button",{class:"scroll-to-top",onClick:i[0]||(i[0]=(...u)=>c.scrollToTop&&c.scrollToTop(...u))},Q)])]),W],64)}const tt=h(w,[["render",G]]);export{tt as default};
