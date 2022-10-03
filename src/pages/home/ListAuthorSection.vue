<script>
import authorApi from "../../api/author";

export default {
  data() {
    return {
      listAuthor: [],
    };
  },
  methods: {
    async handleGetListAuthor() {
      try {
        const data = await authorApi.getAll();
        this.listAuthor = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.handleGetListAuthor();
  },
};
</script>
<template>
  <div
    class="container mx-auto flex flex-col items-center gap-y-12 px-10 md:mt-32 mt-16"
  >
    <h2>List of Authors</h2>
    <div class="grid gap-8 md:grid-cols-4 w-full">
      <router-link
        class="flex flex-col justify-center items-center py-10 px-8 bg-light-gray hover:bg-light-yellow transition-[1s]"
        v-for="author of listAuthor"
        :key="author.id"
        :to="`/author/${author.id}`"
      >
        <img
          :src="author.avatar"
          alt=""
          class="w-[128px] h-[128px] rounded-[50%] object-cover"
        />
        <h3 class="-tracking-[1px] mt-5">{{ author.name }}</h3>
        <p class="body2 text-medium-gray">{{ author.job }}</p>
        <div class="flex items-center justify-center gap-x-4 mt-5">
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
      </router-link>
    </div>
  </div>
</template>
