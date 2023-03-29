import { defineStore } from "pinia";
export const collectStore = defineStore("collect", {
  state: () => {
    return {
      collects: [],
    };
  },
  actions: {
    getCollects() {
      this.collects = JSON.parse(localStorage.getItem("product")) || [];
    },
    addToCollect(product) {
      const sameItem = this.collects.find((item) => item.id === product.id);
      if (!sameItem) {
        this.collects.push(product);
        localStorage.setItem("product", JSON.stringify(this.collects));
      } else {
        console.log("已經加入囉");
      }
      this.getCollects();
    },
    removeCollect(product) {
      const index = this.collects.findIndex((item) => item.id === product.id);
      this.collects.splice(index, 1);
      localStorage.setItem("product", JSON.stringify(this.collects));
      console.log(this.collects);
    },
  },
});
