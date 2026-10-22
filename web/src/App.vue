<template>
  <div class="shell">
    <aside>
      <div class="logo">✓</div>
      <RouterLink to="/">오늘</RouterLink>
      <RouterLink to="/products">품목</RouterLink>
      <RouterLink to="/matrix">요건 표</RouterLink>
      <RouterLink to="/log">활동 기록</RouterLink>
      <small>샘플 데이터 · 로컬</small>
    </aside>
    <main><RouterView /></main>
  </div>
</template>

<style scoped>
.shell { display: grid; grid-template-columns: 180px 1fr; min-height: 100vh; }
aside { background: var(--side); display: flex; flex-direction: column; gap: 4px; padding: 20px 14px; }
aside a { color: #a7aebb; padding: 9px 12px; border-radius: 8px; font-size: 14px; font-weight: 600; }
aside a.router-link-exact-active { background: #1d2330; color: #fff; }
.logo { width: 32px; height: 32px; border-radius: 9px; background: linear-gradient(135deg, #5b7cff, #a08cff); color: #fff; display: grid; place-items: center; font-weight: 900; margin: 0 0 18px 8px; }
small { margin-top: auto; color: #6b7384; font-size: 11px; padding-left: 12px; }
main { padding: 32px 40px; max-width: 1280px; }
</style>
