<template>
  <div id="box3" class="container">
    <br />
    <h2>보고싶은 영화</h2>
    <input id="iput" type="text" v-model.trim="watchTitle" />
    <button @click="createWatch" class="btn btn-primary">Add</button>
    <br />
  </div>
</template>

<script>
export default {
  name: "WatchListForm",
  data: function () {
    return {
      watchTitle: null,
    }
  },
  methods: {
    createWatch() {
      if (this.watchTitle) {
        this.$store.dispatch("createWatch", this.watchTitle)
      }
      this.watchTitle = null
    },
  },
}
</script>

<style>
#iput {
  margin-right: 10px;
  border-radius: 8px;
}

#box3 {
  background-color: rgb(212, 239, 249);
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  padding: 10px;
}
</style>
