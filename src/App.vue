<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/maincourses">Dania główne</router-link> |
    <router-link to="/snacks">Przekąski</router-link> |
    <router-link to="/sweets">Słodkości</router-link> |
    <router-link to="/drinks">Napoje</router-link> |  
    <router-link to="/about">O stronie</router-link> |
  </div>
  <router-view />
</template>

<style>

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 22px;
      margin-top: 2px;
      margin-bottom: 2px;
    }

    .main{
      background-image: url(./assets/azulejos7.png);
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif  ;
    }

    img {
      height: 200px;
    }

    p {
        width: 80%;
        text-align: justify;
        font-size: 15px;
    }

    .danie {
        width:75%;
        background-color: rgb(175, 248, 248);
        padding: 5px;
        border-radius: 20px;
        margin: 10px;
        
    }
    .danie:nth-child(even) {
      float: left
    }
    .danie:nth-child(odd) {
      float: right
    }
    .opis-dania {
        display: flex;
    }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background-image: url('./assets/azulejos1.jpg') ;
  font-size: 20px
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 4px;
  border-radius: 5px;
  background-color: aliceblue;
}

#nav a.router-link-exact-active {
  color: rgb(5, 91, 225)
}
</style>
