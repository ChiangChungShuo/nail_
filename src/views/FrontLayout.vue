<template>
  這是前台頁面
  <RouterLink to="/">首頁</RouterLink> ｜
  <RouterLink to="/about">關於我</RouterLink> ｜
  <RouterLink to="/products">商品列表</RouterLink>｜
  <RouterLink to="/cart">購物車</RouterLink> ｜
  <hr />
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView,
  },
};
</script>