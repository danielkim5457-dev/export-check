<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Country } from '../api'
import { useReviewStore } from '../stores/review'
const props = defineProps<{ pid: string; country: string }>()
const s = useReviewStore()
const comment = ref('')
const done = ref(false)
const r = computed(() => s.review(props.pid, props.country as Country))
function approve() {
  s.approve(props.pid, props.country as Country, comment.value)
  done.value = true
}
</script>

<template>
  <RouterLink :to="`/requirement/${props.pid}/${props.country}`">← 요건</RouterLink>
  <h1 style="margin-top: 12px">출하 전 승인 · {{ props.pid }} · {{ props.country }}</h1>
  <div class="sub">준비도 {{ r.score }}점 ({{ r.grade }})</div>
  <div class="card" style="max-width: 640px">
    <div v-if="done" style="color: var(--ok); font-weight: 700">승인했어요. 활동 기록에 남았습니다.</div>
    <template v-else>
      <textarea v-model="comment" rows="3" placeholder="승인 의견" style="width: 100%; border: 1px solid var(--line); border-radius: 10px; padding: 12px; font: inherit" />
      <div style="display: flex; gap: 8px; margin-top: 12px">
        <RouterLink to="/matrix"><button class="btn ghost">취소</button></RouterLink>
        <button class="btn" @click="approve">승인하기</button>
      </div>
    </template>
  </div>
</template>
