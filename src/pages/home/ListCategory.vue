<script>
import categoryApi from "../../api/category";
export default {
  props: ["options"],
  data() {
    return {
      categories: [],
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
  },
  mounted() {
    this.handleGetCategories();
  },
};
</script>
<template>
  <div
    :class="`container mx-auto flex flex-col ${
      options === 1 ? 'items-center' : ''
    } lg:gap-y-12 md:gap-y-8 gap-y-6 lg:px-10 md:px-6 px-5 lg:mt-32 md:mt-26 mt-16`"
  >
    <h2>{{ options === 1 ? "Choose A Catagory" : "All Categories" }}</h2>
    <div class="grid lg:gap-8 gap-4 lg:grid-cols-4 md:grid-cols-2">
      <router-link
        class="flex flex-col border border-gray-300 p-8 hover:bg-yellow"
        v-for="cate of categories"
        :key="cate.id"
        :to="`/category/${cate.id}`"
      >
        <div
          class="aspect-square w-12 bg-light-yellow rounded-xl flex items-center justify-center"
        >
          <img :src="cate.icon" alt="" />
        </div>
        <h3 class="-tracking-[1px] mt-4">{{ cate.name }}</h3>
        <p class="body1 text-medium-gray mt-1">
          {{ cate.description }}
        </p>
      </router-link>
    </div>
  </div>
</template>
