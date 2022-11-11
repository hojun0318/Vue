<template>
  <div>
    <WatchListForm />
    <WatchList />
  </div>
</template>

<script>
import WatchList from '@/components/WatchList'
import WatchListForm from '@/components/WatchListForm'


export default {
  name: "WatchListView",
  components: {
    WatchList,
    WatchListForm
  }
}
</script>

<style></style>
