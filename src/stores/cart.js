import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
const cartStore = defineStore("cart", {
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0,
    };
  },
  actions: {
    //取的購物車列表
    getCart() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.total = res.data.data.total;
          this.final_total = res.data.data.final_total;
          // console.log("購物車", res.data);
          // this.cart = res.data.data;
          // if (this.cart.carts.length === 0) {
          //   this.cartStatus = false;
          // } else {
          //   this.cartStatus = true;
          // }
          // console.log(this.carts);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addToCart(product_id, qty = 1) {
      const data = {
        data: {
          product_id,
          qty,
        },
      };
      axios
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, data)
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "成功加入購物車",
            showConfirmButton: true,
            confirmButtonText: "確認",
          });
          this.getCart();
          // this.products = res.data.products;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  //購物車數量更改
  updatedCartItem(item) {
    //要帶入兩個 ID 購物車的ID 產品ID
    const data = {
      product_id: item.product.id, //產品ID
      qty: item.qty,
    };
    this.loadingItem = item.id;
    axios
      .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data }) //購物車ID
      .then((res) => {
        // console.log("更新購物車", res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "產品數量已更新",
          showConfirmButton: false,
          timer: 1500,
        });
        this.loadingItem = "";
        this.getCarts();
      })
      .catch((err) => {
        console.error(err);
      });
  },
  //刪除購物車資料
  delCartItem(item) {
    this.loadingItem = item.id;
    axios
      .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`) //購物車ID
      .then((res) => {
        // console.log("刪除購物車", res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "成功刪除",
          showConfirmButton: true,
          confirmButtonText: "確認",
        });
        this.loadingItem = "";
        this.getCart();
      })
      .catch((err) => {
        console.error(err);
      });
  },
  deleteAll() {
    Swal.fire({
      title: "確定要清空購物車?",
      showDenyButton: true,
      confirmButtonText: "確認清空",
      denyButtonText: "取消",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "購物車已全部刪除",
              showConfirmButton: true,
              confirmButtonText: "確認",
            });
            this.getCart();
          })
          .catch((err) => alert(err.response.data.message));
      } else if (result.isDenied) {
        Swal.fire("留著好了", "", "info");
      }
    });
  },
  changeLoading(modalLoading) {
    this.loadingItem = modalLoading;
  },
});

export default cartStore;
