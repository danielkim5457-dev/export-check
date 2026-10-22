<script setup lang="ts">
import type { Status } from '../api'
const props = defineProps<{ status: Status }>()
const label: Record<Status, string> = { met: '충족', missing: '보완 필요', check: '확인 필요' }
</script>

<template>
  <span class="chip" :class="props.status">{{ label[props.status] }}</span>
</template>

<style scoped>
.chip { font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 999px; }
.met { background: #e2f5ec; color: var(--ok); }
.missing { background: #fcf2da; color: var(--warn); }
.check { background: #e9edff; color: #3d5cff; }
</style>
