<script>
import MainButton from "../../components/MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div class="container mx-auto px-10 mt-32 relative">
    <img
      src="../../assets/img/home-page-img/img2.png"
      class="object-cover w-[75%] h-[700px]"
      alt=""
    />
    <div class="flex flex-col p-20 bg-white w-[55%] absolute bottom-0 right-0">
      <p class="uppercase cap1">Why we started</p>
      <h1 class="-tracking-[2px] mt-6 w-[80%]">
        It started out as a simple idea and evolved into our passion
      </h1>
      <p class="text-medium-gray mt-4 body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
      <MainButton class="self-start mt-8" :text="'Discover our story >'" />
    </div>
  </div>
</template>
