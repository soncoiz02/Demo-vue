<script>
import HeroSection from "./HeroSection.vue";
import ListPost from "./ListPost.vue";
import JoinOurTeamSection from "../home/JoinOurTeamSection.vue";
import ListCategory from "../home/ListCategory.vue";
export default {
  components: { HeroSection, ListPost, JoinOurTeamSection, ListCategory },
};
</script>
<template>
  <div>
    <HeroSection />
    <ListPost />
    <ListCategory />
    <JoinOurTeamSection />
  </div>
</template>
