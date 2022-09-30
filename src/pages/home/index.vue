<script>
import AboutSection from "./AboutSection.vue";
import FeaturePostSection from "./FeaturePostSection.vue";
import HeroSection from "./HeroSection.vue";
import JoinOurTeamSection from "./JoinOurTeamSection.vue";
import ListAuthorSection from "./ListAuthorSection.vue";
import ListCategory from "./ListCategory.vue";
import ListLogoSection from "./ListLogoSection.vue";
import TestimonialSection from "./TestimonialSection.vue";
import WhySection from "./WhySection.vue";
export default {
  components: {
    HeroSection,
    FeaturePostSection,
    AboutSection,
    WhySection,
    ListAuthorSection,
    ListLogoSection,
    TestimonialSection,
    JoinOurTeamSection,
    ListCategory,
  },
};
</script>

<template>
  <div>
    <HeroSection />
    <FeaturePostSection />
    <AboutSection />
    <ListCategory :options="1" />
    <WhySection />
    <ListAuthorSection />
    <ListLogoSection />
    <TestimonialSection />
    <JoinOurTeamSection />
  </div>
</template>
