<script setup lang="ts">
import { computed } from 'vue'
import StatusChip from '../components/StatusChip.vue'
import { COUNTRIES } from '../api'
import { useReviewStore } from '../stores/review'
const s = useReviewStore()
const rows = computed(() =>
  s.products.slice(0, 5).flatMap((p) => COUNTRIES.slice(0, 2).map((c) => ({ p, c, r: s.review(p.id, c) }))),
)
const kpi = computed(() => ({
  ing: rows.value.filter((x) => x.r.score < 85).length,
  fix: rows.value.filter((x) => x.r.items.some((i) => i.status === 'missing')).length,
  done: rows.value.filter((x) => x.r.score >= 85).length,
}))
</script>

<template>
  <h1>정하린 님, 오늘 확인할 품목이에요</h1>
  <div class="sub">샘플 품목 {{ s.products.length }}개 · 5개국</div>
  <div class="grid4">
    <div class="kpi"><span>검토 중</span><b style="color: var(--acc)">{{ kpi.ing }}</b></div>
    <div class="kpi"><span>보완 필요</span><b style="color: var(--warn)">{{ kpi.fix }}</b></div>
    <div class="kpi"><span>이번 주 마감</span><b style="color: var(--bad)">3</b></div>
    <div class="kpi"><span>출하 가능</span><b style="color: var(--ok)">{{ kpi.done }}</b></div>
  </div>
  <div class="card">
    <table>
      <tr><th>품목</th><th>HS 코드</th><th>수출국</th><th>준비도</th><th>상태</th></tr>
      <tr v-for="x in rows" :key="x.p.id + x.c">
        <td><RouterLink :to="`/requirement/${x.p.id}/${x.c}`">{{ x.p.name }}</RouterLink></td>
        <td>{{ x.p.hs_code }}</td>
        <td>{{ x.c }}</td>
        <td><b>{{ x.r.score }}</b> · {{ x.r.grade }}</td>
        <td><StatusChip :status="x.r.score >= 85 ? 'met' : x.r.score >= 55 ? 'check' : 'missing'" /></td>
      </tr>
    </table>
  </div>
</template>
