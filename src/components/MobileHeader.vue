<script>
export default {
  props: ["nav", "isOpen"],
};
</script>
<template>
  <div
    :class="`flex flex-col bg-white w-[80%] h-screen fixed top-0 transition-[0.5s]
     ${isOpen ? 'left-0' : 'left-[-100%]'} z-40  p-5`"
  >
    <div class="flex flex-col justify-center mt-[80px] gap-y-8">
      <router-link
        v-for="item of nav"
        :key="item.key"
        :to="item.path"
        :class="`${
          item.path === $route.path ? 'text-yellow' : 'text-slate-800'
        } text-lg font-semibold`"
      >
        {{ item.label }}
      </router-link>
    </div>
    <button
      class="bg-yellow text-black px-10 py-3 cursor-pointer text-lg font-semibold mt-auto"
    >
      Subscribe
    </button>
  </div>
</template>
