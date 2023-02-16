<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div>
    <h2>{{ product.title }}</h2>
    <img :src="product.imageUrl" width="500" alt="" />
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
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