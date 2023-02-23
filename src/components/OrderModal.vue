<template>
  <VueLoading :active="isLoading"></VueLoading>
    <div id="orderModal" ref="orderModal" class="modal fade" tabindex="-1" aria-labelledby="orderModalLabel"
          aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="orderModalLabel" class="modal-title">
                <span>訂單細節</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-4">
                  <h3>用戶資料</h3>
                  <table class="table">
                    <tbody v-if="innerOrder.user">
                      <tr>
                        <th style="width: 100px">姓名</th>
                        <td>{{ innerOrder.user.name }}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{{ innerOrder.user.email }}</td>
                      </tr>
                      <tr>
                        <th>電話</th>
                        <td>{{ innerOrder.user.tel }}</td>
                      </tr>
                      <tr>
                        <th>地址</th>
                        <td>{{ innerOrder.user.address }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-md-8">
                  <h3>訂單細節</h3>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th style="width: 100px">訂單編號</th>
                        <td>{{ innerOrder.id }}</td>
                      </tr>
                      <tr>
                        <th>下單時間</th>
                        <td>
                          {{ $dateFormat.date(innerOrder.create_at) }}
                        </td>
                      </tr>
                      <tr>
                        <th>付款狀態</th>
                        <td>
                          <strong v-if="innerOrder.is_paid" class="text-success">已付款</strong>
                          <span v-else class="text-muted">尚未付款</span>
                        </td>
                      </tr>
                      <tr>
                        <th>總金額</th>
                        <td>
                          {{ innerOrder.total }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>選購商品</h3>
                  <table class="table">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in innerOrder.products" :key="product.id">
                        <th>
                          {{ product.product.title }}
                        </th>
                        <td>{{ product.qty }} / {{ product.product.unit }}</td>
                        <td class="text-end">
                          {{ product.final_total }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="d-flex justify-content-end">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox"
                        value="" id="flexCheckDefault" v-model="innerOrder.is_paid"/>
                      <label class="form-check-label" for="flexCheckDefault">
                        <span v-if="innerOrder.is_paid">已付款</span>
                        <span v-else>未付款</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="$emit('updatePaid', innerOrder)">
                修改付費狀態
              </button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['tempOrder'],
  emits: ['updatePaid'],
  data () {
    return {
      isLoading: false,
      orderModal: ''
    }
  },
  methods: {
    showModal () {
      this.orderModal.show()
    },
    hideModal () {
      this.orderModal.hide()
    }
  },
  mounted () {
    // dom 生成後，再取得 model
    this.orderModal = new Modal(this.$refs.orderModal, { keyboard: false })
  },
  computed: {
    innerOrder () {
      return this.tempOrder
    }
  }
}
</script>
