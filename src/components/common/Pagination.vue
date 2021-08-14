<template>
  <nav>
    <ul class="pagination">
      <li v-if="page == 1" class="page-item disabled" aria-disabled="true">
        <span class="page-link" aria-hidden="true">&lsaquo;</span>
      </li>
      <li class="page-item" v-else>
        <a class="page-link" href="" rel="prev">&lsaquo;</a>
      </li>

      <li
        v-for="item in items"
        :key="item.page"
        class="page-item"
        :class="{ active: item.page == page }"
        aria-current="page"
      >
        <a v-if="item.page > 0" class="page-link" href="{{ item.link }}">{{
          item.page
        }}</a>
        <span v-else class="page-link">...</span>
      </li>
      <li v-if="next_link" class="page-item">
        <a class="page-link" :href="next_link" rel="next">&rsaquo;</a>
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
      type: String,
      required: true,
    },
  },
  created() {
    let pageSize = 10;
    let pageCount = Math.ceil(this.total / pageSize);
    let items = [];

    for (let start = 1; start <= pageCount; start++) {
      items.push({ page: start, link: "/page=" + start });
      if (this.page <= 6) {
        if (items.length == 8) {
          items.push({ page: "...", link: "" });
          start = pageCount - 2;
        }
      } else if (6 < this.page < pageCount - 6) {
        if (items.length == 2) {
          items.push({ page: 0, link: "" });
          start = this.page - 4;
        }

        if (items.length == 10) {
          items.push({ page: 0, link: "" });
          start = pageCount - 2;
        }
      } else {
        if (items.length == 2) {
          items.push({ page: "0", link: "" });
        }
      }
    }

    this.items = items;

    console.log(this.total);
  },
  data() {
    return {
      page: 10,
      items: [{ page: 2, link: "/" }],
    };
  },
};
</script>