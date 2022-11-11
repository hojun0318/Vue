<template>
  <div>
    <p
      id="comment"
      @click="updateWatchStatus"
      :class="{ 'is-watched': watch.isWatched }"
    >
      {{ watch.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "WatchListItem",
  props: {
    watch: Object,
  },
  methods: {
    updateWatchStatus() {
      this.$store.dispatch("updateWatchStatus", this.watch)
    },
  },
}
</script>

<style>
.is-watched {
  text-decoration: line-through;
}

#comment {
  background-color: rgb(247, 247, 247);
  margin: 3px;
  border-radius: 15px;
}
</style>
