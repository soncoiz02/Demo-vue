<script>
export default {
  props: ["author"],
};
</script>
<template>
  <div
    class="md:mt-[80px] mt-[50px] md:py-32 py-16 md:px-10 px-5 flex justify-center items-center bg-lavender relative"
  >
    <div class="flex flex-col md:flex-row md:gap-x-8 gap-y-4 md:w-[60%]">
      <img
        :src="author.avatar"
        alt=""
        class="md:w-[250px] md:h-[290px] w-[150px] h-[160px] object-cover"
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
    <div class="absolute bottom-0 md:w-[55%] w-[80%] flex">
      <div class="w-[75%] bg-yellow h-6"></div>
      <div class="w-[25%] bg-purple h-6"></div>
    </div>
  </div>
</template>
