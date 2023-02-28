<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
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
  </div>
  <div class="container" v-else>
    <div class="row mt-5">
      <div class="col-md-6">
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
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>圖片</th>
              <th style="width: 150px">品名</th>
              <th class="text-align">數量</th>
              <th class="text-end">單價</th>
              <th class="text-end">小計</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    :disabled="item.id === loadingItem"
                    @click="delCartItem(item)"
                  >
                    <i class="fas fa-spinner fa-pulse"></i>
                    x
                  </button>
                </td>
                <td>
                  <img
                    style="width: 50px; height: 50px"
                    :src="item.product.imageUrl"
                    alt=""
                    class="object-cover"
                  />
                </td>
                <td>{{ item.product.title }}</td>
                <td>
                  <div class="input-group input-group-sm">
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
                  </div>
                </td>
                <td class="text-end">NT${{ item.product.price }}</td>
                <td class="text-end">NT${{ item.total }}</td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" class="text-end">總計</td>
              <td class="text-end">NT${{ cart.total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="col-md-6 my-5">
        <div class="card rounded-0" style="border-color: #4e6752">
          <div class="card-header border-bottom-0 bg-white px-4 py-4">
            <h3>訂單詳情</h3>
          </div>
          <div class="card-body mt-3 px-4 py-0">
            <ul
              class="list-group list-group-flush"
              v-for="item in cart.carts"
              :key="item.id"
            >
              <li
                class="list-group-item px-0"
                style="border-bottom-color: #4e6752; border-bottom-width: 1px"
              >
                <div class="d-flex mt-2">
                  <img
                    :src="item.product.imageUrl"
                    class="me-2"
                    style="width: 60px; height: 60px; object-fit: cover"
                  />
                  <div class="w-100 d-flex flex-column">
                    <div class="d-flex justify-content-between fw-bold">
                      <h5>{{ item.product.title }}</h5>
                      <p class="mb-0">X{{ item.qty }}</p>
                    </div>
                    <div class="d-flex justify-content-between mt-auto">
                      <p class="text-muted mb-0">
                        <small>NT$ {{ item.product.price }}</small>
                      </p>
                      <p class="mb-0">NT${{ item.total }}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <li class="list-group-item px-0 pb-0">
              <table class="table text-muted">
                <tbody>
                  <tr>
                    <h3 style="color: #0a0a0a">總價</h3>
                    <td
                      class="text-end border-0 px-0"
                      style="font-size: 25px; color: #4e6752"
                    >
                      NT$ {{ cart.total }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </div>
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
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import Swal from "sweetalert2";
export default {
  data() {
    return {
      products: [],
      productId: "",
      //購物車
      cart: {},
      cartNum: 1,
      cartStatus: false,
      isLoading: false,
      //操作完成才能在操作下一個動作
      loadingItem: "", //存id
    };
  },

  methods: {
    //取得購物車資料
    getCarts() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          // console.log("購物車", res.data);
          this.cart = res.data.data;
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
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>
