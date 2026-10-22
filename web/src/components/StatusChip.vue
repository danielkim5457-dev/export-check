<script setup lang="ts">
import type { Status } from '../api'
const props = defineProps<{ status: Status }>()
const label: Record<Status, string> = { met: '충족', missing: '보완 필요', check: '확인 필요' }
</script>

<template>
  <span class="chip" :class="props.status">{{ label[props.status] }}</span>
</template>
