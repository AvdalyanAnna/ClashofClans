<template>
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <cart
          :title="item.title"
          :name="`${item.lvl} LVL`"
          :imgUrl="item.img"
          :link="item.alias"
        >
          <template v-slot:body>
            {{ item.description }}
          </template>

          <template v-slot:footer>
           <stats :stats="item.info" />
          </template>

        </cart>
      </slide>

      <template #addons>
        <navigation/>
      </template>
    </carousel>
</template>

<script>
import Cart from "@/components/UI/Cart";
import items from "@/seeders/items.js";
import Stats from "@/components/UI/Stats";

import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Navigation} from 'vue3-carousel';

export default {
  components: {
    Cart,
    Stats,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center',
      },
      breakpoints:{
        300:{
          itemsToShow: 1,
        },
        700:{
          itemsToShow: 2,
        }
      }
    }
  }

}
</script>
