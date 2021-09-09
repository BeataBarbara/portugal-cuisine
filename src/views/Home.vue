<template>
  <div class="home">
    <img alt="flaga Portugalii" src="../assets/flag.png" />
    <Intro msg="Welcome to Your Vue.js App" />
        <h1>Kuchnia Portugalska</h1>
    <div class="container">
      <p>Kuchnia portugalska jest wyjątkowo zróżnicowana. Wiele dań ma regionalne odmiany. Swoimi popisowymi daniami mogą pochwalić się poszczególne miasta, takie jak Lizbona czy Porto. W rolniczych prowincjach (Alentejo i Ribatejo) często sięga się po mięso wołowe. Z kolei w regionie Algarve widoczne są wpływy kuchni muzułmańskich Maurów. Kuchnia całego Półwyspu Iberyjskiego słynie jednak przede wszystkim z dań rybnych, jak i owoców morza. <br> <br> Typowo portugalską rybą jest dorsz – <b> bacalhau</b>, którego mieszkańcy tego kraju są w stanie przygotować na nieskończenie wiele sposobów. W tej kuchni pojawia się też wcale nie dużo mniej bardzo oryginalnych dań mięsnych. Większość potraw jest gotowana, ewentualnie duszona, ryby się grilluje. Mało jest natomiast dań smażonych. Nie brakuje kilku bomb kalorycznych. Portugalczycy mają swoje regionalne fast foody. <br> <br> Bezkonkurencyjne są natomiast portugalskie desery, które bazują głównie na żółtkach z cukrem i dodatkach w postaci migdałów, pomarańczy, cynamonu.</p>
    </div>
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
h1 {
  color: black
}

img {
  width: 20%
}

.container {
  padding: 20px;
  background-color: aquamarine;
  color: black;
  border-radius: 20px;
  margin: 30px;
  opacity: 10;
  text-align: justify;
}

.home {
  background-image: url(../assets/azulejos7.png);
  height: 700px;
}
</style>
