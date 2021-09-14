<template>
  <div class="main">
    <img src="../assets/kogut2.png" alt="kogut z barcelos"  title="kogut z barcelos" width="200" />
    <img alt="flaga Portugalii" src="../assets/flag.png" width="380"  />
    <img src="../assets/kogut.png" alt="kogut z barcelos"  title="kogut z barcelos" width="200" />
        <h1>Kuchnia Portugalska</h1>
    <div class="container">
      <p>Kuchnia portugalska jest wyjątkowo zróżnicowana. Wiele dań ma regionalne odmiany. Swoimi popisowymi daniami mogą pochwalić się poszczególne miasta, takie jak Lizbona czy Porto. W rolniczych prowincjach (Alentejo i Ribatejo) często sięga się po mięso wołowe. Z kolei w regionie Algarve widoczne są wpływy kuchni muzułmańskich Maurów. Kuchnia całego Półwyspu Iberyjskiego słynie jednak przede wszystkim z dań rybnych, jak i owoców morza. <br> <br> Typowo portugalską rybą jest dorsz – <b> bacalhau</b>, którego mieszkańcy tego kraju są w stanie przygotować na nieskończenie wiele sposobów. W tej kuchni pojawia się też wcale nie dużo mniej bardzo oryginalnych dań mięsnych. Większość potraw jest gotowana, ewentualnie duszona, ryby się grilluje. Mało jest natomiast dań smażonych. Nie brakuje kilku bomb kalorycznych. Portugalczycy mają swoje regionalne fast foody. <br> <br> Bezkonkurencyjne są natomiast portugalskie desery, które bazują głównie na żółtkach z cukrem i dodatkach w postaci migdałów, pomarańczy, cynamonu.</p>
      <img src="../assets/mapa.png" alt="mapa fizyczna Portugalii" title="mapa fizyczna Portugalii" >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    
  },
};
</script>

<style>
h1 {
  color: black;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding-bottom: 0;
}

img {
  padding-left: 10px;
  padding-right: 10px;
}

.container {
  padding: 10px;
  background-color: rgb(175, 248, 248);
  color: black;
  border-radius: 20px;
  margin: 20px;
  opacity: 10;
  text-align: justify;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif  ;
  /* font-size: 25px; */
  display: flex;
}

.container img {
  height: 500px;
  padding-left: 150px;
}

.main {
  height: 800px;
  padding: 5px
}
</style>
