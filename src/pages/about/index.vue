<script>
import OverviewSection from "./OverviewSection.vue";
import AboutContent from "./AboutContent.vue";
import ListAuthorSection from "../home/ListAuthorSection.vue";
import JoinOurTeamSection from "../home/JoinOurTeamSection.vue";
export default {
  components: {
    OverviewSection,
    AboutContent,
    ListAuthorSection,
    JoinOurTeamSection,
  },
};
</script>
<template>
  <div>
    <OverviewSection />
    <AboutContent />
    <ListAuthorSection class="mt-0" />
    <JoinOurTeamSection />
  </div>
</template>
