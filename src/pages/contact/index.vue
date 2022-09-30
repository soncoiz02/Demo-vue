<script>
import MainButton from "../../components/MainButton.vue";
export default { components: { MainButton } };
</script>
<template>
  <div
    class="mt-20 py-32 flex flex-col items-center justify-center w-[40%] mx-auto"
  >
    <div class="cap3 uppercase font-extrabold">Contact us</div>
    <h1 class="mt-3">Let’s Start a Conversation</h1>
    <p class="body1 mt-6 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </p>
    <div class="grid grid-cols-2 gap-x-12 py-12 px-16 bg-purple mt-16 w-full">
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
        class="p-6 border border-gray-300 body1 placeholder:text-black"
      />
      <input
        type="text"
        placeholder="Your Email"
        class="p-6 border border-gray-300 body1 placeholder:text-black"
      />
      <select class="p-6 border border-gray-300 body1 placeholder:text-black">
        <option value="">Query Related</option>
      </select>
      <textarea
        type="text"
        placeholder="Message"
        class="p-6 border border-gray-300 body1 placeholder:text-black h-32 resize-none"
      ></textarea>
      <MainButton :text="'Send Message'" />
    </form>
  </div>
</template>
