<script>
//Composition API
import { RouterView } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {};
  },
  components: {
    RouterView,
  },
  methods: {},
  mounted() {
    AOS.init();
  },
};
</script>

<template>
  <RouterView />
</template>
