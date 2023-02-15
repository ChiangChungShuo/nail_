<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div>
    產品頁面
    <table class="table">
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.title }}</td>
          <td><img :src="product.imageUrl" width="300" alt="" /></td>
          <td>
            <Router-link class="btn btn-primary" :to="`/product/${product.id}`"
              >產品細節</Router-link
            >
            <button
              type="button"
              class="btn btn-danger"
              @click="addToCart(product.id)"
            >
              加入購物車
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Swal from 'sweetalert2';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  components: {
    RouterLink,
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addToCart(id) {
      const data = {
        product_id: id,
        qty: 1,
      };
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res);
          // alert(res.data.message);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '成功加入購物車',
            showConfirmButton: true,
            confirmButtonText: '確認',
          });
          // this.products = res.data.products;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getProducts();
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>