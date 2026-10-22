<script setup lang="ts">
import { onMounted, computed } from 'vue'
import StatusChip from '../components/StatusChip.vue'
import { useReviewStore } from '../stores/review'
const props = defineProps<{ pid: string; country: string }>()
const store = useReviewStore()
onMounted(() => store.loadReview(props.pid, props.country))
const r = computed(() => store.reviews[`${props.pid}:${props.country}`])
</script>

<template>
  <h1>요건 · {{ props.pid }} · {{ props.country }}</h1>
  <div v-if="r" class="card">
    <p>준비도 {{ r.score }}점 ({{ r.grade }})</p>
    <table>
      <tr v-for="i in r.items" :key="i.requirement.id">
        <td>{{ i.requirement.title }}</td>
        <td><a v-if="i.requirement.url" :href="i.requirement.url" target="_blank" rel="noopener">{{ i.requirement.basis }}</a></td>
        <td><StatusChip :status="i.status" /></td>
      </tr>
    </table>
    <ul><li v-for="n in r.notes" :key="n">{{ n }}</li></ul>
  </div>
</template>
