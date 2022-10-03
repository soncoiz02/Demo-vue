<script>
export default {};
</script>
<template>
  <div class="container mx-auto md:px-10 px-5">
    <div
      class="flex md:flex-row flex-col gap-y-8 md:px-28 px-10 md:py-20 py-10 bg-yellow-50"
    >
      <div
        class="flex flex-col md:w-[45%] md:pr-24 md:border-r border-gray-400"
      >
        <p class="cap1 text-black">TESTIMONIALs</p>
        <h2>What people say about our blog</h2>
        <p class="body1 md:mt-4 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div class="flex flex-col md:w-[55%] md:pl-24">
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>
        <div
          class="flex md:flex-row flex-col md:items-center gap-y-4 md:mt-28 mt-10"
        >
          <div class="flex gap-x-4 2-[50%]">
            <img
              src="../../assets/img/home-page-img/Profile picture.png"
              alt=""
              class="w-12 h-12"
            />
            <div class="flex flex-col">
              <h4>Jonathan Vallem</h4>
              <p class="body1 text-medium-gray">New york, USA</p>
            </div>
          </div>
          <div class="flex items-center justify-end gap-x-6 md:w-[50%]">
            <button
              class="w-12 h-12 rounded-[50%] text-center leading-6 bg-white text-lg"
            >
              <font-awesome-icon
                icon="fa-solid fa-left-long"
                class="text-black"
              />
            </button>
            <button
              class="w-[62px] h-[62px] rounded-[50%] text-center leading-[62px] bg-black text-lg"
            >
              <font-awesome-icon
                icon="fa-solid fa-right-long"
                class="text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
