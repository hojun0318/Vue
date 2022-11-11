<template>
  <div id="box4">
    <WatchListItem
      v-for="(watch, index) in watchLists"
      :key="index"
      :watch="watch"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
  </div>
</template>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
  crossorigin="anonymous"
></script>
<script>
import WatchListItem from "@/components/WatchListItem"

export default {
  name: "WatchList",
  components: {
    WatchListItem,
  },
  computed: {
    watchLists() {
      return this.$store.state.watchLists
    },
  },
}
</script>

<style>
#box4 {
  background-color: rgb(212, 239, 249);
  border-radius: 15px;
  padding: 10px;
}
</style>
