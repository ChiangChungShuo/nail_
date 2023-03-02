<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">美甲款式</li>
      </ol>
    </nav>
    <div class="row mt-5">
      <div class="col-md-2">
        <div class="list-group" v-for="category in categorys" :key="category">
          <a
            class="list-group-item list-group-item-action"
            style="border: 0"
            :class="{ active: isActive === category }"
            @click.prevent="isActive = category"
            >{{ category }}</a
          >
        </div>
      </div>
      <div class="col-md-10">
        <div class="row g-4">
          <loading
            v-model:active="isLoading"
            :can-cancel="true"
            :color="color"
            :on-cancel="onCancel"
            :is-full-page="fullPage"
          />
          <div
            class="col-md-4 col-sm-6"
            v-for="product in productsFiltered"
            :key="product.id"
          >
            <div class="card">
              <router-link
                class="products-img"
                role="button"
                :to="`/product/${product.id}`"
              >
                <img
                  :src="product.imageUrl"
                  class="card-img-top object-cover"
                  style="height: 350px"
                />
                <span>詳細資訊</span>
              </router-link>
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">
                  {{ product.description }}
                  <br />
                  {{ product.content }}
                </p>
                <button
                  type="button"
                  class="btn btn-danger mt-auto fs-6 w-100"
                  @click="addToCart(product.id)"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <PaginationModal
            :pages="page"
            @change-page="getProducts"
          ></PaginationModal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Swal from "sweetalert2";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import PaginationModal from "../../components/PaginationModal.vue";
import cartStore from "../../stores/cart.js";
import { mapActions, mapState } from "pinia";
import all from "../../assets/all.scss";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      page: {},
      categorys: ["所有樣式", "單色", "跳色", "漸層", "暈染", "指定款"],
      isActive: "所有樣式",
    };
  },
  components: {
    RouterLink,
    PaginationModal,
    Loading,
  },

  methods: {
    getProducts(page = 1) {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
          this.page = res.data.pagination;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addToCart(product_id, qty = 1) {
      const data = {
        product_id,
        qty,
      };
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          alert(res.data.message);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "成功加入購物車",
            showConfirmButton: true,
            confirmButtonText: "確認",
          });
          // this.products = res.data.products;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    ...mapActions(cartStore, ["addToCart"]),
  },

  computed: {
    // 篩選商品分類
    productsFiltered() {
      if (this.isActive === "所有樣式") {
        return this.products;
      }
      return this.products.filter((item) => item.category === this.isActive);
    },
  },
  mounted() {
    this.getProducts();
    this.isLoading = true;
    setTimeout(() => {
      this.getProducts();
    }, 1000);
  },
};
</script>

<style>
.products-img {
  background-position: center 70%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
}
.products-img .span,
.products-img button,
.products-img span {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  width: calc(100% - 2rem);
  background: #f0f4f1;
  color: #414666;
  padding: 0.5rem;
  margin: 0.5rem 0;
  text-align: center;
  box-shadow: 0 2px 6px rgb(33 37 41 / 10%);
  text-transform: uppercase;
  font-size: 0.875rem;
  transition: all 0.3s ease-out;
  z-index: 2;
}
.products-img .span,
.products-img span {
  transform: translate(-50%, 10%);
  opacity: 0;
}
.products-img:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(33, 37, 41, 0.15);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.products-img:hover .span,
.products-img:hover span {
  opacity: 1;
  transform: translate(-50%);
}
.products-img:hover:after {
  opacity: 1;
}
.starred-icon {
  opacity: 0;
}

input.ui-checkbox {
  height: 0;
  width: 0;
}

.ui-checkbox:checked + .starred-icon {
  opacity: 1;
}

.starred-icon,
.unstarred-icon {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}

.material-icons {
  color: #3f5d45;
  user-select: none;
}
</style>
