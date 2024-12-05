<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
