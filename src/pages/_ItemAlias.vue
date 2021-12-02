<template>
  <div class="wrapper wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.title">
      <h1 class="title"> {{ item.title }} </h1>
      <p>{{ item.description }}</p>

      <stats :stats="item.info"/>

      <router-link to="/" class="btn btnPrimary"> Back to home</router-link>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items.js";
import Stats from "@/components/UI/Stats";

export default {
  name: "_ItemAlias",
  components: {
    Stats
  },
  data() {
    return {
      item: null,
    }
  },
  created() {
    const alias = this.$route.params.itemAlias;
    this.item = items.find(el => el.alias === alias)
    if (!this.item) {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: #fff;
}

.wrapper-person {
  text-align: center;

  .card-stats {
    border-radius: 14px;
    margin: 30px auto;
    max-width: 500px;
  }
}

</style>
