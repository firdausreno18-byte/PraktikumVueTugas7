<script setup>
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
</script>

<template>
  <div>
    <h2>Keranjang Belanja</h2>

    <p v-if="cart.items.length === 0">Keranjang masih kosong.</p>

    <ul>
      <li v-for="(item, index) in cart.items" :key="index">
        {{ item.emoji }} {{ item.nama }} - Rp {{ item.harga.toLocaleString('id-ID') }}
      </li>
    </ul>

    <p>Total item: <strong>{{ cart.totalItem }}</strong></p>
  </div>
</template>
