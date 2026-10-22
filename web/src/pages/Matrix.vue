<script setup lang="ts">
import { onMounted } from 'vue'
import { COUNTRIES, useReviewStore } from '../stores/review'
const store = useReviewStore()
onMounted(async () => {
  await store.loadProducts()
  for (const p of store.products.slice(0, 5)) for (const c of COUNTRIES) await store.loadReview(p.id, c)
})
</script>

<template>
  <h1>품목 × 국가 요건</h1>
  <table class="card">
    <tr><th>품목</th><th v-for="c in COUNTRIES" :key="c">{{ c }}</th></tr>
    <tr v-for="p in store.products.slice(0, 5)" :key="p.id">
      <td>{{ p.name }}</td>
      <td v-for="c in COUNTRIES" :key="c">
        <RouterLink :to="`/requirement/${p.id}/${c}`">{{ store.reviews[`${p.id}:${c}`]?.score ?? '…' }}</RouterLink>
      </td>
    </tr>
  </table>
</template>
