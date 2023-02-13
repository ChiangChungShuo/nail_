<template>
  <div>我事後台頁面</div>
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