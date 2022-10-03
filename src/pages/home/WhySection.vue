<script>
import MainButton from "../../components/MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div class="container mx-auto md:px-10 px-5 md:mt-32 mt-16 relative">
    <img
      src="../../assets/img/home-page-img/img2.png"
      class="object-cover w-[75%] h-[700px] md:block hidden"
      alt=""
    />
    <div
      class="flex flex-col md:p-20 p-0 bg-white md:w-[55%] md:absolute bottom-0 right-0"
    >
      <p class="uppercase cap1">Why we started</p>
      <h1 class="-tracking-[2px] md:mt-6 mt-3 md:w-[80%]">
        It started out as a simple idea and evolved into our passion
      </h1>
      <p class="text-medium-gray md:mt-4 mt-2 body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
      <MainButton
        class="self-start md:mt-8 mt-4"
        :text="'Discover our story >'"
      />
    </div>
  </div>
</template>
