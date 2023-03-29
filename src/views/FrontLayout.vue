<template>
  <nav class="navbar sticky-top navbar-expand-md navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676496643032.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BnWQM8NuRPfUhK9%2FZBEtS%2BS4hOHGy32xLLD4Jx2O4mG5iZJVypjqmppQTOLVl7%2BXu441eNorIWgF9SJ90G9yxSAbj%2BmCKWFC1oHN2SKAzB8RpcAUtNXTRj8YV7cLtw2Kq7R%2FKAFLhdd6kb%2B7EvxqivdagIvxtyf6kK8vzN0kEWIb3dTMD63uxTNPEdH3qFnf9IFYjUmfTuFqlVie22ToeOdxQ0BanJemzHAEJgm%2BxnISvz0fepNzOKCaYnMhaDoYF6pc9RTNZDJ%2FUpAzzikxNL%2BIE3diPT%2BSVvaJ8vQWkbyPOReiLTPx6BFVXR15CPOf4VOx6QQkA1RVdetktOj05w%3D%3D"
          alt=""
          width="60"
        />
        <span class="h6 mx-3" style="color: #4e6752"
          >Morizanko Nails Studio</span
        ></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <RouterLink class="nav-link" to="/news">最新消息</RouterLink>
          <RouterLink class="nav-link" to="/reserve">預約須知</RouterLink>
          <RouterLink class="nav-link" to="/products">美甲款式</RouterLink>
          <RouterLink class="nav-link" to="/question">常見問題</RouterLink>
          <RouterLink class="nav-link" to="/about">聯絡我們</RouterLink>
          <RouterLink class="nav-link" to="/collect"
            ><i class="bi bi-heart-fill"></i
          ></RouterLink>
          <div>
            <RouterLink class="nav-link" to="/cart"
              ><i class="bi bi-cart-fill"></i>
              <span class="badge badge-pill rounded-pill bg-danger">{{
                carts.length
              }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <main style="min-height: calc(100vh - 40px)">
    <RouterView />
  </main>
  <div class="container">
    <div class="contact my-5">
      <div class="row flex-wrap g-4">
        <div class="col-md-4">
          <a class="navbar-brand" href="#"
            ><img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676496643032.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BnWQM8NuRPfUhK9%2FZBEtS%2BS4hOHGy32xLLD4Jx2O4mG5iZJVypjqmppQTOLVl7%2BXu441eNorIWgF9SJ90G9yxSAbj%2BmCKWFC1oHN2SKAzB8RpcAUtNXTRj8YV7cLtw2Kq7R%2FKAFLhdd6kb%2B7EvxqivdagIvxtyf6kK8vzN0kEWIb3dTMD63uxTNPEdH3qFnf9IFYjUmfTuFqlVie22ToeOdxQ0BanJemzHAEJgm%2BxnISvz0fepNzOKCaYnMhaDoYF6pc9RTNZDJ%2FUpAzzikxNL%2BIE3diPT%2BSVvaJ8vQWkbyPOReiLTPx6BFVXR15CPOf4VOx6QQkA1RVdetktOj05w%3D%3D"
              alt=""
              class="mx-4"
              width="60"
            />
            <span class="h6 mx-3" style="color: #4e6752"
              >Morizanko Nails Studio</span
            ></a
          >
          <div class="d-flex mx-3 mt-5">
            <h6>更多關於Morizanko</h6>
            <RouterLink class="nav-link" to="/admin">後台</RouterLink>
            <a href="https://line.me/R/ti/p/@285fyfqx">
              <img
                class="mx-4"
                style="width: 30px"
                src="https://cdn-icons-png.flaticon.com/128/2504/2504922.png"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/morizanko_nails/">
              <img
                style="width: 30px"
                src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100089475684235">
              <img
                class="mx-4"
                style="width: 30px"
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center">
          <div class="">
            <h5>🤎 如何預約 / 詢問</h5>
            <p>請私訊官方Line ＠285fyfqx</p>
            <h5>🏡 工作室位址</h5>
            <p>近桃園市區（南門市場）</p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            style="max-width: 100%"
            src="https://i.imgur.com/hkiZo3R.png"
            alt=""
          />
        </div>
      </div>
      <button class="scroll-to-top" @click="scrollToTop">
        <img src="https://i.imgur.com/hOTAIBu.png" alt="" />
      </button>
    </div>
  </div>
  <footer class="footer py-2 bg-primary">
    <div class="container text-center">
      <small class="text-white fw-light mb-0"
        >Copyright © 2023 Marizanko Nails Studio. All Rights Reserved.
      </small>
    </div>
  </footer>
</template>

<script>
import { RouterView } from "vue-router";
import { Navigation, Pagination } from "swiper";
import { mapState, mapActions } from "pinia";
import cartsStore from "../stores/cart.js";
export default {
  name: "my-component",
  data() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  components: {
    RouterView,
  },
  computed: {
    ...mapState(cartsStore, ["carts"]),
  },
  methods: {
    ...mapActions(cartsStore, ["getCart"]),
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.getCart();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // 獲取 Navbar 所有項目
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    // 設置所有項目的點擊事件
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // 如果是手機板且 Navbar 是展開狀態，則收合 Navbar
        if (isMobile && document.querySelector(".navbar-collapse.show")) {
          document.querySelector(".navbar-toggler").click();
        }
      });
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.navbar-nav {
  color: #4e6752ed;
  font-weight: 400;
  transition: 0.3s;
}
.navbar-nav :hover {
  background: #f0f4f1;
  color: #4e6752ed;
}
.banner .imgbox {
  height: 400px;
}
.banner img {
  position: absolute; /*设为绝对定位*/
  width: 100%;
  height: 400px;
  opacity: 0.9; /*设置透明度*/
}
.banner h2 {
  transform: translate(5%, 80%);
  font-size: 40px;
  color: #27612f;
  position: absolute;
  background-color: rgba(244, 251, 250, 0.512);
  width: 360px;
}
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}
.scroll-to-top img {
  width: 30px;
}
.nav-link {
  position: relative;
}
.nav-link:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background-color: #4e6752ed;
  transition: width 0.6s ease;
}
.nav-link:hover:before {
  width: 100%;
  left: 0;
}
</style>
