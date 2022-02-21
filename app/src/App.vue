<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col" id="logo">sklepik.pl</div>
        <router-link to="/main"> <div class="col">Strona Główna</div></router-link>
        <router-link to="/offer"><div class="col">Oferta</div></router-link>
        <router-link to="/contact"><div class="col">Kontakt</div></router-link>
      </div>
    </div>
  </header>
    
  <main>
    Witaj na naszej stronie....
  </main>

</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import 'C:/Users/Adam/Documents/zadania/sklepik/app/node_modules/bootstrap/dist/css/bootstrap.css';
header{
  float:left;
  width:100%;
  height:100px;
  background-color: #812b81;
  color:white;
  font-size: x-large;
}
#logo{
 float: left;
 margin-right: 600px;
}
</style>