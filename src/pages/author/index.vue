<script>
import authorApi from "../../api/author";
import blogApi from "../../api/blog";
import Intro from "./Intro.vue";
import ListPost from "./ListPost.vue";
export default {
  components: { Intro, ListPost },
  data() {
    return {
      author: {},
      listBlogs: [],
      authorId: this.$route.params.id,
    };
  },
  methods: {
    async handleGetAuthor(id) {
      try {
        const data = await authorApi.getOne(id);
        this.author = data;
      } catch (error) {
        console.log(error);
      }
    },
    async handleGetBlogsByAuthor(id) {
      try {
        const data = await blogApi.getBlogsByAuthor(id);
        this.listBlogs = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.handleGetAuthor(this.authorId);
    this.handleGetBlogsByAuthor(this.authorId);
  },
};
</script>
<template>
  <div>
    <Intro :author="author" />
    <ListPost :listBlogs="listBlogs" />
  </div>
</template>
