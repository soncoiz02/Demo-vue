<script>
import blogApi from "../../api/blog";
import ListBlog from "../../components/ListBlog.vue";

export default {
  data() {
    return {
      listPost: [],
      page: 1,
    };
  },
  methods: {
    async handleGetListPost(page) {
      try {
        const data = await blogApi.getListPostPerPage(page);
        this.listPost = data;
      } catch (error) {
        console.log(error);
      }
    },
    handleSwitchPage(key) {
      if (key === "prev") {
        if (this.page === 1) return;
        this.page--;
      }
      if (key === "next") {
        this.page++;
      }
    },
  },
  mounted() {
    this.handleGetListPost(this.page);
  },
  watch: {
    page: {
      handler(nextVal, prevVal) {
        this.handleGetListPost(nextVal);
      },
    },
  },
  components: { ListBlog },
};
</script>
<template>
  <div class="container mx-auto px-10">
    <div class="flex flex-col my-16">
      <h1 class="-tracking-[2px]">All posts</h1>
      <hr class="mt-8" />
      <ListBlog :listPost="listPost" />
      <div class="flex justify-center items-center gap-x-4">
        <h4
          class="text-medium-gray cursor-pointer"
          v-on:click="handleSwitchPage('prev')"
        >
          &lt; Prev
        </h4>
        <h3 class="cursor-pointer" v-on:click="handleSwitchPage('next')">
          Next >
        </h3>
      </div>
    </div>
  </div>
</template>
