<script>
import MainButton from "../../components/MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div class="container mx-auto px-10 my-32">
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-center w-[500px]">
        Join our team to be a part of our story
      </h2>
      <p class="body1 mt-4 w-[400px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <MainButton class="mt-8" :text="'Join Now'" />
    </div>
  </div>
</template>
