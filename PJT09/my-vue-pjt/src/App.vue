<template>
  <div id="app" class="container">
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <div>
          <img
            id="logo_img__img"
            src="@/assets/SSAFY.png"
            alt=""
            width="80"
            height="55"
            class="d-inline-block align-text-top"
          />
        </div>
        <div class="d-flex">
          <router-link :to="{ name: 'movies' }" id="box1">Movie </router-link>
          <router-link :to="{ name: 'random' }" id="box1">Random </router-link>
          <router-link :to="{ name: 'watch-list' }" id="box1"
            >MovieList
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
      crossorigin="anonymous"
    />
  </div>
</template>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
  crossorigin="anonymous"
></script>

<script>
import axios from "axios"
export default {
  data() {
    return {
      bestMovieList: [],
    }
  },
  methods: {
    getBestMovieList() {
      const options = {
        url: `https://api.themoviedb.org/3/movie/top_rated`,
        method: "get",
        params: {
          api_key: "c7992d4225ab8697d398df3ac1daaf94",
          language: "ko-KR",
          page: 1,
        },
      }
      axios(options)
        .then((res) => {
          // console.log(res)
          this.bestMovieList = res.data.results
          this.$store.commit("GET_BEST_MOVIE_LIST", this.bestMovieList)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  created() {
    this.getBestMovieList()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: left;
  background-color: rgb(212, 239, 249);
  margin: 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration-line: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logo_img__img {
  display: inline-block;
}

#box1 {
  padding-right: 80px;
}
</style>
