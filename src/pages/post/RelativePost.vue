<script>
import blogApi from "../../api/blog";
import { formatDate } from "../../utils/formatDate";

export default {
  props: ["categoryId"],
  data() {
    return {
      listPosts: [],
    };
  },
  methods: {
    async handleGetPostByCategory(categoryId) {
      try {
        const data = await blogApi.getBlogsByCategory(categoryId);
        this.listPosts = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mixins: [formatDate],
  mounted() {
    this.handleGetPostByCategory(this.categoryId);
  },
};
</script>
<template>
  <div class="container mx-auto lg:px-10 md:px-6 px-5">
    <div class="flex flex-col md:gap-y-16 gap-y-8">
      <h2 class="-tracking-[2px]">What to read next</h2>
      <div class="grid md:grid-cols-3 md:gap-x-8 gap-y-8">
        <div class="flex flex-col" v-for="post of listPosts" :key="post.id">
          <img :src="post.image" alt="" />
          <p class="label mt-8">
            By <span class="text-purple">{{ post.author?.name }}</span>
            {{ formatDate(post.createdAt) }}
          </p>
          <router-link
            class="h3 md:mt-4 mt-2 -tracking-[1px] w-[80%] leading-[40px]"
            :to="`/post/${post.id}`"
          >
            {{ post.title }}
          </router-link>
          <p class="body1 mt-4 w-[85%]">
            {{ post.description }}
          </p>
        </div>
      </div>
      <hr class="mt-16" />
    </div>
  </div>
</template>
