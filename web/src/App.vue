<template>
  <div class="shell">
    <nav>
      <RouterLink to="/">오늘</RouterLink>
      <RouterLink to="/products">품목</RouterLink>
      <RouterLink to="/matrix">요건 표</RouterLink>
    </nav>
    <main><RouterView /></main>
  </div>
</template>

<style scoped>
.shell { display: grid; grid-template-columns: 180px 1fr; min-height: 100vh; }
nav { display: flex; flex-direction: column; gap: 12px; padding: 24px; border-right: 1px solid var(--line); }
main { padding: 32px; }
</style>
