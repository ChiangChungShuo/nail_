<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :color="color"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  >
    <template #default>
      <img src="../../assets/loading.gif" alt="Loading..." />
    </template>
  </loading>
  <div class="container">
    <div class="row">
      <ol class="list my-5">
        <li class="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            fill="currentColor"
            class="bi bi-1-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"
            />
          </svg>
          購物清單
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            fill="currentColor"
            class="bi bi-2-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"
            />
          </svg>
          填寫資訊
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            fill="currentColor"
            class="bi bi-3-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"
            />
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"
            />
          </svg>
          完成訂單
        </li>
      </ol>
    </div>
  </div>
  <div class="text-center" v-if="!cartStatus">
    <p style="font-size: 30px" class="my-5">購物車內還沒有商品，快去選購吧！</p>
    <router-link class="btn btn-primary" to="/products">美甲款式</router-link>
  </div>
  <div class="container" v-else>
    <div class="row mt-5">
      <div class="col12">
        <div class="text-end my-3">
          <button
            class="btn btn-outline-danger"
            type="button"
            :disabled="!cartStatus"
            @click="deleteAll()"
          >
            清空購物車
          </button>
        </div>
        <ul v-if="cart.carts">
          <template v-for="item in cart.carts" :key="item.id">
            <li
              class="product-item row align-items-center gx-4 border-bottom mb-6 pb-6"
            >
              <div class="col overflow-hidden">
                <img
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                  class="object-cover w-100"
                  style="max-height: 150px"
                />
              </div>
              <div class="col-8">
                <h4 class="fs-7 fs-md-5 mb-2">{{ item.product.title }}</h4>
                <p class="fs-8 fs-md-7 mb-1 text-truncate-2 text-neutral-700">
                  {{ item.product.description }}
                </p>
                <div>
                  <p
                    v-if="item.product.origin_price === item.product.price"
                    class="text-primary fs-md-6"
                  ></p>
                  <div v-else class="d-flex justify-content-between">
                    <div>
                      <p class="text-primary fs-md-6 my-3">
                        <span class="fs-9 fs-md-8">單價NT$ </span
                        >{{ item.product.price }}
                      </p>
                    </div>
                    <div>
                      <p class="text-primary fs-md-6 my-3">
                        <span class="fs-9 fs-md-8">總價NT$ </span
                        >{{ item.total }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col d-flex justify-content-end align-items-center">
                <div
                  class="input-group input-group-sm d-flex justify-content-end"
                >
                  <select
                    name=""
                    id=""
                    class="text-center"
                    style="width: 48px"
                    v-model="item.qty"
                    :disabled="item.id === loadingItem"
                    @change="updatedCartItem(item)"
                  >
                    <option :value="i" v-for="i in 20" :key="`${i}+'12345'`">
                      {{ i }}
                    </option>
                  </select>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    :disabled="item.id === loadingItem"
                    @click="delCartItem(item)"
                  >
                    <i class="fas fa-spinner fa-pulse"></i> 刪除
                  </button>
                </div>
              </div>
            </li>
          </template>
        </ul>
        <div v-if="cart.total === cart.final_total" class="text-end">
          <p class="fs-6 fw-bold">
            總計:
            <span>NT$ {{ cart.total }}</span>
          </p>
        </div>
      </div>
      <div class="text-end">
        <router-link class="btn btn-outline-primary" to="/subscriber"
          >下一步</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import progress from "../../assets/progress.css";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import Swal from "sweetalert2";
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      products: [],
      productId: "",
      //購物車
      cart: {},
      cartStatus: false,
      //操作完成才能在操作下一個動作
      loadingItem: "", //存id
    };
  },
  components: {
    Loading,
  },
  methods: {
    //取得購物車資料
    getCarts() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          // console.log("購物車", res.data);
          this.cart = res.data.data;
          this.isLoading = false;
          if (this.cart.carts.length === 0) {
            this.cartStatus = false;
          } else {
            this.cartStatus = true;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    //購物車數量更改
    updatedCartItem(item) {
      //要帶入兩個 ID 購物車的ID 產品ID
      const data = {
        product_id: item.product.id, //產品ID
        qty: item.qty,
      };
      this.loadingItem = item.id;
      this.$http
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data }) //購物車ID
        .then((res) => {
          // console.log("更新購物車", res.data);
          this.getCarts();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "產品數量已更新",
            showConfirmButton: false,
            timer: 1500,
          });
          this.loadingItem = "";
        })
        .catch((err) => {
          console.error(err);
        });
    },
    //刪除購物車資料
    delCartItem(item) {
      this.loadingItem = item.id;
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`) //購物車ID
        .then((res) => {
          // console.log("刪除購物車", res.data);
          this.getCarts();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "成功刪除",
            confirmButtonColor: "#3085d6",
            showConfirmButton: true,
            confirmButtonText: "確認",
          });
          this.loadingItem = "";
        })
        .catch((err) => {
          console.error(err);
        });
    },
    deleteAll() {
      Swal.fire({
        title: "確定要清空購物車?",
        showDenyButton: true,
        confirmButtonText: "確認清空",
        denyButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http
            .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
            .then(() => {
              this.getCarts();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "購物車已全部刪除",
                showConfirmButton: true,
                confirmButtonText: "確認",
              });
            })
            .catch((err) => alert(err.response.data.message));
        } else if (result.isDenied) {
          Swal.fire("留著好了", "", "info");
        }
      });
    },
    changeLoading(modalLoading) {
      this.loadingItem = modalLoading;
    },
  },
  mounted() {
    this.getCarts();
    this.isLoading = true;
  },
};
</script>
