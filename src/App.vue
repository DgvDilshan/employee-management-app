<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>{{ news }}</p>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       news: 'my first news'
    }
  }
}
</script>

<style>

</style>
