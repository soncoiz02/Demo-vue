<script>
import MainButton from "../../components/MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div class="bg-lavender">
    <div class="container mx-auto px-10 pt-40 pb-20">
      <div class="flex">
        <div class="flex flex-col w-[60%]">
          <p class="cap3 uppercase">Featured Post</p>
          <h2 class="mt-5 -tracking-[2px] w-[80%]">
            Step-by-step guide to choosing great font pairs
          </h2>
          <p class="label mt-4">
            By <span class="text-purple">John Doe</span> l May 23, 2022
          </p>
          <p class="body1 mt-4 text-medium-gray w-[75%]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <MainButton class="mt-8 self-start" :text="'Read More >'" />
        </div>
        <div class="w-[40%]">
          <img
            src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
