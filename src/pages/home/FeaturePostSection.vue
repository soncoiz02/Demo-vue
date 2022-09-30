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
  <div class="container mx-auto px-10 py-32">
    <div class="flex">
      <div class="flex flex-col gap-y-8 w-[60%]">
        <h2 class="-tracking-[2px]">Featured Post</h2>
        <div
          v-if="!!featurePost"
          class="flex flex-col p-8 border border-gray-200 w-full"
        >
          <img :src="featurePost.image" class="w-full h-[350px] object-cover" />
          <p class="text-dark-gray body1 mt-8">
            By <span class="text-purple">{{ featurePost.author?.name }}</span> l
            {{ formatDate(featurePost.createdAt) }}
          </p>
          <h3 class="mt-4">
            {{ featurePost.title }}
          </h3>
          <p class="body1 mt-4">
            {{ featurePost.description }}
          </p>
          <MainButton class="mt-8 self-start" :text="'Read More >'" />
        </div>
      </div>
      <div class="flex flex-col w-[40%] pl-8">
        <div class="flex items-center justify-between">
          <h2 class="-tracking-[2px]">All Posts</h2>
          <router-link to="/blog" class="text-purple body1"
            >View All</router-link
          >
        </div>
        <div class="flex flex-col mt-8">
          <div
            class="flex flex-col gap-y-2 px-8 pt-8 pb-6 hover:bg-light-yellow"
            v-for="post of previewPost"
            :key="post.id"
          >
            <p class="text-dark-gray label">
              By <span class="text-purple">{{ post.author?.name }}</span>
              {{ formatDate(post.createdAt) }}
            </p>
            <router-link :to="`/post/${post.title}`" class="h4 mt-2 w-[75%]">
              {{ post.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
