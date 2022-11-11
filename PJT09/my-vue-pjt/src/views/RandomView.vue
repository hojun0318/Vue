<template>
  <div>
    <div>
      <div class="card mx-auto mt-4" style="width: 30rem">
        <button
          type="button"
          class="btn btn-success mb-3"
          @click="getRandomMovie"
        >
          PICK
        </button>
        <img :src="this.movieURL" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{{ randomMovie.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import bootstrap from 'bootstrap'
import _ from "lodash"
export default {
  name: "RandomView",
  data() {
    return {
      randomMovie: null,
    }
  },
  computed: {
    movieURL() {
      return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${this.randomMovie.poster_path}`
    },
  },
  methods: {
    getRandomMovie() {
      const movieList = this.$store.state.bestMovieList
      this.randomMovie = _.sample(movieList)
      console.log(this.randomMovie)
    },
  },
  created() {
    this.getRandomMovie()
  },
}
</script>

<style></style>
