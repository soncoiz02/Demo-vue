<script>
import MainButton from "../../components/MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div class="container mx-auto lg:px-10 md:px-6 px-5 lg:my-32 md:my-26 my-16">
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-center md:w-[500px]">
        Join our team to be a part of our story
      </h2>
      <p class="body1 mt-4 md:w-[400px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <router-link
        to="/contact"
        class="mt-8 bg-yellow md:px-12 py-4 px-8 text-black font-bold md:text-xl text-lg"
        >Join Now</router-link
      >
    </div>
  </div>
</template>
