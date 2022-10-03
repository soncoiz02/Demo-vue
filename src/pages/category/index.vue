<script>
import blogApi from "../../api/blog";
import categoryApi from "../../api/category";
import ListBlog from "../../components/ListBlog.vue";

export default {
  data() {
    return {
      categories: [],
      listBlogs: [],
      cateId: this.$route.params.id,
    };
  },
  methods: {
    async handleGetCategories() {
      try {
        const data = await categoryApi.getAll();
        this.categories = data;
      } catch (error) {
        console.log(error);
      }
    },
    async handleBlogByCategory(id) {
      try {
        const data = await blogApi.getBlogsByCategory(id);
        this.listBlogs = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.handleGetCategories();
    this.handleBlogByCategory(this.cateId);
  },
  watch: {
    $route(from, to) {
      this.cateId = this.$route.params.id;
      this.handleBlogByCategory(this.cateId);
    },
  },
  components: { ListBlog },
};
</script>
<template>
  <div>
    <div
      class="bg-lavender md:py-20 py-10 flex flex-col items-center justify-center md:mt-[80px] mt-[50px]"
    >
      <p class="display">Business</p>
      <p class="body1 text-medium-gray md:w-[25%] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <p class="cap3 md:mt-8 mt-4 uppercase">Blog > Business</p>
    </div>
    <div class="container mx-auto md:px-10 px-5">
      <div class="md:my-32 my-16 flex md:flex-row flex-col justify-between">
        <ListBlog :listPost="listBlogs" />
        <div class="flex flex-col md:w-[22%]">
          <h2 class="-tracking-[2px]">Categories</h2>
          <div class="flex flex-col gap-y-6 mt-10">
            <router-link
              v-for="cate of categories"
              :key="cate.id"
              :class="`flex gap-x-4 items-center p-6 border ${
                cate.id === +cateId ? 'border-[#ffd050]' : 'border-gray-400'
              } ${
                cate.id === +cateId ? 'bg-yellow' : 'bg-white'
              }  hover:bg-yellow transition-[0.5s]`"
              :to="`/category/${cate.id}`"
            >
              <div
                class="bg-light-yellow w-[48px] h-[48px] flex items-center justify-center rounded-lg"
              >
                <img :src="cate.icon" alt="" />
              </div>
              <h3>{{ cate.name }}</h3>
            </router-link>
          </div>
          <h2 class="mt-12">All Tags</h2>
          <div class="flex flex-wrap gap-4 mt-6">
            <div class="rounded-[50px] border border-gray-400 px-9 py-3">
              <p class="font-bold text-medium-gray">Business</p>
            </div>
            <div class="rounded-[50px] border border-gray-400 px-9 py-3">
              <p class="font-bold text-medium-gray">Experience</p>
            </div>
            <div class="rounded-[50px] border border-gray-400 px-9 py-3">
              <p class="font-bold text-medium-gray">Screen</p>
            </div>
            <div class="rounded-[50px] border border-gray-400 px-9 py-3">
              <p class="font-bold text-medium-gray">Technology</p>
            </div>
            <div class="rounded-[50px] border border-gray-400 px-9 py-3">
              <p class="font-bold text-medium-gray">Marketing</p>
            </div>
            <div class="rounded-[50px] border border-gray-400 px-9 py-3">
              <p class="font-bold text-medium-gray">Life</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
