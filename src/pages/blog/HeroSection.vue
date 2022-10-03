<script>
import MainButton from "../../components/MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div class="bg-lavender">
    <div class="container mx-auto md:px-10 px-5 md:pt-40 pt-20 md:pb-20 pb-10">
      <div class="flex">
        <div class="flex flex-col md:w-[60%]">
          <p class="cap3 uppercase">Featured Post</p>
          <h2 class="md:mt-5 mt-3 -tracking-[2px] md:w-[80%]">
            Step-by-step guide to choosing great font pairs
          </h2>
          <p class="label md:mt-4 mt-2">
            By <span class="text-purple">John Doe</span> l May 23, 2022
          </p>
          <p class="body1 md:mt-4 mt-2 text-medium-gray md:w-[75%]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <MainButton class="md:mt-8 mt-4 self-start" :text="'Read More >'" />
        </div>
        <div class="w-[40%] hidden md:block">
          <img
            src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
