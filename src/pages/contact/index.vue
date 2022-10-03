<script>
import MainButton from "../../components/MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div
    class="md:mt-20 mt-10 md:py-32 py-16 px-5 flex flex-col items-center justify-center md:w-[40%] mx-auto"
  >
    <div class="cap3 uppercase font-extrabold">Contact us</div>
    <h1 class="mt-3 text-center">Let’s Start a Conversation</h1>
    <p class="body1 md:mt-6 mt-3 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </p>
    <div
      class="grid md:grid-cols-2 md:gap-x-12 gap-y-8 md:py-12 py-6 md:px-16 px-8 bg-purple md:mt-16 mt-8 w-full"
    >
      <div class="flex flex-col">
        <div class="body2 text-white">Working hours</div>
        <hr class="my-4" />
        <h5 class="text-white">Monday To Friday</h5>
        <h5 class="text-white">9:00 AM to 8:00 PM</h5>
        <div class="body1 text-white">Our Support Team is available 24/7</div>
      </div>
      <div class="flex flex-col">
        <div class="body2 text-white">Contact Us</div>
        <hr class="my-4" />
        <h5 class="text-white">020 7993 2905</h5>
        <h5 class="text-white">hello@finsweet.com</h5>
      </div>
    </div>
    <form class="flex flex-col w-full gap-y-4 mt-8">
      <input
        type="text"
        placeholder="Full Name"
        class="md:p-6 p-3 border border-gray-300 body1 placeholder:text-black"
      />
      <input
        type="text"
        placeholder="Your Email"
        class="md:p-6 p-3 border border-gray-300 body1 placeholder:text-black"
      />
      <select
        class="md:p-6 px-3 py-4 border border-gray-300 body1 placeholder:text-black"
      >
        <option value="">Query Related</option>
      </select>
      <textarea
        type="text"
        placeholder="Message"
        class="md:p-6 p-3 border border-gray-300 body1 placeholder:text-black h-32 resize-none"
      ></textarea>
      <MainButton :text="'Send Message'" />
    </form>
  </div>
</template>
