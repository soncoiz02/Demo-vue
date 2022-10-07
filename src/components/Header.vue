<script>
export default {
  props: ["nav", "activeNav"],
};
</script>

<template>
  <div class="w-full bg-slate-800 fixed top-0 left-0 z-50">
    <div
      class="container mx-auto py-3 px-5 lg:px-10 md:px-6 flex justify-between items-center"
    >
      <router-link to="/" class="flex items-center">
        <img src="../assets/Logo.svg" alt="" />
      </router-link>
      <div class="lg:flex items-center gap-x-8 hidden">
        <div class="flex items-center gap-x-6">
          <router-link
            v-for="item of nav"
            :key="item.key"
            :to="item.path"
            :class="`text-white relative text-lg after:absolute after:-bottom-2 after:left-0 after:rounded after:h-1 after:bg-white after:transition-[0.5s] ${
              item.path === $route.path ? 'after:w-full' : 'after:w-0'
            } `"
          >
            {{ item.label }}
          </router-link>
        </div>
        <router-link
          to="/contact"
          class="bg-white px-10 py-3 cursor-pointer text-lg"
        >
          Subscribe
        </router-link>
      </div>
      <font-awesome-icon
        icon="fa-solid fa-bars"
        class="text-xl text-white cursor-pointer lg:hidden"
        v-on:click="activeNav"
      />
    </div>
  </div>
</template>
