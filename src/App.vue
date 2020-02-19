<template>
  <div id="app">
    <DayBoxes />
  </div>
</template>

<script>
import DayBoxes from './components/DayBoxes.vue'

export default {
  name: 'App',
  components: {
    DayBoxes,
  }
}
</script>

<style>
#app {
  overflow-y: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
