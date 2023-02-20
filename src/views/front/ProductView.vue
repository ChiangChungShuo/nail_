<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="container my-5">
    <div class="row">
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
        <div class="row">
          <h1 class="d-flex justify-content-center mb-5">
            {{ product.title }}
          </h1>
          <div class="col-md-4 col-sm-6">
            <img
              :src="product.imageUrl"
              style="width: 100%; height: 450px"
              class="img-fluid"
            />
            <div class="row mt-3">
              <div
                class="col"
                v-for="(image, index) in product.imagesUrl"
                :key="index"
              >
                <img :src="image" style="width: 100%; height: 200px" alt="" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <p class="">商品描述 : {{ product.description }}</p>
            <p class="">商品內容 : {{ product.content }}</p>
            <div class="h5" v-if="product.price === product.origin_price">
              {{ product.price }} 元
            </div>
            <div class="" v-else>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
              <h2
                class="card-title"
                style="color: #4e6752; font-weight: 600; font-size: 25px"
              >
                Morizanko 預約須知
              </h2>
              <p
                class="card-text"
                style="font-weight: 400; font-size: 16px; line-height: 40px"
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
            <div class="input-group">
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
        <router-link class="btn btn-outline-secondary my-3" :to="`/products`">
          返回產品列表
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      product: {},
    };
  },
  methods: {
    gteProduct() {
      //取得ID
      console.log('$route', this.$route); //屬性
      const { id } = this.$route.params;
      console.log(id);

      console.log('router', this.$router); //方法
      // this.$router.push('/');
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
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
    this.gteProduct();
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>