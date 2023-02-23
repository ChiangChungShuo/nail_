<template>
    <nav aria-label="Page navigation">
        <ul class="pagination d-flex justify-content-center">
          <li class="page-item" :class="{'disabled' : !pagination.has_pre }">
            <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li :class="`page-item ${index === pagination.current_page ? 'active' : '' }`" v-for="index in pagination.total_pages" :key="index + 'page'">
            <a class="page-link" href="#" @click.prevent="changePage(index)">{{ index }}</a>
          </li>
          <li class="page-item" :class="{'disabled' : !pagination.has_next }">
            <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page + 1)" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
</template>

<script>
export default {
  props: ['pagination'],
  data () {
    return {
    }
  },
  methods: {
    changePage (page) {
      // 呼叫根元件的方法 取名 & 參數
      this.$emit('changePage', page)
    }
  }
}
</script>
