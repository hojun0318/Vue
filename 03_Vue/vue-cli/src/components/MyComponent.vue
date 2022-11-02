<template>
  <div class="border">       
    <h1>싸피 이거는 내가 만든 새로운 컴포넌트다!</h1>
    <MyComponentItem static-props="MyComponen 에서 보낸 데이터/>}
    <MyComponentItem/>
  </div>ㅉ
</template>

<script>
// 1. 불러오기
import MyComponentItem from '@/components/MyComponentItem'
export default {
  name: 'MyComponent',
  // \\2. 등록하기
  components: {
    MyComponentItem,
  }
}
</script>

<style>
  .border {
    border: solid 1px black;
  }

</style>