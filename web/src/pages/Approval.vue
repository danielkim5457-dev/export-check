<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ pid: string; country: string }>()
const comment = ref('')
const log = ref<{ at: string; who: string; action: string }[]>([])
function approve() {
  log.value.unshift({ at: new Date().toLocaleString('ko-KR'), who: '담당자', action: `최종 승인 · ${comment.value}` })
  comment.value = ''
}
</script>

<template>
  <h1>승인 · {{ props.pid }} · {{ props.country }}</h1>
  <div class="card">
    <textarea v-model="comment" placeholder="승인 의견" rows="3" style="width: 100%" />
    <button @click="approve">승인하기</button>
    <table><tr v-for="l in log" :key="l.at"><td>{{ l.at }}</td><td>{{ l.who }}</td><td>{{ l.action }}</td></tr></table>
  </div>
</template>
