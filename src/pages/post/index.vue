<script>
import PostContent from "./PostContent.vue";
import RelativePost from "./RelativePost.vue";
import JoinOurTeamSection from "../home/JoinOurTeamSection.vue";
export default {
  components: { PostContent, RelativePost, JoinOurTeamSection },
};
</script>
<template>
  <div>
    <PostContent />
    <RelativePost />
    <JoinOurTeamSection />
  </div>
</template>
