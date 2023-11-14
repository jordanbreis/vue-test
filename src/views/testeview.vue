<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <div class="teste1">
      <h2>Primeiro Teste</h2>
      <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
    </div>
  </main>
</template>

<style>
.teste1 {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 800px;
  align-items: center;
  justify-content: center;
}
img {
  width: 400px;
  height: 400px;
  object-fit: contain;
}
</style>
