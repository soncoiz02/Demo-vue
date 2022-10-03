<script>
export default {
  props: ["listPost"],
};
</script>
<template>
  <div class="flex flex-col md:my-16 my-8 md:gap-y-16 gap-y-8">
    <div
      class="flex md:flex-row flex-col items-center md:gap-x-8 gap-y-4"
      v-for="post of listPost"
      :key="post.id"
    >
      <img :src="post.image" alt="" class="md:w-[490px] w-full" />
      <div class="flex flex-col">
        <p class="cap1 text-purple uppercase">{{ post.category.name }}</p>
        <router-link
          :to="`/post/${post.id}`"
          class="md:mt-5 mt-3 md:w-[80%] h2"
        >
          {{ post.title }}
        </router-link>
        <p class="body1 md:w-[70%] md:mt-4 mt-2">
          {{ post.description }}
        </p>
      </div>
    </div>
  </div>
</template>
