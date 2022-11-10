<template>
  <div>
    <h1>로또</h1>
    <button @click="getLuckyNums">Get Lucky Numbers</button>
    <p>{{ selectedLuckyNums }}</p>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'TheLotto',
    data: function () {
      return {
        sampleNums: [],
        selectedLuckyNums: [],
      }
    },
    methods: {
      getLuckyNums: function () {
        const numbers = _.range(1, 46)
        this.sampleNums = _.sampleSize(numbers, this.$route.params.lottoNum)
        this.selectedLuckyNums = _.sortBy(this.sampleNums)
      },
    },
  }
</script>
