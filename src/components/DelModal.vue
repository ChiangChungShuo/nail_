<template>
    <div id="delModal" ref="delModal" class="modal fade" tabindex="-1"
            aria-labelledby="delModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delModalLabel" class="modal-title">
                <span>刪除 {{ tempItem.title }}</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{ tempItem.title }}</strong> (刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="$emit('deleteItem')">
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['tempItem'],
  emits: ['deleteItem'],
  data () {
    return {
      delModal: ''
    }
  },
  methods: {
    showModal () {
      this.delModal.show()
    },
    hideModal () {
      this.delModal.hide()
    }
  },
  mounted () {
    // dom 生成後，再取得 model
    this.delModal = new Modal(this.$refs.delModal, { keyboard: false })
  }
}
</script>
