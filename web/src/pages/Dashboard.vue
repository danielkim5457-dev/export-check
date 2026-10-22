<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useReviewStore } from '../stores/review'
const store = useReviewStore()
onMounted(() => store.loadProducts())
const count = computed(() => store.products.length)
</script>

<template>
  <h1>오늘 확인할 품목</h1>
  <div class="card">진행 중인 품목 {{ count }}개</div>
</template>
