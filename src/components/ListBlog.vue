<script>
export default {
  props: ["listPost"],
};
</script>
<template>
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
</template>
