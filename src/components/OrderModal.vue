<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 id="couponsModalLabel" class="modal-title">
          <span>詳細訂單</span>
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <span class="ms-2">訂購人資料</span>
            <table class="table">
              <tbody>
                <tr>
                  <th>姓名</th>
                  <td>{{ this.$props.tempOrders.user?.name }}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{{ this.$props.tempOrders.user?.email }}</td>
                </tr>
                <tr>
                  <th>電話</th>
                  <td>{{ this.$props.tempOrders.user?.tel }}</td>
                </tr>
                <tr>
                  <th>地址</th>
                  <td>{{ this.$props.tempOrders.user?.address }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-6">
            <span class="ms-2">訂購細節</span>
            <table class="table">
              <tbody>
                <tr>
                  <th>訂單編號</th>
                  <td>{{ this.$props.tempOrders.id }}</td>
                </tr>
                <tr>
                  <th>訂購時間</th>
                  <td>
                    {{
                      new Date(
                        this.$props.tempOrders.create_at * 1000
                      ).toLocaleDateString()
                    }}
                  </td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span
                      :class="{
                        'text-success': this.$props.tempOrders.is_paid,
                        'text-danger': !this.$props.tempOrders.is_paid,
                      }"
                      >{{
                        this.$props.tempOrders.is_paid ? "已付款" : "未付款"
                      }}</span
                    >
                  </td>
                </tr>
                <tr>
                  <th>總金額</th>
                  <td>{{ this.$props.tempOrders.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col">
              <span class="ms-2">訂購商品</span>
              <table class="table">
                <tbody>
                  <tr
                    v-for="item in this.$props.tempOrders.products"
                    :key="item.id"
                  >
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">$ {{ item.final_total }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="form-check d-flex justify-content-end pe-5">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              :id="`{this.$props.tempOrders.id}`"
              v-model="this.$props.tempOrders.is_paid"
            />
            <label
              class="form-check-label px-3"
              :for="`{this.$props.tempOrders.id}`"
            >
              <span>{{
                this.$props.tempOrders.is_paid ? "已付款" : "未付款"
              }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-secondary"
          data-bs-dismiss="modal"
        >
          取消
        </button>
        <button
          type="button"
          class="btn btn-custom_medium-green text-white"
          @click="$emit('update-orders', order)"
        >
          修改
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tempOrders: {
      type: Object,
      default() {
        return {};
      },
      required: true,
    },
    data() {
      return {
        order: {},
      };
    },
    watch: {
      tempOrders() {
        this.order = this.tempOrders;
      },
    },
  },
};
</script>
