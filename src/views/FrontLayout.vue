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
        class="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <RouterLink class="nav-link" to="/">首頁</RouterLink>
          <RouterLink class="nav-link" to="/reserve">預約須知</RouterLink>
          <RouterLink class="nav-link" to="/products">美甲款式</RouterLink>
          <RouterLink class="nav-link" to="/cart">購物車</RouterLink>
          <RouterLink class="nav-link" to="/about">聯絡我們</RouterLink>
          <RouterLink class="nav-link" to="/admin">後台</RouterLink>
          <RouterLink class="nav-link" to="/login">登入後台</RouterLink>
        </div>
      </div>
    </div>
  </nav>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="modules"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676582316254.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kh5qrYFIbgYOpvIfn4cPQFWxGj9zPtn6VIDUcYKuwD2PcOdE0UjleHdX9Xf3qvWvB6fjTOvg7oIX70IJept2XGuQvlBoXOLwtfKBVMCOlfZ5RY1Nzmed3Zl9fvdSb4J3Pq7T5sREo3TcFCs1xpTBuJxHpxHmjUzG4nuFvWhhQSKRQ05iPAwmc76RvdeS9NEhIJJ9M85bRuA2GiblAYlvVy1WUuQnuwwiocErzDYhypaPKfDv05B5HodzC3xWzpRncy%2F8jpAC%2F5sXigBnxx66h%2BFN6O9adK%2FutGjMR6OcXMQPjJKBHir03awffsaAL45xUtXLsfBPtyNCC9Z%2BNeLhUQ%3D%3D"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676582268953.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=T6IFGKTYN%2BYhYGvYS%2FelZlUcaimEfDgf%2FEwSJq3Xda3QhPF9G0yHt%2F1uZm5urc81EJeGnaysbRPFzzBjn5KwervUnfnO5Uy0wgC3ppJU2gNyYfcZA3RuIT5FuhFSAvCBuIFOj0je5UBPGqzRWLwEtkQ5pyKuz%2FqvmuqI1xZ7i%2BRi%2Bhbq1E%2FOJGDJYOZopiqLbbrQ8pgqGGXcoDWtyHbOvUeCqwMM%2BC%2Flj1uqY0P4Petm7GOmtFam9HFWbSc8G%2FIu44YKwN4mzvcU%2BerYhtvWAlXjSGBG7MSI6z%2BpydqhIVse8VjA03rPpMaHokBfXJbfeSyzPqCpbkDajOXbk8ME3Q%3D%3D"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
  <main style="min-height: calc(100vh - 40px)">
    <RouterView />
  </main>
  <div class="container">
    <div class="contact">
      <div class="row flex-wrap g-4">
        <div class="col-md-6">
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
        <div class="col-md-6 d-flex justify-content-between">
          <div class="d-none d-sm-block">
            <h5>🤎 如何預約 / 詢問</h5>
            <p>請私訊官方Line ＠285fyfqx</p>
            <h5>🏡 工作室位址</h5>
            <p>近桃園市區（南門市場）</p>
          </div>
          <img
            width="350px"
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  data() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  components: {
    RouterView,
    Swiper,
    SwiperSlide,
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
</style>