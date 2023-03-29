<template>
  <section
    style="
      background-image: url('https://i.imgur.com/PJJt1e0.jpg');
      height: 100vh;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    "
    class="d-flex align-items-center landing-img bg-attachment-fixed"
  >
    <div class="container-lg">
      <div class="row">
        <div class="col-md-3">
          <div
            class="d-flex align-items-center justify-content-center position-relative"
          >
            <h1
              style="border-right: 1px solid #ffffff66; z-index: 1"
              class="mb-0 me-6 py-3 pe-3 text-white fw-bold drop-shadow"
            >
              美<br />甲<br />
            </h1>
            <div style="z-index: 1" class="d-flex me-7">
              <h3 style="color: #dee6e4" class="mb-0 me-3 drop-shadow">
                讓<br />你<br />的<br />指<br />尖<br />更<br />有<br />品<br />味
              </h3>
            </div>
            <h5 style="z-index: 1" class="m-0">
              <router-link to="/products" class="btn btn-primary" href="#"
                >探<br />索<br />美<br />麗</router-link
              >
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container my-5">
    <div class="d-flex my-3">
      <img src="https://i.imgur.com/Qd9SoEJ.jpg" alt="" />
      <h2 class="d-flex" style="align-items: center">最新消息</h2>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 mb-3">
        <div class="card">
          <img
            style="height: 300px"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676584071318.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lpf3C1%2F2mtC8DlCQwSUTyiI5J5s5tH8kL1t5xkh6jzQIoq5nuVnghoLYfxdtvEk3CuRsbb6iMxlbE5fUOf3BeOgWmFFl6j%2Fd8PMT1ieomE%2FXCgmGb1yQp%2FjBrJYQF25iHMWM%2FoJmqbmGPFzdALk5hUxUH4e5d5tDZs2Ezgf1DJHupv9HkrSx6GUaHZWR8cZHBHIYiQqlA%2FWTyahby2EGbAE74q1%2B53vSpo7WlIaD2Mv5xmHfVYogLq7QJ9NJmE1HMM7DDT3fRe9TNaWwWwSj%2BUWQKLGB16qPx7sa6IqNDNo0adRUqxP7MNhPPIZDwJI141mEDEz07Y7toOg%2FgZy4hQ%3D%3D"
            class="card-img-top object-cover"
            alt="img"
          />
          <div class="card-body">
            <h5 class="card-title">聖誕優惠</h5>
            <del>指定款NT$1399</del>
            <p class="card-text">聖誕優惠價NT$999</p>
            <router-link class="btn btn-primary" to="/news"
              >活動詳情</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-3">
        <div class="card">
          <img
            src="https://i.imgur.com/pAIIwfL.jpg"
            class="card-img-top object-cover"
            style="height: 300px"
            alt="img"
          />
          <div class="card-body">
            <h5 class="card-title">IG打卡優惠</h5>
            <span>分享優惠</span>
            <p class="card-text">分享限時動態享有8折優惠</p>
            <router-link class="btn btn-primary" to="/news"
              >活動詳情</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-3">
        <div class="card">
          <img
            style="height: 300px"
            src="https://i.imgur.com/CULcimM.jpg"
            class="card-img-top object-cover"
            alt="img"
          />
          <div class="card-body">
            <h5 class="card-title">生日優惠</h5>
            <span>當月壽星優惠</span>
            <p class="card-text">當月壽星8折優惠</p>
            <router-link class="btn btn-primary" to="/news"
              >活動詳情</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="about bg-warning d-flex justify-content-center p-5 mb-5"
    data-aos="fade-down"
  >
    <div class="card mb-3" style="max-width: 1200px">
      <div class="row g-4">
        <div class="col-md-4">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676585388198.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TosivJb3LmGFvvIHDlGbsqFEj5b130YpcOF1AAQZzvdN0q7%2Bx9ivlHIpdbZx%2BMuybBisuH26wfGdf%2BeaN5NjPTW2yky8LxtQ3qkt7wLZxTfFzuTEMCXq6g6mLAbBbFVvu%2FGgVUKK2%2FKvfFzXLbiJx%2FR1H7Z7XwJ76L7a4rHRQKBJM3ZGhLicm8R72B%2Fmwv7nyWo4pHAWNR%2F0NwMFNQNsPjDJ46u0EjnI96XiuNqEItA2hpCHIhjVk5%2BQO72bXfwVvTE72QhoQeDiNAYDltyLlHg8UiN676WDVPEQFfhvvqjLMnjoBZO0PTAl9UtEBg9z4B7yafbcturcIAAHwPJAuA%3D%3D"
            class="img-fluid rounded-start"
            alt="img"
            style="height: 440px"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <img src="https://i.imgur.com/Qd9SoEJ.jpg" alt="" />
            <h2
              class="card-title"
              style="color: #4e6752; font-weight: 600; font-size: 40px"
            >
              關於 Ｍorizanko - 冉冉森林
            </h2>
            <p
              class="card-text"
              style="font-weight: 400; font-size: 20px; line-height: 40px"
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
  <div class="container">
    <div class="row my-5">
      <div class="d-flex my-3">
        <img src="https://i.imgur.com/Qd9SoEJ.jpg" alt="" />
        <h2 class="d-flex" style="align-items: center">熱門款式</h2>
      </div>
      <div class="col-md-12 col-sm-8">
        <swiper
          :spaceBetween="20"
          :slides-per-view="3"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: true,
          }"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="card">
              <img
                src="https://i.imgur.com/iMT8o3V.jpg"
                class="card-img-top object-cover"
                style="width: auto; height: 300px"
                alt="product-image"
              />
              <div class="card-body">
                <h6 class="card-title">大漂亮</h6>
                <div
                  class="card-text d-flex justify-content-between align-items-center"
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
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img
                src="https://i.imgur.com/d4QUoW6.jpg"
                class="card-img-top object-cover"
                alt="product-image"
                style="width: auto; height: 300px"
              />
              <div class="card-body">
                <h6 class="card-title">小花花</h6>
                <div
                  class="card-text d-flex justify-content-between align-items-center"
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
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img
                src="https://i.imgur.com/BXzgojk.jpg"
                style="width: auto; height: 300px"
                class="card-img-top object-cover"
                alt="product-image"
              />
              <div class="card-body">
                <h6 class="card-title">大漂亮</h6>
                <div
                  class="card-text d-flex justify-content-between align-items-center"
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
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img
                src="https://i.imgur.com/bo1RQ4f.jpg"
                class="card-img-top object-cover"
                style="width: auto; height: 300px"
                alt="product-image"
              />
              <div class="card-body">
                <h6 class="card-title">大漂亮</h6>
                <div
                  class="card-text d-flex justify-content-between align-items-center"
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
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img
                src="https://i.imgur.com/Fre24RA.jpg"
                class="card-img-top object-cover"
                alt="product-image"
                style="width: auto; height: 300px"
              />
              <div class="card-body">
                <h6 class="card-title">小漂亮</h6>
                <div
                  class="card-text d-flex justify-content-between align-items-center"
                >
                  <del>NT 1199 元</del>
                  <strong class="text-danger">NT 799元</strong>
                </div>
                <RouterLink class="nav-link" to="/products"
                  ><button class="btn btn-outline-primary w-100 mt-2 I-btn">
                    前往商品
                  </button></RouterLink
                >
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img
                src="https://i.imgur.com/jbebBTZ.jpg"
                class="card-img-top object-cover"
                alt="product-image"
                style="width: auto; height: 300px"
              />
              <div class="card-body">
                <h6 class="card-title">小可愛</h6>
                <div
                  class="card-text d-flex justify-content-between align-items-center"
                >
                  <del>NT 1299 元</del>
                  <strong class="text-danger">NT 899元</strong>
                </div>
                <RouterLink class="nav-link" to="/products"
                  ><button class="btn btn-outline-primary w-100 mt-2 I-btn">
                    前往商品
                  </button></RouterLink
                >
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <div
    class="about bg-warning d-flex justify-content-center p-5 mb-5"
    data-aos="fade-down"
  >
    <div class="card mb-3">
      <div class="row g-4">
        <div class="col-md-8">
          <div class="card-body">
            <div class="d-sm-flex">
              <img src="https://i.imgur.com/Qd9SoEJ.jpg" alt="" />
              <h5
                class="card-title"
                style="
                  color: #4e6752;
                  font-weight: 600;
                  font-size: 40px;
                  align-items: center;
                "
              >
                Morizanko<span class="d-flex">預約須知</span>
              </h5>
            </div>
            <p
              class="card-text"
              style="font-weight: 400; font-size: 20px; line-height: 45px"
            >
              ⚠️ 施作過程中可能會有小狀況發生及剪甘皮的受傷風險，會小心及避免。
              <br />
              🕰 施作時間約需保留2-3小時，須耐久坐。（如需卸甲，則時間另計）
              <br />
              🌱首次預約時會請您先傳一下手部照片「指甲長度須超過指甲肉」
              <br />
              「如有崁甲、灰指甲、咬甲」先去把指甲的健康照顧好，再預約變美美喔
              <br />
              🤎如有事須更改時間或取消預約，請於「預約日期三天前」通知。
              <br />
            </p>
            <div class="d-flex justify-content-between">
              <p style="font-weight: 400; font-size: 25px">
                🧡預約詢問請私訊官方Line
              </p>
              <RouterLink class="nav-link" to="/reserve">
                <button class="btn btn-primary text-nowrap">
                  查看更多
                </button></RouterLink
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676603236410.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Jq3QRBK0tEeUQ%2F7yPLrhMR6us7y%2FWqeUBA%2BSNPamkxtHLh2s200j10w2KVi0EFGtyYQYSsILe%2FeMVQ16D4qQ4MLdI2QT7D2o4fMAV39IbHgJG5YAOHpS0b8%2BgncqRqYHjBZ9jAWty5gIbraG4B1cWydKUDz%2FgUJMNT1CCxxvf5JTw%2FS6aX%2BI1Jqa3BAQ4iSdoRjHnKCA7kMwThQFR%2Fjq%2BIXAoRWyhMShlljq7kW7Xh%2FTyASxzWGsIRtJUpmx93M5fXfijeemrROcVQNHf9jTrM4KN5sRZbQSoaJsXxtZw2nRyVZjnTq%2B7SECJwG3x2%2Bcipp%2BJfoqirB7Jy7nbmgFcw%3D%3D"
            class="img-fluid rounded-start"
            alt="img"
            style="height: 440px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
// Import Swiper styles
import all from "../../assets/all.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  data() {
    return {
      modules: [Navigation, Pagination],
      isLoading: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Loading,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  mounted() {},
};
</script>
<style>
h2 {
  font-size: 40px;
  font-weight: 600;
  color: #4e6752;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 767px) {
  .landing-img {
    background-image: url("https://i.imgur.com/PJJt1e0.jpg");
    height: auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}
</style>
