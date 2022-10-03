<script>
import MainButton from "../../components/MainButton.vue";
export default {
  components: { MainButton },
};
</script>
<template>
  <div class="w-full h-screen">
    <div
      class="container mx-auto md:px-10 px-5 flex flex-col justify-center h-full bg-transparent z-2"
    >
      <p class="text-white uppercase text-xl tracking-widest">
        Posted on <span class="font-bold">startup</span>
      </p>
      <h1 class="display text-white md:mt-6 mt-3 md:w-[60%] w-full">
        Step-by-step guide to choosing great font pairs
      </h1>
      <p class="body1 md:mt-6 mt-3 text-white">
        By <span class="text-yellow">James West</span> | May 23, 2022
      </p>
      <p class="body1 text-white md:mt-6 mt-3 md:w-[50%] text-full">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
      <MainButton class="self-start mt-12" :text="'Read More >'" />
    </div>
    <img
      src="../../assets/img/home-page-img/hero-img.png"
      class="absolute top-0 left-0 w-full h-full object-cover -z-10"
    />
  </div>
</template>
