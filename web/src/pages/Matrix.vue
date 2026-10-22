<script setup lang="ts">
import { COUNTRIES } from '../api'
import { useReviewStore } from '../stores/review'
const s = useReviewStore()
const tone = (n: number) => (n >= 85 ? 'met' : n >= 55 ? 'check' : 'missing')
</script>

<template>
  <h1>품목 × 국가 요건 표</h1>
  <div class="sub">칸을 누르면 그 나라의 요건 · 근거 · 할 일이 열립니다</div>
  <div class="card">
    <table>
      <tr><th>품목</th><th v-for="c in COUNTRIES" :key="c" style="text-align: center">{{ c }}</th></tr>
      <tr v-for="p in s.products.slice(0, 8)" :key="p.id">
        <td><b>{{ p.name }}</b><div class="sub" style="margin: 0">HS {{ p.hs_code }}</div></td>
        <td v-for="c in COUNTRIES" :key="c" style="text-align: center">
          <RouterLink :to="`/requirement/${p.id}/${c}`" class="cell" :class="tone(s.review(p.id, c).score)">
            {{ s.review(p.id, c).score }}
          </RouterLink>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.cell { display: inline-block; width: 64px; padding: 12px 0; border-radius: 10px; font-weight: 900; font-size: 18px; }
</style>
