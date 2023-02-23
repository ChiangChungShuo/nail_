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
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            所有款式
          </a>
          <a href="#" class="list-group-item list-group-item-action">單色</a>
          <a href="#" class="list-group-item list-group-item-action">跳色</a>
          <a href="#" class="list-group-item list-group-item-action">漸層</a>
          <a href="#" class="list-group-item list-group-item-action">暈染</a>
          <a href="#" class="list-group-item list-group-item-action">指定款</a>
        </div>
      </div>
      <div class="col-md-10">
        <div class="row g-4">
          <div
            class="col-md-4 col-sm-6"
            v-for="product in products"
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
                  class="card-img-top"
                  style="width: 100%; height: 350px"
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
          <pagination-component
            :pages="pagination"
            @go-to-page="getProducts"
          ></pagination-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Swal from "sweetalert2";
import PaginationComponent from "../../components/Pagination.vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
    };
  },
  components: {
    RouterLink,
    PaginationComponent,
  },
  methods: {
    getProducts(page = 1) {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
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

<style>
.products-img {
  /* background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/annavue/1675490570956.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cWTHw4e5Kr6%2BquA825d0CNCjsWCeGHLPdtBF45Kjx0EAPhtJY%2BRc4sJtNNDwKN%2FuUDBvcuWSK9HMHzGkGN2aBgn%2FL3fk13pXEp%2FMw1024kLMgjuU2%2BSdFPNSzxsCQ1UpM%2F99JNEC5OLRlI3OxYdrfg2glxWiGgc9zaDaxbcGcEzin5zeZSC4ZlGmc236%2FPwAXlnP62Dc%2FKlBFgr1jsGT%2FZsTpVKqcd6dfytcNFqLSMI%2FToZvoZf%2Fz4NM7warq%2FFIZivDDumNUuwqtihImK3U0a%2FbpRv75Y3%2BYISCzHinKSuORWOdAQ16zv9uzghjqQmLmnjesj8rECKr35XUiCFSyg%3D%3D'); */
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
</style>
