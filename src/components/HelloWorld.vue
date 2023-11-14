<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="main">
    <RouterLink to="teste1">Navegar para o Primeiro Teste</RouterLink>
    <RouterLink to="teste2">Navegar para o Segundo Teste</RouterLink>
  </div>
</template>

<style scoped>
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
