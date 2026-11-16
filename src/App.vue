<script setup>
import { useCartStore } from './stores/cart'

const cart = useCartStore()
</script>

<template>
  <nav class="menu">
    <RouterLink to="/">Beranda</RouterLink>
    |
    <RouterLink to="/cart">Keranjang ({{ cart.totalItem }})</RouterLink>
  </nav>

  <hr />

  <RouterView />
</template>

<style scoped>
.menu {
  display: flex;
  gap: 12px;
  justify-content: center;
}
</style>