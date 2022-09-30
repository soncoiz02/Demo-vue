<script>
export default {
  props: ["author"],
};
</script>
<template>
  <div
    class="mt-[80px] py-32 px-10 flex justify-center items-center bg-lavender relative"
  >
    <div class="flex gap-x-8 w-[60%]">
      <img
        :src="author.avatar"
        alt=""
        class="w-[250px] h-[290px] object-cover"
      />
      <div class="flex flex-col w-[70%]">
        <h1>Hey there, I’m {{ author.name }} and welcome to my Blog</h1>
        <p class="body1 text-medium-gray mt-6">
          {{ author.description }}
        </p>
        <div class="flex items-center gap-x-4 mt-6">
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
    <div class="absolute bottom-0 w-[55%] flex">
      <div class="w-[75%] bg-yellow h-6"></div>
      <div class="w-[25%] bg-purple h-6"></div>
    </div>
  </div>
</template>
