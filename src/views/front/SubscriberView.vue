<template>
  <div class="container">
    <div class="row my-5 justify-content-center">
      <ol class="list">
        <li>
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
        <li class="active">
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
      <v-form
        ref="form"
        class="col-md-6 mt-5"
        v-slot="{ errors }"
        @submit="onSubmit"
      >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <v-field
            id="email"
            name="email"
            type="email"
            class="form-control"
            placeholder="請輸入 Email"
            rules="required|email"
            :class="{ 'is-invalid': errors.email }"
            v-model="user.email"
          ></v-field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">姓名</label>
          <v-field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            placeholder="請輸入姓名"
            rules="required"
            :class="{ 'is-invalid': errors.姓名 }"
            v-model="user.name"
          ></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">電話</label>
          <!-- 使用 v-bind 綁定 :rules="isPhone" 綁定methods isPhone方法 -->
          <v-field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            placeholder="請輸入電話"
            :rules="isPhone"
            :class="{ 'is-invalid': errors.電話 }"
            v-model="user.tel"
          ></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">地址</label>
          <v-field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            placeholder="請輸入地址"
            rules="required"
            :class="{ 'is-invalid': errors['地址'] }"
            v-model="user.address"
          ></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="user.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import progress from "../../assets/progress.css";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import Swal from "sweetalert2";
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      productId: "",
      //購物車
      cart: {},
      cartStatus: false,
      isLoading: false,
      //操作完成才能在操作下一個動作
      loadingItem: "", //存id
      user: {
        email: "",
        name: "",
        tel: "",
        address: "",
      },
      message: "",
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
          axios
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
    //送出訂單
    onSubmit() {
      const data = {
        user: this.user,
        message: this.message,
      };
      if (this.cart.carts.length === 0) {
        alert("購物車內還沒有商品唷～");
        return;
      }
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order`, { data })
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "成功送出訂單",
            showConfirmButton: true,
            confirmButtonText: "確認",
          });
          this.$refs.form.resetForm();
          this.getCarts();
          this.message = "";
          this.$router.push("/finish");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
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
