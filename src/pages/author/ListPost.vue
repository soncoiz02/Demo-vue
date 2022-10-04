<script>
import ListBlog from "../../components/ListBlog.vue";
export default {
  props: ["listBlogs"],
  components: { ListBlog },
};
</script>
<template>
  <div
    class="flex justify-center lg:py-32 md:py-26 py-16 lg:px-10 md:px-6 px-5"
  >
    <div class="flex flex-col lg:w-[60%] lg:gap-y-16 gap-y-4">
      <h1 class="-tracking-[2px]">My Posts</h1>
      <ListBlog :listPost="listBlogs" />
    </div>
  </div>
</template>
