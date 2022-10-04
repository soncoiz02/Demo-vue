<script>
export default {
  props: ["listPost"],
};
</script>
<template>
  <div class="flex flex-col md:my-16 my-8 lg:gap-y-16 md:gap-y-10 gap-y-8">
    <div
      class="flex md:flex-row flex-col lg:items-center md:items-start md:gap-x-8 gap-y-4"
      v-for="post of listPost"
      :key="post.id"
    >
      <img :src="post.image" alt="" class="lg:w-[40%] md:w-[40%] w-full" />
      <div class="flex flex-col">
        <p class="cap1 text-purple uppercase">{{ post.category.name }}</p>
        <router-link
          :to="`/post/${post.id}`"
          class="md:mt-5 mt-3 lg:w-[80%] h2"
        >
          {{ post.title }}
        </router-link>
        <p class="body1 lg:w-[70%] md:mt-4 mt-2">
          {{ post.description }}
        </p>
      </div>
    </div>
  </div>
</template>
