<script setup>
import { useCartStore } from '../stores/cart'

// props: data produk yang dikirim dari halaman induk
const props = defineProps({
  produk: {
    type: Object,
    required: true,
  },
})

const cart = useCartStore()

function beli() {
  cart.tambahKeKeranjang(props.produk)
}
</script>

<template>
  <div class="card">
    <div class="gambar">{{ produk.emoji }}</div>
    <h3>{{ produk.nama }}</h3>
    <p class="harga">Rp {{ produk.harga.toLocaleString('id-ID') }}</p>
    <button @click="beli">Beli</button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}
.gambar {
  font-size: 48px;
}
.harga {
  font-weight: bold;
}
button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>