<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('create')">
        建立新的產品
      </button>
    </div>
    <table class="table table-hover mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">{{ product.origin_price }}</td>
          <td class="text-end">{{ product.price }}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('modify', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁元件 -->
    <PaginationComponent
      :pagination="pagination"
      @change-page="getProducts"
    ></PaginationComponent>
  </div>
  <!-- Modal -->
  <ProductModal
    ref="productModal"
    :temp-product="tempProduct"
    :operate-type="operateType"
    @save-product="saveProduct"
  ></ProductModal>
  <DelModal
    ref="delModal"
    :temp-item="tempProduct"
    @delete-item="deleteProduct"
  ></DelModal>
  <!-- Modal -->
</template>

<script>
import Swal from "sweetalert2";
import PaginationComponent from "@/components/PaginationComponent.vue";
import ProductModal from "@/components/ProductModal.vue";
import DelModal from "@/components/DelModal.vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      operateType: "",
      tempProduct: {
        imagesUrl: [],
      },
      pagination: {},
      pageNum: 1,
    };
  },
  methods: {
    getProducts(pageNum = 1) {
      // 參數預設值
      this.isLoading = true;
      this.pageNum = pageNum;
      this.$http
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products?page=${pageNum}`
        )
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.isLoading = false;
        });
    },
    // 新增 & 修改 產品
    saveProduct(product) {
      this.isLoading = true;
      let api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`;
      if (this.operateType === "modify") {
        api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${product.id}`;
      }
      this.$http[this.operateType === "create" ? "post" : "put"](`${api}`, {
        data: product,
      })
        .then((res) => {
          this.$refs.productModal.hideModal();
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.getProducts(this.pageNum);
          this.isLoading = false;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.isLoading = false;
        });
    },
    // 刪除商品
    deleteProduct() {
      this.isLoading = true;
      this.$http
        .delete(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`,
          { data: this.tempProduct }
        )
        .then((res) => {
          this.$refs.delModal.hideModal();
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.getProducts(this.pageNum);
          this.isLoading = false;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.isLoading = false;
        });
    },
    openModal(operateType, product) {
      this.operateType = operateType;
      if (operateType === "create") {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.$refs.productModal.showModal();
      } else if (operateType === "modify") {
        this.tempProduct = {
          ...product,
        };
        this.$refs.productModal.showModal();
      } else if (operateType === "delete") {
        this.tempProduct = {
          ...product,
        };
        this.$refs.delModal.showModal();
      }
    },
  },
  components: {
    PaginationComponent,
    ProductModal,
    DelModal,
  },
  mounted() {
    this.getProducts();
  },
};
</script>
