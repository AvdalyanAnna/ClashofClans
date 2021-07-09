<template>
  <div class="wrapper">
    <div v-if="item">
      <img :src="item.img" :alt="item.title">
      <h1 class="title"> {{ item.title }} </h1>
      <p>{{ item.description }}</p>
      <router-link to="/" class="btn btnPrimary"> Back to home </router-link>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/item.js";

export default {
  name: "_ItemAlias",
  data() {
    return {
      item: null,
    }
  },
  created() {
    const alias = this.$route.params.itemAlias;
    this.item = items.find(el => el.alias === alias)

  }
}
</script>

<style scoped>

</style>
