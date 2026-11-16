<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const daftarProduk = ref([
  { id: 1, nama: 'Laptop', harga: 8000000, emoji: '💻' },
  { id: 2, nama: 'Headphone', harga: 350000, emoji: '🎧' },
  { id: 3, nama: 'Keyboard', harga: 450000, emoji: '⌨️' },
])
</script>

<template>
  <div>
    <h2>Katalog Produk</h2>

    <div class="grid">
      <ProductCard
        v-for="p in daftarProduk"
        :key="p.id"
        :produk="p"
      />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>