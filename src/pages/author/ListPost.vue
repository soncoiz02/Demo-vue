<script>
export default {
  props: ["listBlogs"],
};
</script>
<template>
  <div class="flex justify-center py-32 px-10">
    <div class="flex flex-col w-[60%] gap-y-16">
      <h1 class="-tracking-[2px]">My Posts</h1>
      <div class="flex flex-col gap-y-16">
        <div
          class="flex gap-x-8 items-center"
          v-for="blog of listBlogs"
          :key="blog.id"
        >
          <img
            :src="blog.image"
            alt=""
            class="w-[420px] h-[320px] object-cover"
          />
          <div class="flex flex-col w-[50%]">
            <div class="cap1 text-purple">{{ blog.category?.name }}</div>
            <router-link
              :to="`/post/${blog.id}`"
              class="h2 mt-5 -tracking-[2px]"
            >
              {{ blog.title }}
            </router-link>
            <p class="body1 text-medium-gray">
              {{ blog.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
