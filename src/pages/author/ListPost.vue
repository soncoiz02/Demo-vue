<script>
import ListBlog from "../../components/ListBlog.vue";
export default {
  props: ["listBlogs"],
  components: { ListBlog },
};
</script>
<template>
  <div class="flex justify-center py-32 px-10">
    <div class="flex flex-col w-[60%] gap-y-16">
      <h1 class="-tracking-[2px]">My Posts</h1>
      <ListBlog :listPost="listBlogs" />
    </div>
  </div>
</template>
