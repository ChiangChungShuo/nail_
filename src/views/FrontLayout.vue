<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676496643032.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BnWQM8NuRPfUhK9%2FZBEtS%2BS4hOHGy32xLLD4Jx2O4mG5iZJVypjqmppQTOLVl7%2BXu441eNorIWgF9SJ90G9yxSAbj%2BmCKWFC1oHN2SKAzB8RpcAUtNXTRj8YV7cLtw2Kq7R%2FKAFLhdd6kb%2B7EvxqivdagIvxtyf6kK8vzN0kEWIb3dTMD63uxTNPEdH3qFnf9IFYjUmfTuFqlVie22ToeOdxQ0BanJemzHAEJgm%2BxnISvz0fepNzOKCaYnMhaDoYF6pc9RTNZDJ%2FUpAzzikxNL%2BIE3diPT%2BSVvaJ8vQWkbyPOReiLTPx6BFVXR15CPOf4VOx6QQkA1RVdetktOj05w%3D%3D"
          alt=""
          class="d-inline-block"
          width="60"
        />
        <span class="h6 mx-3" style="4E6752">Marizanko Nails Studio</span></a
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
          <RouterLink class="nav-link" to="/admin">後台</RouterLink>
          <RouterLink class="nav-link" to="/login">登入後台</RouterLink>
          <RouterLink class="nav-link" to="/favourite"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              /></svg
          ></RouterLink>
          <div>
            <RouterLink class="nav-link" to="/cart"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                /></svg
            ></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="banner">
    <div class="imgbox">
      <img
        src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676658066691.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=n%2FMqclm0fo8XLDD%2BqlGxifQDkZmYS%2BtvagAcKztML5CkOR%2FEpLefvh%2BCeq%2FLxIIzzZkyS%2FQzQmwXVmq5AI7w0nnV%2BrDs4j7qrvuLetasyDLYCy323TggNPZf0vq7rfISQmxJMUuh1woippKBnyCoB0EcVH31pmItqwZMjcejKPpFK%2BVuCoKYKg4VmmVUdP4sF3qZIjUEsEFPG6de1ZBaeBmudJsqReOKj6bdwQMu5AWADM55OedxoDrM7f5Uqzonccvd8mS66H87KYoT2x80%2BbFBD86C6JFLBBuXG8yPsJn0L30YpFOPLO2Kc%2B%2F8yzIl33mr%2FJibqpW9Vr%2BSwC%2BT3g%3D%3D"
      />
      <h2>你今天，美甲了嗎？</h2>
    </div>
  </div>
  <main style="min-height: calc(100vh - 40px)">
    <RouterView />
  </main>
  <div class="container">
    <div class="contact">
      <div class="row flex-wrap g-4">
        <div class="col-md-4">
          <a class="navbar-brand" href="#"
            ><img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676496643032.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BnWQM8NuRPfUhK9%2FZBEtS%2BS4hOHGy32xLLD4Jx2O4mG5iZJVypjqmppQTOLVl7%2BXu441eNorIWgF9SJ90G9yxSAbj%2BmCKWFC1oHN2SKAzB8RpcAUtNXTRj8YV7cLtw2Kq7R%2FKAFLhdd6kb%2B7EvxqivdagIvxtyf6kK8vzN0kEWIb3dTMD63uxTNPEdH3qFnf9IFYjUmfTuFqlVie22ToeOdxQ0BanJemzHAEJgm%2BxnISvz0fepNzOKCaYnMhaDoYF6pc9RTNZDJ%2FUpAzzikxNL%2BIE3diPT%2BSVvaJ8vQWkbyPOReiLTPx6BFVXR15CPOf4VOx6QQkA1RVdetktOj05w%3D%3D"
              alt=""
              class="mx-4"
              width="60"
            />
            <span class="h6 mx-3" style="clolor: 4e6752"
              >Marizanko Nails Studio</span
            ></a
          >
          <div class="d-flex mx-3 mt-5">
            <h6>更多關於Morizanko</h6>
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
            src="https://s3-alpha-sig.figma.com/img/41bf/86e6/c53833a8e5ef47ac5bc906e4e6feed9d?Expires=1677456000&Signature=phTQVKixRCca8R6xCIPlFpQw3GWHfUUu~5FA9Mjwhoy1uWshqrP7COTk7EqJ5EASVz6zjeMDo1-sasLUS549EEY4ZFMHmnYI7dgekov2G~JXLR3Gx4biTTUvMxrw2ha3YhCTEeUuTn8i2Aa2hSetlioeh8Ma8AWfTIxlWUmPSvzRbWSC~6xvoSMf8d5nJyB1tlHSoIaU7zlmlL3Q7Ch7HKPGhSLjJgwJnVOoAkC46CJF3V3UAYS4jZRMMN4-he72EAEc1oKoBqV7QLU4tR8A~4Ewpux20j9z5naECJCbd2Gmh6hkyC2sqBV57auYa0AXy0d1gHdFwLfFJsGYy2lcDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </div>
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
import { RouterView } from 'vue-router';
import { Navigation, Pagination } from 'swiper';
export default {
  name: 'my-component',
  data() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  components: {
    RouterView,
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
  transform: translate(5%,80%);
  font-size: 40px;
  background-color: rgb(245, 255, 255);
  color: #27612f;
  position: absolute;
}
</style>