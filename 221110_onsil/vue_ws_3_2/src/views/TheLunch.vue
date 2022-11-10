<template>
  <div>
    <h1>점심메뉴</h1>
    <button @click="pickOneInLunchMenu">Pick Lunch</button>
    <p>{{ selectedLunchMenu }}</p>
    <br />
    <h2>로또를 뽑아보자</h2>
    <button @click="pickLottoNum">Pick Lotto</button>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'TheLunch',
    data: function () {
      return {
        lunch: ['국밥', '짜장면', '햄버거'],
        selectedLunchMenu: null,
      }
    },
    methods: {
      pickOneInLunchMenu: function () {
        this.selectedLunchMenu = _.sample(this.lunch)
      },
      pickLottoNum: function () {
        this.$router.push({ name: 'TheLotto', params: { lottoNum: 6 } })
      },
    },
  }
</script>

<style></style>
