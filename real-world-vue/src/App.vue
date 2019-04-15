<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Homegit a</router-link>|
      <router-link :to="{name:'eventshow', params: {showid: showid}}">Event Show:</router-link>
      <input style="width:5%" type="number" v-model="showid">
      ({{showid}})
      <router-link :to="{name:'eventcreate'}">Event Create</router-link>|
      <router-link :to="{name:'eventlist'}">Event List</router-link>|
    </div>

    <router-view/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showid: -1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
