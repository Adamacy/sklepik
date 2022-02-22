<script setup>
import HeaderVue from './Header.vue'
</script>
<template>

<HeaderVue/>
    <section>

        <h1 class="welcome">Witaj na stronie naszego sklepu</h1>

    </section>
</template>

<style>
    section{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 800px;
    }
    .welcome {
        background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%)

    }

</style>