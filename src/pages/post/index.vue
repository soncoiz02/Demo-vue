<script>
import PostContent from "./PostContent.vue";
import RelativePost from "./RelativePost.vue";
import JoinOurTeamSection from "../home/JoinOurTeamSection.vue";
import blogApi from "../../api/blog";
export default {
  components: { PostContent, RelativePost, JoinOurTeamSection },
  data() {
    return {
      postDetail: {},
    };
  },
  methods: {
    async handleGetPostDetail(id) {
      try {
        const data = await blogApi.getOne(id);
        this.postDetail = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    const postId = this.$route.params.id;
    this.handleGetPostDetail(postId);
  },
};
</script>
<template>
  <div>
    <PostContent :postDetail="postDetail" />
    <RelativePost
      v-if="postDetail.categoryId"
      :categoryId="postDetail.categoryId"
    />
    <JoinOurTeamSection />
  </div>
</template>
