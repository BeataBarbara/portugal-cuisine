<template>
  <div class="home">
    <img alt="flaga Portugalii" src="../assets/flag.png" />
    <Intro msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";

export default {
  name: "Home",
  components: {
    Intro,
  },
};
</script>

<style>
img {
  width: 20%
}
</style>
