import { defineStore } from 'pinia'
import { products, review, type Country } from '../api'

// 샘플 시작 상태: 일부 서류를 이미 올린 것으로 둔다
const START: Record<string, string[]> = {
  'P001:US': ['fcc_report', 'label_photo', 'un383_report'],
  'P001:EU': ['lvd_report', 'emc_report', 'rohs_report', 'eu_doc'],
  'P002:US': ['fcc_report'],
  'P003:EU': ['lvd_report', 'emc_report', 'rohs_report', 'eu_doc', 'weee_label'],
  'P003:IN': ['bis_crs'],
}

export const useReviewStore = defineStore('review', {
  state: () => ({
    uploaded: Object.fromEntries(Object.entries(START).map(([k, v]) => [k, new Set(v)])) as Record<string, Set<string>>,
    log: [] as { at: string; who: string; action: string; target: string }[],
  }),
  getters: {
    products: () => products(),
  },
  actions: {
    docs(pid: string, c: Country): Set<string> {
      const k = `${pid}:${c}`
      if (!this.uploaded[k]) this.uploaded[k] = new Set()
      return this.uploaded[k]
    },
    review(pid: string, c: Country) {
      const p = products().find((x) => x.id === pid)!
      return review(p, c, this.docs(pid, c))
    },
    toggle(pid: string, c: Country, doc: string) {
      const s = new Set(this.docs(pid, c))
      s.has(doc) ? s.delete(doc) : s.add(doc)
      this.uploaded[`${pid}:${c}`] = s
      this.log.unshift({ at: new Date().toLocaleString('ko-KR'), who: '정하린', action: s.has(doc) ? '서류 업로드' : '서류 삭제', target: `${pid} · ${c} · ${doc}` })
    },
    approve(pid: string, c: Country, comment: string) {
      this.log.unshift({ at: new Date().toLocaleString('ko-KR'), who: '김태오', action: `최종 승인 · ${comment || '의견 없음'}`, target: `${pid} · ${c}` })
    },
  },
})
