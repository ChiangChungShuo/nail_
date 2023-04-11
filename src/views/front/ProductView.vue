<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <h1 class="d-flex justify-content-center my-4" style="color: #4e6752">
            {{ product.title }}
          </h1>
          <div class="col-md-4 col-sm-6">
            <img
              :src="product.imageUrl"
              style="width: 100%; height: 450px"
              class="img-fluid object-cover"
            />
            <div class="row mt-3">
              <div
                class="col"
                v-for="(image, index) in product.imagesUrl"
                :key="index"
              >
                <img
                  :src="image"
                  class="object-cover"
                  style="width: 100%; height: 200px"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6" style="font-size: 25px">
            <p class="">商品描述 : {{ product.description }}</p>
            <p class="">商品內容 : {{ product.content }}</p>
            <div v-if="product.price === product.origin_price">
              {{ product.price }} 元
            </div>
            <div style="font-size: 16px" v-else>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5" style="color: #4e6752">
                現在只要{{ product.price }} 元
              </div>
            </div>
            <div></div>
            <div>
              <h2
                class="card-title mt-4"
                style="font-weight: 600; font-size: 22px"
              >
                Morizanko 預約須知
              </h2>
              <p
                class="card-text"
                style="font-weight: 500; font-size: 15px; line-height: 35px"
              >
                ⚠️
                施作過程中可能會有小狀況發生及剪甘皮的受傷風險，會小心及避免。
                <br />
                🕰 施作時間約需保留2-3小時，須耐久坐。（如需卸甲，則時間另計）
                <br />
                🌱首次預約時會請您先傳一下手部照片「指甲長度須超過指甲肉」
                <br />
                「如有崁甲、灰指甲、咬甲」先去把指甲的健康照顧好，再預約變美美喔
                <br />
                🤎如有事須更改時間或取消預約，請於「預約日期三天前」通知。
                <br />
                🧡預約詢問請私訊官方Line @285fyfqx
              </p>
            </div>
            <div class="input-group mt-3 input-group-custom">
              <input
                type="number"
                class="form-control"
                min="1"
                value="1"
                ref="qty"
              />
              <button
                type="button"
                class="btn btn-danger"
                @click="addToCart(product.id)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <router-link
          class="btn btn-sm btn-outline-secondary my-3"
          :to="`/products`"
        >
          返回產品列表
        </router-link>
      </div>
      <div class="row">
        <h3 style="text-align: center" class="my-4">相關產品</h3>
        <div class="col-md-12">
          <swiper
            :spaceBetween="15"
            :slides-per-view="2"
            :centeredSlides="false"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              v-for="(product, index) in similarProducts"
              :key="index"
            >
              <div class="card">
                <img
                  :src="product.imageUrl"
                  class="card-img-top object-cover"
                  style="width: auto; height: 250px"
                  alt="product-image"
                />
                <div class="card-body">
                  <h6 class="card-title">{{ product.title }}</h6>
                  <div
                    class="card-text d-flex justify-content-between align-items-center"
                  >
                    <del>NT${{ product.origin_price }}</del>
                    <strong class="text-danger">NT${{ product.price }}</strong>
                  </div>
                  <button
                    class="btn btn-outline-primary w-100 mt-2 I-btn"
                    @click="$router.push(`/product/${product.id}`)"
                  >
                    前往商品
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Swal from "sweetalert2";
import cartStore from "../../stores/cart.js";
import { mapActions, mapState } from "pinia";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  data() {
    return {
      modules: [Navigation, Pagination],
      isLoading: false,
      product: {},
      similarProducts: [],
    };
  },
  methods: {
    gteProduct() {
      //取得ID
      // console.log("$route", this.$route); //屬性
      const { id } = this.$route.params;
      // console.log("router", this.$router); //方法
      // this.$router.push('/');
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          // console.log(res);
          this.product = res.data.product;
          this.getCategoryProducts();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addToCart(product_id, qty = 1) {
      const data = {
        data: {
          product_id,
          qty,
        },
      };
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          // console.log(res);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "成功加入購物車",
            confirmButtonColor: "#3085d6",
            showConfirmButton: true,
            confirmButtonText: "確認",
          });
          // this.products = res.data.products;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getCategoryProducts() {
      const { category } = this.product;
      this.$http
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=${category}`
        )
        .then((res) => {
          this.similarProducts = res.data.products;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    ...mapActions(cartStore, ["addToCart"]),
  },
  mounted() {
    this.gteProduct();
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    this.$watch(
      () => this.product,
      () => {
        this.getCategoryProducts();
      }
    );
  },
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style>
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
</style>
