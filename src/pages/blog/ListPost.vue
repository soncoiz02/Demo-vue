<script>
import blogApi from "../../api/blog";

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
};
</script>
<template>
  <div class="container mx-auto px-10">
    <div class="flex flex-col my-16">
      <h1 class="-tracking-[2px]">All posts</h1>
      <hr class="mt-8" />
      <div class="flex flex-col my-16 gap-y-16">
        <div
          class="flex items-center gap-x-8"
          v-for="post of listPost"
          :key="post.id"
        >
          <img :src="post.image" alt="" class="w-[490px]" />
          <div class="flex flex-col">
            <p class="cap1 text-purple uppercase">{{ post.category.name }}</p>
            <router-link :to="`/post/${post.id}`" class="mt-5 w-[80%] h2">
              {{ post.title }}
            </router-link>
            <p class="body1 w-[70%] mt-4">
              {{ post.description }}
            </p>
          </div>
        </div>
      </div>
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
