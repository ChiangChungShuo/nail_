<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="{ title, pathName } in breadcrumbList"
        :key="title"
        class="breadcrumb-item"
        :aria-current="pathName ? null : 'page'"
      >
        <RouterLink v-if="pathName" :to="{ name: pathName }">{{
          title
        }}</RouterLink>
        <template v-else>{{ title }}</template>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    breadcrumbList: {
      type: Array,
      default: () => [
        {
          title: "Home",
        },
      ],
    },
  },
};
</script>
