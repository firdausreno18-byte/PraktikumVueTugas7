import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // Data: isi keranjang
  const items = ref([])

  // Fungsi: tambah produk ke keranjang
  function tambahKeKeranjang(produk) {
    items.value.push({ ...produk })
  }

  // Computed: jumlah item di keranjang
  const totalItem = computed(() => items.value.length)

  return { items, tambahKeKeranjang, totalItem }
})