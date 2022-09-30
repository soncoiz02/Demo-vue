<script>
import MainButton from "./MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div class="bg-slate-800">
    <div class="container mx-auto py-12 px-10">
      <div class="flex justify-between">
        <img src="../assets/img/Logo.svg" alt="" />
        <div class="flex items-center gap-x-6">
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
        class="mt-14 bg-slate-700 px-16 py-20 flex justify-between items-center"
      >
        <p class="text-white text-[36px] font-bold w-[50%]">
          Subscribe to our news letter to get latest updates and news
        </p>
        <div class="flex items-center w-[50%] gap-x-6 justify-end">
          <input
            type="text"
            placeholder="Enter your email"
            class="bg-transparent border border-gray-400 px-6 py-4 w-[60%] outline-none text-white"
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
