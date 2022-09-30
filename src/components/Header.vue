<script>
export default {};
</script>

<template>
  <div class="w-full bg-slate-800 fixed top-0 left-0 z-50">
    <div class="container mx-auto py-3 px-10 flex justify-between">
      <router-link to="/" class="flex items-center">
        <img src="../assets/Logo.svg" alt="" />
      </router-link>
      <div class="flex items-center gap-x-8">
        <div class="flex items-center gap-x-6">
          <router-link to="/" class="text-white text-lg">Home</router-link>
          <router-link to="/blog" class="text-white text-lg">Blog</router-link>
          <router-link to="/about" class="text-white text-lg"
            >About Us</router-link
          >
          <router-link to="/contact" class="text-white text-lg"
            >Contact us</router-link
          >
        </div>
        <button class="bg-white px-10 py-3 cursor-pointer text-lg">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>
