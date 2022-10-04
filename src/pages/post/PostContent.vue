<script>
import blogApi from "../../api/blog";
import { formatDate } from "../../utils/formatDate";
import { marked } from "marked";
export default {
  data() {
    return {
      postDetail: {},
    };
  },
  methods: {
    async handleGetPostDetail(id) {
      try {
        const data = await blogApi.getOne(id);
        this.postDetail = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    const postId = this.$route.params.id;
    this.handleGetPostDetail(postId);
  },
  computed: {
    markdownToHtml() {
      return marked(this.postDetail?.content);
    },
  },
  mixins: [formatDate],
};
</script>
<template>
  <div class="container mx-auto lg:px-10 md:px-6 px-5 md:py-32 py-16">
    <div class="flex flex-col items-center">
      <div class="flex flex-col lg:w-[55%] md:w-[80%]">
        <div class="flex gap-x-4">
          <img
            :src="postDetail.author?.avatar"
            alt=""
            class="w-12 h-12 rounded-[50%] object-cover"
          />
          <div>
            <router-link
              :to="`/author/${postDetail.author.id}`"
              class="text-purple h3"
              >{{ postDetail.author?.name }}</router-link
            >
            <p class="body1">
              Posted on {{ this.formatDate2(postDetail.createdAt) }}
            </p>
          </div>
        </div>
        <h1 class="-tracking-[2px] lg:mt-6 mt-3 md:w-[90%]">
          {{ postDetail.title }}
        </h1>
        <div class="flex gap-x-2 lg:mt-8 mt-4 items-center">
          <img :src="postDetail.category?.icon" alt="" />
          <h4>{{ postDetail.category?.name }}</h4>
        </div>
      </div>
      <div class="lg:my-16 my-8 w-full">
        <img
          :src="postDetail.image"
          alt=""
          class="w-full object-cover md:w-full lg:h-[582px] md:h-[400px] h-[300px]"
        />
      </div>
      <div class="flex flex-col lg:w-[55%] md:w-[80%] gap-y-12">
        <div v-html="markdownToHtml"></div>
      </div>
    </div>
  </div>
</template>
