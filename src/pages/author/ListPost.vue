<script>
import ListBlog from "../../components/ListBlog.vue";
export default {
  props: ["listBlogs"],
  components: { ListBlog },
};
</script>
<template>
  <div class="flex justify-center md:py-32 py-16 md:px-10 px-5">
    <div class="flex flex-col md:w-[60%] md:gap-y-16 gap-y-4">
      <h1 class="-tracking-[2px]">My Posts</h1>
      <ListBlog :listPost="listBlogs" />
    </div>
  </div>
</template>
