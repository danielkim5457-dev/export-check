<script setup lang="ts">
import { computed } from 'vue'
import StatusChip from '../components/StatusChip.vue'
import type { Country } from '../api'
import { useReviewStore } from '../stores/review'
const props = defineProps<{ pid: string; country: string }>()
const s = useReviewStore()
const c = computed(() => props.country as Country)
const p = computed(() => s.products.find((x) => x.id === props.pid)!)
const r = computed(() => s.review(props.pid, c.value))
const docs = computed(() => s.docs(props.pid, c.value))
</script>

<template>
  <RouterLink to="/matrix">← 요건 표</RouterLink>
  <h1 style="margin-top: 12px">{{ p.name }} · {{ c }}</h1>
  <div class="sub">서류 칸을 체크하면(업로드한 셈) 준비도 점수가 바로 바뀝니다</div>
  <div style="display: grid; grid-template-columns: 1fr 300px; gap: 16px">
    <div class="card">
      <table>
        <tr><th>요건</th><th>근거 규정</th><th>서류</th><th>상태</th></tr>
        <tr v-for="i in r.items" :key="i.id">
          <td><b>{{ i.title }}</b></td>
          <td><a v-if="i.url" :href="i.url" target="_blank" rel="noopener">{{ i.basis }}</a></td>
          <td>
            <label v-if="i.document" style="font-size: 13px; color: var(--muted)">
              <input type="checkbox" :checked="docs.has(i.document)" @change="s.toggle(props.pid, c, i.document!)" />
              {{ i.document }}
            </label>
            <span v-else style="color: var(--faint); font-size: 13px">담당자 확인</span>
          </td>
          <td><StatusChip :status="i.status" /></td>
        </tr>
      </table>
    </div>
    <div class="card">
      <div class="sub" style="margin: 0">준비도</div>
      <div style="font-size: 56px; font-weight: 900">{{ r.score }}</div>
      <div style="font-weight: 700; margin-bottom: 14px">{{ r.grade }}</div>
      <div style="height: 8px; background: var(--bg); border-radius: 4px; margin-bottom: 18px">
        <div :style="{ width: r.score + '%', height: '8px', borderRadius: '4px', background: 'linear-gradient(90deg,#5b7cff,#a08cff)' }" />
      </div>
      <p v-for="n in r.notes" :key="n" style="font-size: 13px; color: var(--muted)">{{ n }}</p>
      <RouterLink :to="`/approval/${props.pid}/${c}`"><button class="btn" style="width: 100%">승인 요청</button></RouterLink>
    </div>
  </div>
</template>
