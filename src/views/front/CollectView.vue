<template>
  <div
    v-if="!collects.length"
    class="container my-3 min-body-heigh d-flex flex-column align-items-center justify-content-center"
  >
    <div class="mb-5 text-center">
      <h3>您還沒有收藏，去逛逛吧</h3>
      <i class="bi bi-heart" style="font-size: 3rem"></i>
    </div>
    <div>
      <router-link class="btn btn-primary d-inline-block" to="/products"
        >馬上去選購</router-link
      >
    </div>
  </div>
  <div v-else class="container my-3 min-body-heigh">
    <h1
      style="text-align: center; font-size: 50px; color: #4e6752"
      class="my-5"
    >
      美美收藏❤️
    </h1>
    <div class="row">
      <div
        class="col-lg-4 col-md-6 mb-3"
        v-for="collect in collects"
        :key="collect.id"
      >
        <router-link :to="`/product/${collect.id}`">
          <div class="card product-card">
            <div class="card-head">
              <img
                class="card-img-top bg-cover"
                :src="collect.imageUrl"
                height="300"
                alt="產品"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ collect.title }}</h5>
              <p class="card-text">
                NT$ {{ collect.price }} / {{ collect.unit }}
              </p>
              <div class="d-flex justify-content-between">
                <button
                  type="button"
                  class="btn btn-outline-primary w-100"
                  @click.prevent="() => removeCollect(collect)"
                >
                  <i class="bi bi-heart"></i>
                  取消收藏
                </button>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { collectStore } from "../../stores/collect";
export default {
  methods: {
    ...mapActions(collectStore, ["getCollects", "removeCollect"]),
  },
  computed: {
    ...mapState(collectStore, ["collects"]),
  },
  mounted() {
    this.getCollects();
  },
};
</script>
