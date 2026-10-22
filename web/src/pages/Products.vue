<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '../api'
import { useReviewStore } from '../stores/review'
const store = useReviewStore()
const hs = ref<Record<string, string>>({})
onMounted(async () => {
  await store.loadProducts()
  for (const p of store.products.slice(0, 5)) hs.value[p.id] = (await api.hs(p.id))[0]?.code ?? '-'
})
</script>

<template>
  <h1>품목</h1>
  <table class="card">
    <tr><th>품목</th><th>소재</th><th>HS 추천</th></tr>
    <tr v-for="p in store.products" :key="p.id">
      <td>{{ p.name }}</td><td>{{ p.materials.join(' · ') }}</td><td>{{ hs[p.id] ?? p.hs_code }}</td>
    </tr>
  </table>
</template>
