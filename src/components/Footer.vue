<script>
import MainButton from "./MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div class="bg-slate-800">
    <div class="container mx-auto md:py-12 py-8 md:px-10 px-5">
      <div class="flex md:flex-row flex-col justify-between gap-y-4">
        <img src="../assets/Logo.svg" class="h-10" alt="" />
        <div
          class="flex items-center flex-wrap justify-center md:gap-x-6 gap-x-3"
        >
          <router-link to="/" class="text-white text-lg">Home</router-link>
          <router-link to="/blog" class="text-white text-lg">Blog</router-link>
          <router-link to="/about" class="text-white text-lg"
            >About Us</router-link
          >
          <router-link to="/contact" class="text-white text-lg"
            >Contact us</router-link
          >
          <router-link to="/privacy-policy" class="text-white text-lg"
            >Privacy Policy</router-link
          >
        </div>
      </div>
      <div
        class="md:mt-14 mt-7 bg-slate-700 md:px-16 px-8 md:py-20 py-10 flex md:flex-row flex-col justify-between items-center gap-y-4"
      >
        <h2 class="text-white md:w-[50%] text-center md:text-left">
          Subscribe to our news letter to get latest updates and news
        </h2>
        <div
          class="flex md:flex-row flex-col md:items-center items-center md:w-[50%] w-full md:gap-x-6 gap-y-4 justify-end"
        >
          <input
            type="text"
            placeholder="Enter your email"
            class="bg-transparent border border-gray-400 px-6 py-4 md:w-[60%] w-full outline-none text-white"
          />
          <MainButton :text="'Subscribe'" />
        </div>
      </div>
      <div class="flex items-center justify-between mt-12">
        <div class="flex flex-col">
          <p class="body1 text-white">Hello@finsweet.com 020 7993 2905</p>
          <p class="body1 text-white">Finstreet 118 2561 Fintown</p>
        </div>
        <div class="flex items-center gap-x-6">
          <font-awesome-icon
            icon="fa-brands fa-facebook"
            class="text-xl text-medium-gray hover:text-white"
          />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="text-xl text-medium-gray hover:text-white"
          />
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            class="text-xl text-medium-gray hover:text-white"
          />
          <font-awesome-icon
            icon="fa-brands fa-linkedin"
            class="text-xl text-medium-gray hover:text-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>
