<script>
export default {
  props: ["author"],
};
</script>
<template>
  <div
    class="lg:mt-[80px] mt-[50px] lg:py-32 md:py-26 py-16 lg:px-10 md:px-6 px-5 flex justify-center items-center bg-lavender relative"
  >
    <div class="flex flex-col md:flex-row md:gap-x-8 gap-y-4 lg:w-[60%]">
      <img
        :src="author.avatar"
        alt=""
        class="lg:w-[250px] lg:h-[290px] md:w-[200px] md:h-[250px] w-[150px] h-[160px] object-cover"
      />
      <div class="flex flex-col md:w-[70%]">
        <h1>Hey there, I’m {{ author.name }} and welcome to my Blog</h1>
        <p class="body1 text-medium-gray md:mt-6 mt-3">
          {{ author.description }}
        </p>
        <div class="flex items-center gap-x-4 md:mt-6 mt-3">
          <font-awesome-icon
            icon="fa-brands fa-facebook"
            class="text-xl text-black"
          />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="text-xl text-black"
          />
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            class="text-xl text-black"
          />
          <font-awesome-icon
            icon="fa-brands fa-linkedin"
            class="text-xl text-black"
          />
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 lg:w-[55%] w-[80%] flex">
      <div class="w-[75%] bg-yellow h-6"></div>
      <div class="w-[25%] bg-purple h-6"></div>
    </div>
  </div>
</template>
