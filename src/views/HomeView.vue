<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <div class="main">
      <RouterLink to="testfirt">Navegar para o Primeiro Teste</RouterLink>
      <RouterLink to="testSec">Navegar para o Segundo Teste</RouterLink>
    </div>
  </main>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 800px;
  align-items: center;
  justify-content: center;
}
a {
  justify-self: center;
  font-size: xx-large;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 20px;
}
</style>
