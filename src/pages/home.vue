<template>
  <div class="md-body">
    <h1>hello home</h1>
    <p>Edit me</p>
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <cart
        :title="item.title"
        :name="`${item.lvl} LVL`"
        :imgUrl="item.img"
        :link="item.alias"
      >
          {{ item.description }}

      </cart>
    </div>
  </div>
</template>

<script>
import Cart from "@/components/UI/Cart";
import items from "@/seeders/item.js";
export default {
  components: {
    Cart
  },
  data() {
    return {
      items: items
    }
  }

}
</script>
