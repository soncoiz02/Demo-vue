<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MobileHeader from "./components/MobileHeader.vue";
export default {
  data() {
    return {
      nav: [
        {
          key: "home",
          label: "Home",
          path: "/",
        },
        {
          key: "blog",
          label: "Blog",
          path: "/blog",
        },
        {
          key: "about",
          label: "About Us",
          path: "/about",
        },
        {
          key: "contact",
          label: "Contact Us",
          path: "/contact",
        },
      ],
      isOpen: false,
    };
  },
  components: {
    Header,
    Footer,
    MobileHeader,
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0, 0);
    },
  },
  methods: {
    activeMobileNav() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
  <div>
    <Header :nav="nav" :activeNav="activeMobileNav" />
    <MobileHeader :nav="nav" :isOpen="isOpen" />
    <router-view></router-view>
    <Footer />
  </div>
</template>
