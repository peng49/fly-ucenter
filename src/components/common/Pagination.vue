<template>
  <nav>
    <ul class="pagination">
      <li v-if="page == 1" class="page-item disabled" aria-disabled="true">
        <span class="page-link" aria-hidden="true">&lsaquo;</span>
      </li>
      <li class="page-item" v-else>
        <a class="page-link" href="javascript:" @click="setPage(1)" rel="prev"
          >&lsaquo;</a
        >
      </li>

      <li
        v-for="item in items"
        :key="item.page"
        class="page-item"
        :class="{ active: item.page == page }"
        aria-current="page"
      >
        <a
          v-if="item.page > 0"
          @click="setPage(item.page)"
          class="page-link"
          href="javascript:"
          >{{ item.page }}</a
        >
        <span v-else class="page-link">...</span>
      </li>
      <li v-if="pageCount > page" class="page-item">
        <a
          class="page-link"
          href="javascript:"
          @click="setPage(page + 1)"
          rel="next"
          >&rsaquo;</a
        >
      </li>
      <li v-else class="page-item disabled" aria-disabled="true">
        <span class="page-link" aria-hidden="true">&rsaquo;</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      required: true,
    },
  },
  created() {
    this.render();
  },
  data() {
    return {
      page: 99,
      pageCount: 1,
      items: [{ page: 2, link: "/" }],
    };
  },
  methods: {
    render() {
      let pageSize = 10;
      this.pageCount = Math.ceil(this.total / pageSize);
      let items = [];

      for (let start = 1; start <= this.pageCount; start++) {
        items.push({ page: start, link: "/page=" + start });
        if (this.page <= 6) {
          if (items.length == 8) {
            items.push({ page: 0, link: "" });
            start = this.pageCount - 2;
          }
        } else if (6 < this.page && this.page < this.pageCount - 6) {
          if (items.length == 2) {
            items.push({ page: 0, link: "" });
            start = this.page - 4;
          }

          if (items.length == 10) {
            items.push({ page: 0, link: "" });
            start = this.pageCount - 2;
          }
        } else {
          if (items.length == 2) {
            items.push({ page: 0, link: "" });
            start = this.pageCount - 10;
          }
        }
      }
      this.items = items;
    },
    setPage(page) {
      this.page = page;
      this.render();
    },
  },
};
</script>