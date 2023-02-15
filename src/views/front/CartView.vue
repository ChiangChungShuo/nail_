<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="text-center" v-if="!cartStatus">
    <p>購物車內還沒有商品，快去選購吧！</p>
  </div>
  <template v-else>
    <div class="text-end">
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
          <th>品名</th>
          <th>圖片</th>
          <th style="width: 150px">數量/單位</th>
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
            <td>{{ item.product.title }}</td>
            <td><img :src="item.product.imageUrl" width="50" alt="" /></td>
            <td>
              <div class="input-group input-group-sm">
                <select
                  name=""
                  id=""
                  class="form-select"
                  v-model="item.qty"
                  :disabled="item.id === loadingItem"
                  @change="updatedCartItem(item)"
                >
                  <option :value="i" v-for="i in 20" :key="`i+'12345'`">
                    {{ i }}
                  </option>
                </select>
              </div>
            </td>
            <td class="text-end">
              {{ item.product.price }}
            </td>
            <td class="text-end">{{ item.total }}</td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總計</td>
          <td class="text-end">{{ cart.total }}</td>
        </tr>
      </tfoot>
    </table>
  </template>
</template>



<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      productId: '',
      //購物車
      cart: {},
      cartStatus: false,
      isLoading: false,
      //操作完成才能在操作下一個動作
      loadingItem: '', //存id
      user: {
        email: '',
        name: '',
        tel: '',
        address: '',
      },
      message: '',
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
            position: 'center',
            icon: 'success',
            title: '產品數量已更新',
            showConfirmButton: false,
            timer: 1500,
          });
          this.loadingItem = '';
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
            position: 'center',
            icon: 'success',
            title: '成功刪除',
            showConfirmButton: true,
            confirmButtonText: '確認',
          });
          this.loadingItem = '';
        })
        .catch((err) => {
          console.error(err);
        });
    },
    deleteAll() {
      Swal.fire({
        title: '確定要清空購物車?',
        showDenyButton: true,
        confirmButtonText: '確認清空',
        denyButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
            .then(() => {
              this.getCarts();
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: '購物車已全部刪除',
                showConfirmButton: true,
                confirmButtonText: '確認',
              });
            })
            .catch((err) => alert(err.response.data.message));
        } else if (result.isDenied) {
          Swal.fire('留著好了', '', 'info');
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
        alert('購物車內還沒有商品唷～');
        return;
      }
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order`, { data })
        .then((res) => {
          alert(res.data.message);
          this.$refs.form.resetForm();
          this.getCarts();
          this.message = '';
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
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