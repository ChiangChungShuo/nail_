<template>
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
  <div class="container">
    <h2 class="m-5">最新消息</h2>
    <div class="news d-flex justify-content-between mb-5">
      <div class="card" style="width: 18rem">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676584071318.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lpf3C1%2F2mtC8DlCQwSUTyiI5J5s5tH8kL1t5xkh6jzQIoq5nuVnghoLYfxdtvEk3CuRsbb6iMxlbE5fUOf3BeOgWmFFl6j%2Fd8PMT1ieomE%2FXCgmGb1yQp%2FjBrJYQF25iHMWM%2FoJmqbmGPFzdALk5hUxUH4e5d5tDZs2Ezgf1DJHupv9HkrSx6GUaHZWR8cZHBHIYiQqlA%2FWTyahby2EGbAE74q1%2B53vSpo7WlIaD2Mv5xmHfVYogLq7QJ9NJmE1HMM7DDT3fRe9TNaWwWwSj%2BUWQKLGB16qPx7sa6IqNDNo0adRUqxP7MNhPPIZDwJI141mEDEz07Y7toOg%2FgZy4hQ%3D%3D"
          class="card-img-top"
          alt="img"
        />
        <div class="card-body">
          <h5 class="card-title">聖誕優惠</h5>
          <del>指定款NT$1399</del>
          <p class="card-text">聖誕優惠價NT$999</p>
          <a href="#" class="btn btn-primary">活動詳情</a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676584071318.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lpf3C1%2F2mtC8DlCQwSUTyiI5J5s5tH8kL1t5xkh6jzQIoq5nuVnghoLYfxdtvEk3CuRsbb6iMxlbE5fUOf3BeOgWmFFl6j%2Fd8PMT1ieomE%2FXCgmGb1yQp%2FjBrJYQF25iHMWM%2FoJmqbmGPFzdALk5hUxUH4e5d5tDZs2Ezgf1DJHupv9HkrSx6GUaHZWR8cZHBHIYiQqlA%2FWTyahby2EGbAE74q1%2B53vSpo7WlIaD2Mv5xmHfVYogLq7QJ9NJmE1HMM7DDT3fRe9TNaWwWwSj%2BUWQKLGB16qPx7sa6IqNDNo0adRUqxP7MNhPPIZDwJI141mEDEz07Y7toOg%2FgZy4hQ%3D%3D"
          class="card-img-top"
          alt="img"
        />
        <div class="card-body">
          <h5 class="card-title">聖誕優惠</h5>
          <del>指定款NT$1399</del>
          <p class="card-text">聖誕優惠價NT$999</p>
          <a href="#" class="btn btn-primary">活動詳情</a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676584071318.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lpf3C1%2F2mtC8DlCQwSUTyiI5J5s5tH8kL1t5xkh6jzQIoq5nuVnghoLYfxdtvEk3CuRsbb6iMxlbE5fUOf3BeOgWmFFl6j%2Fd8PMT1ieomE%2FXCgmGb1yQp%2FjBrJYQF25iHMWM%2FoJmqbmGPFzdALk5hUxUH4e5d5tDZs2Ezgf1DJHupv9HkrSx6GUaHZWR8cZHBHIYiQqlA%2FWTyahby2EGbAE74q1%2B53vSpo7WlIaD2Mv5xmHfVYogLq7QJ9NJmE1HMM7DDT3fRe9TNaWwWwSj%2BUWQKLGB16qPx7sa6IqNDNo0adRUqxP7MNhPPIZDwJI141mEDEz07Y7toOg%2FgZy4hQ%3D%3D"
          class="card-img-top"
          alt="img"
        />
        <div class="card-body">
          <h5 class="card-title">聖誕優惠</h5>
          <del>指定款NT$1399</del>
          <p class="card-text">聖誕優惠價NT$999</p>
          <a href="#" class="btn btn-primary">活動詳情</a>
        </div>
      </div>
    </div>
  </div>
  <div class="about bg-warning d-flex justify-content-center p-5">
    <div class="card mb-3" style="max-width: 1200px">
      <div class="row g-4">
        <div class="col-md-4">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676585388198.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TosivJb3LmGFvvIHDlGbsqFEj5b130YpcOF1AAQZzvdN0q7%2Bx9ivlHIpdbZx%2BMuybBisuH26wfGdf%2BeaN5NjPTW2yky8LxtQ3qkt7wLZxTfFzuTEMCXq6g6mLAbBbFVvu%2FGgVUKK2%2FKvfFzXLbiJx%2FR1H7Z7XwJ76L7a4rHRQKBJM3ZGhLicm8R72B%2Fmwv7nyWo4pHAWNR%2F0NwMFNQNsPjDJ46u0EjnI96XiuNqEItA2hpCHIhjVk5%2BQO72bXfwVvTE72QhoQeDiNAYDltyLlHg8UiN676WDVPEQFfhvvqjLMnjoBZO0PTAl9UtEBg9z4B7yafbcturcIAAHwPJAuA%3D%3D"
            class="img-fluid rounded-start"
            alt=""
            height=""
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5
              class="card-title"
              style="color: #4e6752; font-weight: 600; font-size: 40px"
            >
              關於 Ｍorizanko - 冉冉森林
            </h5>
            <p
              class="card-text"
              style="font-weight: 400; font-size: 20px; line-height: 49px"
            >
              mori來自日語的もり是森林的意思， zanko則是日語的殘光、餘暉。
              冉冉森林是希望帶給大家像森林般的變化萬千，
              但不是那種強而濃烈的瞬息萬變。
              希望像夕陽的餘暉、日出的塵霧冉冉、湖泊的水光粼粼，
              緩緩的、輕輕慢慢的，用我看世界的角度及獨特的色彩風格，
              創作在指尖上，帶著一點光透，滲透這片美甲的森林。
              希望每個來到冉冉森林的人都能喜歡我們的風格，
              也在每一次尋找不同色彩的過程中，更認識自己。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><div class="swiper-slide">
        <div class="card mb-4 h-100">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676484277483.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LGt6CRZe00SsaAx%2FYJAsXqo65x7N4xg%2Bhdm%2BAcIijOsjycqYSQUJeT67JqZ%2FDSTXcaLUbXUCroaw%2BTvPYSMBgx5lH4aTHA%2BX6VSBawOkRomp68Z5oRpGJVtZmBrA9lszddaTVowQgzaHE7%2FhWOafDDOaqmR%2BmgFex0wnDaHSfAHZUXRk%2BaKjteig6pqipUw0LYfnLIDph6p995vwmcgbMi9b1I0Jz7opsmxf9xT2vHBOgkYTghAA7AALWzY6%2FDGDB7t6mpkCqP%2BzUYzcjb4MFNYS6qt732NndQY3nM4HACl9c9YSbwEWiDY4o6nbDRaTU1wzJxiq1HDL06KBDiYavw%3D%3D"
            class="card-img-top"
            alt="product-image"
          />
          <div class="card-body">
            <h6 class="card-title">大漂亮</h6>
            <div
              class="
                card-text
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <del>NT 1399 元</del>
              <strong class="text-danger">NT 999元</strong>
            </div>
            <RouterLink class="nav-link" to="/products"
              ><button class="btn btn-outline-primary w-100 mt-2 I-btn">
                前往商品
              </button></RouterLink
            >
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="swiper-slide">
        <div class="card mb-4 h-100">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676484277483.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LGt6CRZe00SsaAx%2FYJAsXqo65x7N4xg%2Bhdm%2BAcIijOsjycqYSQUJeT67JqZ%2FDSTXcaLUbXUCroaw%2BTvPYSMBgx5lH4aTHA%2BX6VSBawOkRomp68Z5oRpGJVtZmBrA9lszddaTVowQgzaHE7%2FhWOafDDOaqmR%2BmgFex0wnDaHSfAHZUXRk%2BaKjteig6pqipUw0LYfnLIDph6p995vwmcgbMi9b1I0Jz7opsmxf9xT2vHBOgkYTghAA7AALWzY6%2FDGDB7t6mpkCqP%2BzUYzcjb4MFNYS6qt732NndQY3nM4HACl9c9YSbwEWiDY4o6nbDRaTU1wzJxiq1HDL06KBDiYavw%3D%3D"
            class="card-img-top"
            alt="product-image"
          />
          <div class="card-body">
            <h6 class="card-title">大漂亮</h6>
            <div
              class="
                card-text
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <del>NT 1399 元</del>
              <strong class="text-danger">NT 999元</strong>
            </div>
            <RouterLink class="nav-link" to="/products"
              ><button class="btn btn-outline-primary w-100 mt-2 I-btn">
                前往商品
              </button></RouterLink
            >
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="swiper-slide">
        <div class="card mb-4 h-100">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676484277483.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LGt6CRZe00SsaAx%2FYJAsXqo65x7N4xg%2Bhdm%2BAcIijOsjycqYSQUJeT67JqZ%2FDSTXcaLUbXUCroaw%2BTvPYSMBgx5lH4aTHA%2BX6VSBawOkRomp68Z5oRpGJVtZmBrA9lszddaTVowQgzaHE7%2FhWOafDDOaqmR%2BmgFex0wnDaHSfAHZUXRk%2BaKjteig6pqipUw0LYfnLIDph6p995vwmcgbMi9b1I0Jz7opsmxf9xT2vHBOgkYTghAA7AALWzY6%2FDGDB7t6mpkCqP%2BzUYzcjb4MFNYS6qt732NndQY3nM4HACl9c9YSbwEWiDY4o6nbDRaTU1wzJxiq1HDL06KBDiYavw%3D%3D"
            class="card-img-top"
            alt="product-image"
          />
          <div class="card-body">
            <h6 class="card-title">大漂亮</h6>
            <div
              class="
                card-text
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <del>NT 1399 元</del>
              <strong class="text-danger">NT 999元</strong>
            </div>
            <RouterLink class="nav-link" to="/products"
              ><button class="btn btn-outline-primary w-100 mt-2 I-btn">
                前往商品
              </button></RouterLink
            >
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="swiper-slide">
        <div class="card mb-4 h-100">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676484277483.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LGt6CRZe00SsaAx%2FYJAsXqo65x7N4xg%2Bhdm%2BAcIijOsjycqYSQUJeT67JqZ%2FDSTXcaLUbXUCroaw%2BTvPYSMBgx5lH4aTHA%2BX6VSBawOkRomp68Z5oRpGJVtZmBrA9lszddaTVowQgzaHE7%2FhWOafDDOaqmR%2BmgFex0wnDaHSfAHZUXRk%2BaKjteig6pqipUw0LYfnLIDph6p995vwmcgbMi9b1I0Jz7opsmxf9xT2vHBOgkYTghAA7AALWzY6%2FDGDB7t6mpkCqP%2BzUYzcjb4MFNYS6qt732NndQY3nM4HACl9c9YSbwEWiDY4o6nbDRaTU1wzJxiq1HDL06KBDiYavw%3D%3D"
            class="card-img-top"
            alt="product-image"
          />
          <div class="card-body">
            <h6 class="card-title">大漂亮</h6>
            <div
              class="
                card-text
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <del>NT 1399 元</del>
              <strong class="text-danger">NT 999元</strong>
            </div>
            <RouterLink class="nav-link" to="/products"
              ><button class="btn btn-outline-primary w-100 mt-2 I-btn">
                前往商品
              </button></RouterLink
            >
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style>
h2 {
  font-size: 40px;
  font-weight: 600;
  color: #4e6752;
}
.swiper {
  width: 100%;
  height: 520px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
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
    Swiper,
    SwiperSlide,
  },
};
</script>