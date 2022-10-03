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
        window.scrollTo(0, 0);
      },
    },
  },
  components: { ListBlog },
};
</script>
<template>
  <div class="container mx-auto md:px-10 px-5">
    <div class="flex flex-col md:my-16 my-8">
      <h1 class="-tracking-[2px]">All posts</h1>
      <hr class="md:mt-8 mt-4" />
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
