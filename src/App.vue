<template>
  <BlackJackApp></BlackJackApp>
</template>

<script>
import BlackJackApp from "./components/BlackJackApp.vue";

export default {
  name: "App",
  components: {
    BlackJackApp,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: Tahoma, sans-serif;
  font-weight: 900;
  color: white;
}
* {
  box-sizing: border-box;
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
