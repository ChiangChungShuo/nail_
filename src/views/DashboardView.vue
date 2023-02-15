<template>
  這是"後台"頁面
  <RouterLink to="/admin/products">後台產品列表</RouterLink> ｜
  <RouterLink to="/admin/orders">後台訂單管理</RouterLink> ｜
  <RouterLink to="/">返回前台</RouterLink> ｜
  <a href="#" @click.prevent="logout">登出</a>
  <hr />
  <RouterView v-if="checkSuccess"></RouterView>
</template>

<script>
import { RouterView } from 'vue-router';
const { VITE_APP_URL } = import.meta.env;

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  components: {
    RouterView,
  },
  methods: {
    logout() {
      document.cookie = `azraelkToken=; expires=;`;
      alert('登出成功');
      this.$router.push('/login');
    },
    checkLogin() {
      this.$http
        .post(`${VITE_APP_URL}/api/user/check`)
        .then(() => {
          // 驗證成功
          this.checkSuccess = true;
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.$router.push('/login');
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)azraelkToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    this.$http.defaults.headers.common.Authorization = token;
    // 每次發出request時都帶入token驗證身份
    if (token) {
      this.checkLogin();
    } else {
      alert('您尚未登入');
      this.$router.push('/login');
    }
  },
};
</script>