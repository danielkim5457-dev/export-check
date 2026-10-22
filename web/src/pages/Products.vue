<script setup lang="ts">
import { ref } from 'vue'
import { suggestHs } from '../api'
import { useReviewStore } from '../stores/review'
const s = useReviewStore()
const open = ref<string | null>('P001')
</script>

<template>
  <h1>품목</h1>
  <div class="sub">품목을 누르면 HS 코드 후보 3개가 나옵니다 (AI 추천 자리 · 샘플은 키워드 매칭)</div>
  <div class="card">
    <table>
      <tr><th>품목</th><th>소재</th><th>전원</th><th>식품 접촉</th><th>HS 코드</th></tr>
      <template v-for="p in s.products" :key="p.id">
        <tr @click="open = open === p.id ? null : p.id" style="cursor: pointer">
          <td><b>{{ p.name }}</b></td><td>{{ p.materials.join(' · ') }}</td><td>{{ p.power }}</td>
          <td>{{ p.food_contact ? '예' : '-' }}</td><td>{{ p.hs_code }}</td>
        </tr>
        <tr v-if="open === p.id">
          <td colspan="5" style="background: var(--bg)">
            <span v-for="h in suggestHs(p)" :key="h.code" class="chip check" style="margin-right: 8px">
              {{ h.code }} {{ h.label }} · {{ h.confidence }}%
            </span>
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>
