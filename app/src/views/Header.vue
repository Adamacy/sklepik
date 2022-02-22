<template>
    <header>
        <div class="container">
            <div class="row row-cols-4">
                <div id="logo" class="col">Sklepik.edu</div>
                <router-link to="/"><div class="col">Strona Główna</div></router-link>
                <router-link to="/offer"><div class="col">Oferta</div></router-link>
                <router-link to="/contact"><div class="col">Kontakt</div></router-link>
            </div>
        </div>
    </header>

</template>

<script>
export default {
  name: 'HeaderVue'
}
</script>
<style>
@import '~bootstrap/dist/css/bootstrap.css';
header{
    width:100%;
    height:6vh;
    background-color: #a900ff;
    font-size: x-large;
}
.col{
    text-align: center;
    width:200px;
    margin-left: 80px;
}
a, #logo{
    color:white;
    text-decoration: none;
}
a:hover{
    color: orange;
    transition: 0.5s;
}
</style>