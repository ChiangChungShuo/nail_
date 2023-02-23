<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="goToPage(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span></a
        >
      </li>
      <li
        v-for="(item, index) in pages.total_pages"
        :key="index"
        class="page-item"
      >
        <span v-if="item === pages.current_page" class="page-link">{{
          item
        }}</span>
        <a v-else class="page-link" href="#" @click.prevent="goToPage(item)">{{
          item
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link"
          href="#"
          @click.prevent="goToPage(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span></a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pages"],
  data() {
    return {};
  },
  methods: {
    goToPage(page) {
      this.$emit("goToPage", page);
    },
  },
};
</script>
