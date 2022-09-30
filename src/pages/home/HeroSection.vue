<script>
import MainButton from "../../components/MainButton.vue";
export default {
  components: { MainButton },
};
</script>
<template>
  <div class="w-full h-screen">
    <div
      class="container mx-auto px-10 flex flex-col justify-center h-full bg-transparent z-2"
    >
      <p class="text-white uppercase text-xl tracking-widest">
        Posted on <span class="font-bold">startup</span>
      </p>
      <h1 class="display text-white mt-6 w-[60%]">
        Step-by-step guide to choosing great font pairs
      </h1>
      <p class="body1 mt-6 text-white">
        By <span class="text-yellow">James West</span> | May 23, 2022
      </p>
      <p class="body1 text-white mt-6 w-[50%]">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
      <MainButton class="self-start mt-12" :text="'Read More >'" />
    </div>
    <img
      src="../../assets/img/home-page-img/hero-img.png"
      class="absolute top-0 left-0 w-full h-full object-cover after:content-[''] after:w-full after:h-screen after:bg-gradient-radial after:from-transparent after:to-black/60 -z-10"
    />
  </div>
</template>
