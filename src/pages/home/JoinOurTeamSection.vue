<script>
import MainButton from "../../components/MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div class="container mx-auto md:px-10 px-5 md:my-32 my-16">
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-center md:w-[500px]">
        Join our team to be a part of our story
      </h2>
      <p class="body1 mt-4 md:w-[400px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <MainButton class="mt-8" :text="'Join Now'" />
    </div>
  </div>
</template>
