<template>
  <div class="container-fluid">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>訂單編號</th>
          <th class="text-center">購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ new Date(order.create_at * 1000).toLocaleDateString() }}</td>
          <td>{{ order.id }}</td>
          <td class="text-center pe-4">
            <ul class="list-unstyled">
              <li v-for="item in order.products" :key="item.id">
                {{ item.product.title }} ： {{ item.qty }}
                {{ item.product.unit }}
              </li>
            </ul>
          </td>
          <td>$ {{ order.total }}</td>
          <td>
            <span v-if="order.is_paid" class="text-success">已付款</span>
            <span v-else class="text-danger">未付款</span>
          </td>
          <td class="text-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-custom_dark-green"
                @click="openModal('edit', order)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-custom_red ms-md-2"
                @click="openModal('delete', order)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 優惠券分頁 -->
    <Pagination :pages="page" @change-page="getData"></Pagination>
    <!-- 新增、編輯 Modal -->
    <div
      id="ordersModal"
      ref="ordersModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="ordersModalLabel"
      aria-hidden="true"
    >
      <!-- 新建、編輯優惠券 Modal 元件  -->
      <OrderModal
        :temp-orders="tempOrders"
        @update-orders="updateOrders"
      ></OrderModal>
    </div>
    <!-- 刪除 Modal -->
    <div
      id="delOrderModal"
      ref="delOrderModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="delOrderModalLabel"
      aria-hidden="true"
    >
      <!-- 刪除優惠券 Modal 元件 -->
      <DelorderModal
        :temp-orders="tempOrders"
        @del-orders="delOrders"
      ></DelorderModal>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
import Pagination from "@/components/PaginationModal.vue";
// 引入 新增、編輯商品 Modal 元件
import OrderModal from "@/components/OrderModal.vue";
// 引入 刪除商品 Modal 元件
import DelorderModal from "@/components/DelorderModal.vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  name: "OrdersView",
  props: ["token"],
  data() {
    return {
      // 裝 API 傳來的資料
      orders: [],
      // 裝 modal 視窗的資料
      tempOrders: {},
      // 商品分頁
      page: {},
      // loading 圖示判斷
      states: {
        isLoading: false,
        fullPage: false,
      },
      isLoading: false,
      fullPage: false,
      isNew: false,
    };
  },
  components: {
    // 分頁元件
    Pagination,
    OrderModal,
    DelorderModal,
  },
  methods: {
    // 使用管理者的 API -> 取得商品列表
    // 參數放分頁 -> page = 1 可先預設第一分頁，如果參數只有 page，會得到 undefined
    getData(page = 1) {
      this.states = { isLoading: true, fullPage: true };
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=${page}`;
      this.$http
        .get(url)
        .then((response) => {
          this.states = { isLoading: false, fullPage: false };
          this.orders = response.data.orders;
          this.page = response.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.states = { isLoading: false, fullPage: false };
        });
    },
    // 按下按鈕後的動作（渲染，不是 API 動作）
    // isNew -> 在 HTML 標籤寫上判斷 新增、編輯、刪除
    // item -> 編輯的話根據 item 帶入舊資料、刪除的話根據該 item 刪除該筆資料
    openModal(isNew, item) {
      if (isNew === "edit") {
        // 編輯時 -> 拿到參數 item -> 代表拿到原有資料
        this.tempOrders = { ...item };
        // 跳出視窗
        this.modal = new Modal(this.$refs.ordersModal, {
          keyboard: false,
          backdrop: "static",
        });
        this.modal.show();
      } else if (isNew === "delete") {
        // 刪除時 -> 拿到參數 item -> 代表拿到原有資料 -> 開啟刪除 modal 視窗
        this.tempOrders = { ...item };
        // 跳出視窗
        this.modal = new Modal(this.$refs.delOrderModal, {
          keyboard: false,
          backdrop: "static",
        });
        this.modal.show();
      }
    },
    // 編輯 API 動作
    updateOrders() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${this.tempOrders.id}`;
      // 要夾帶更改的資料
      this.$http
        .put(url, { data: this.tempOrders })
        // 成功
        .then(() => {
          this.$swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "修改優惠券成功",
            showConfirmButton: false,
            timer: 1500,
          });
          // 關閉視窗
          this.modal.hide();
          // 重新取得資料
          this.getData();
        })
        // 失敗
        .catch((err) => {
          // 跳出提醒視窗
          alert(err.response.data.message);
        });
    },
    // 刪除 API 動作
    delOrders() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${this.tempOrders.id}`;
      this.$http
        .delete(url)
        // 成功
        .then(() => {
          this.$swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "刪除優惠券成功",
            showConfirmButton: false,
            timer: 1500,
          });
          // 關閉 modal 視窗
          this.modal.hide();
          // 重新取得 資料
          this.getData();
        })
        // 失敗
        .catch((err) => {
          // 跳出 response.data.message 提醒框
          alert(err.data.message);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
