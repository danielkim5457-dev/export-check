<script setup lang="ts">
import { useReviewStore } from '../stores/review'
const s = useReviewStore()
</script>

<template>
  <h1>활동 기록</h1>
  <div class="sub">이 화면에서 한 업로드 · 승인이 순서대로 남습니다 (새로고침하면 초기화)</div>
  <div class="card">
    <p v-if="!s.log.length" style="color: var(--faint)">아직 기록이 없어요. 요건 화면에서 서류를 체크하거나 승인해 보세요.</p>
    <table v-else>
      <tr><th>시각</th><th>담당자</th><th>작업</th><th>대상</th></tr>
      <tr v-for="(l, i) in s.log" :key="i"><td>{{ l.at }}</td><td>{{ l.who }}</td><td>{{ l.action }}</td><td>{{ l.target }}</td></tr>
    </table>
  </div>
</template>
