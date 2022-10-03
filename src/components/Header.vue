<script>
export default {
  props: ["nav", "activeNav"],
};
</script>

<template>
  <div class="w-full bg-slate-800 fixed top-0 left-0 z-50">
    <div
      class="container mx-auto py-3 px-5 md:px-10 flex justify-between items-center"
    >
      <router-link to="/" class="flex items-center">
        <img src="../assets/Logo.svg" alt="" />
      </router-link>
      <div class="md:flex items-center gap-x-8 hidden">
        <div class="flex items-center gap-x-6">
          <router-link
            v-for="item of nav"
            :key="item.key"
            :to="item.path"
            class="text-white text-lg"
          >
            {{ item.label }}
          </router-link>
        </div>
        <button class="bg-white px-10 py-3 cursor-pointer text-lg">
          Subscribe
        </button>
      </div>
      <font-awesome-icon
        icon="fa-solid fa-bars"
        class="text-xl text-white cursor-pointer md:hidden"
        v-on:click="activeNav"
      />
    </div>
  </div>
</template>
