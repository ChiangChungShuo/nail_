<script>
//Composition API
import { RouterView } from 'vue-router';
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    RouterView,
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>

<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <RouterView />
</template>