<script>
import MainButton from "../../components/MainButton.vue";
import blogApi from "../../api/blog";
import { formatDate } from "../../utils/formatDate";
export default {
  data() {
    return {
      featurePost: {},
      previewPost: [],
    };
  },
  components: { MainButton },
  methods: {
    async handleGetFeaturePost() {
      try {
        const data = await blogApi.getFeaturePost();
        this.featurePost = data[0];
      } catch (error) {
        console.log(error);
      }
    },
    async handleGetPreviewPost() {
      try {
        const data = await blogApi.getPreviewPost();
        this.previewPost = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.handleGetFeaturePost();
    this.handleGetPreviewPost();
  },
  mixins: [formatDate],
};
</script>
<template>
  <div class="container mx-auto lg:px-10 md:px-6 px-5 md:py-32 py-16">
    <div class="flex flex-col lg:flex-row md:gap-y-8 gap-y-6">
      <div
        class="flex flex-col lg:gap-y-8 md:gap-y-6 gap-y-4 lg:w-[60%] w-full"
      >
        <h2 class="-tracking-[2px]">Featured Post</h2>
        <div
          v-if="!!featurePost"
          class="flex flex-col md:p-8 p-4 border border-gray-200 w-full"
        >
          <img
            :src="featurePost.image"
            class="w-full md:h-[350px] h-[250px] object-cover"
          />
          <p class="text-dark-gray body1 md:mt-8 mt-4">
            By <span class="text-purple">{{ featurePost.author?.name }}</span> l
            {{ formatDate(featurePost.createdAt) }}
          </p>
          <h3 class="md:mt-4 mt-2">
            {{ featurePost.title }}
          </h3>
          <p class="body1 md:mt-4 mt-2">
            {{ featurePost.description }}
          </p>
          <router-link
            :to="`/post/${featurePost.id}`"
            class="md:mt-8 mt-4 self-start bg-yellow md:px-12 py-4 px-8 text-black font-bold md:text-xl text-lg"
            >Read more ></router-link
          >
        </div>
      </div>
      <div class="flex flex-col lg:w-[40%] w-full lg:pl-8">
        <div class="flex items-center justify-between">
          <h2 class="-tracking-[2px]">All Posts</h2>
          <router-link to="/blog" class="text-purple body1"
            >View All</router-link
          >
        </div>
        <div class="flex flex-col md:mt-8 mt-4">
          <div
            class="flex flex-col gap-y-2 lg:px-8 px-6 lg:pt-8 pt-6 lg:pb-6 pb-4 md:pb-6 hover:bg-light-yellow"
            v-for="post of previewPost"
            :key="post.id"
          >
            <p class="text-dark-gray label">
              By <span class="text-purple">{{ post.author?.name }}</span>
              {{ formatDate(post.createdAt) }}
            </p>
            <router-link :to="`/post/${post.id}`" class="h4 mt-2 lg:w-[75%]">
              {{ post.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
