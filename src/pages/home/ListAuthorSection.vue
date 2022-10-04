<script>
import authorApi from "../../api/author";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      listAuthor: [],
      carouselSettings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
      },
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
    class="container mx-auto flex flex-col items-center lg:gap-y-12 md:gap-y-8 gap-y-6 lg:px-10 md:px-6 px-5 lg:mt-32 md:pt-26 mt-16"
  >
    <h2>List of Authors</h2>
    <VueSlickCarousel
      class="w-full"
      :dots="true"
      :infinite="false"
      :speed="500"
      :slidesToShow="4"
      :slidesToScroll="4"
      :responsive="[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ]"
    >
      <div v-for="author of listAuthor" :key="author.id">
        <div
          class="flex flex-col justify-center items-center py-10 px-8 mx-4 bg-light-gray hover:bg-light-yellow transition-[1s]"
        >
          <img
            :src="author.avatar"
            alt=""
            class="w-[128px] h-[128px] rounded-[50%] object-cover"
          />
          <router-link
            :to="`/author/${author.id}`"
            class="-tracking-[1px] mt-5 h3"
            >{{ author.name }}</router-link
          >
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
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
