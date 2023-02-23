<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div id="couponModal" ref="couponModal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel"
        aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="couponModalLabel" class="modal-title">
              <span v-if="operateType === 'create'">新增優惠卷</span>
              <span v-else>編輯優惠卷</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input type="text" class="form-control" id="title" v-model="innerCoupon.title" placeholder="請輸入標題">
          </div>
          <div class="mb-3">
            <label for="code">優惠碼</label>
            <input type="text" class="form-control" id="code" v-model="innerCoupon.code" placeholder="請輸入優惠碼">
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date" v-model="due_date">
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input type="number" class="form-control" id="price"  min="0" max="100"
              v-model.number="innerCoupon.percent" placeholder="請輸入折扣百分比">
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                :true-value="1" :false-value="0" v-model="innerCoupon.is_enabled" id="is_enabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="$emit('saveCoupon', innerCoupon)">
              確認
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['tempCoupon', 'operateType'],
  emits: ['saveCoupon'],
  data () {
    return {
      isLoading: false,
      couponModal: '',
      due_date: '',
      innerCoupon: {}
    }
  },
  methods: {
    showModal () {
      this.couponModal.show()
    },
    hideModal () {
      this.couponModal.hide()
    }
  },
  mounted () {
    // dom 生成後，再取得 model
    this.couponModal = new Modal(this.$refs.couponModal, { keyboard: false })
  },
  watch: {
    tempCoupon () {
      this.innerCoupon = this.tempCoupon
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.innerCoupon.due_date * 1000).toISOString().split('T')
      if (Array.isArray(dateAndTime)) {
        [this.due_date] = dateAndTime
      }
    },
    due_date () {
      this.innerCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  }
}
</script>
