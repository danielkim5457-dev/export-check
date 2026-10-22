import { PRODUCTS, RULES } from './sample-data'

export type Status = 'met' | 'missing' | 'check'
export type Country = 'US' | 'EU' | 'JP' | 'CN' | 'IN'
export const COUNTRIES: Country[] = ['US', 'EU', 'JP', 'CN', 'IN']

export interface Product {
  id: string
  name: string
  materials: string[]
  power: string | null
  food_contact: boolean
  hs_code: string | null
}

export interface ReviewItem {
  id: string
  title: string
  category: string
  basis: string
  url?: string
  document?: string
  status: Status
}

export interface Review {
  score: number
  grade: string
  items: ReviewItem[]
  notes: string[]
}

type Rule = {
  id: string
  title: string
  category: string
  basis: string
  url?: string
  document?: string
  when?: { food_contact?: boolean; battery?: boolean; hs_prefix?: readonly string[] }
  needs_review?: boolean
}

const WEIGHTS: Record<string, number> = { certification: 30, document: 25, chemical: 20, labeling: 15 }
const GRADES: [number, string][] = [[85, '출하 가능'], [70, '조건부'], [55, '보완 필요'], [0, '재검토']]

export const products = (): Product[] => PRODUCTS as Product[]

const HS: [string, string, string[]][] = [
  ['8509.40', '식품 분쇄기 · 믹서', ['블렌더', '믹서', '착즙', '그라인더', '거품기']],
  ['8509.80', '기타 가정용 전기기기', ['칫솔', '가습기']],
  ['8516.79', '기타 전열기기', ['포트', '히터']],
  ['8423.10', '체중계 · 가정용 저울', ['체중계', '저울']],
  ['8504.40', '정지형 변환기 · 충전기', ['충전', '어댑터']],
  ['9405.21', '전기식 탁상 조명', ['무드등', '램프', '수면등', 'LED']],
]

export function suggestHs(p: Product): { code: string; label: string; confidence: number }[] {
  const scored = HS.map(([code, label, keys]) => ({ code, label, hit: keys.filter((k) => p.name.includes(k)).length }))
  scored.sort((a, b) => b.hit - a.hit)
  const top = scored.slice(0, 3)
  const total = top.reduce((s, x) => s + x.hit, 0) || 1
  return top.map((x, i) => ({ code: x.code, label: x.label, confidence: total ? Math.round((x.hit / total) * 100) || (i === 0 ? 100 : 0) : 0 }))
}

function applies(r: Rule, p: Product): boolean {
  const w = r.when ?? {}
  if (w.food_contact && !p.food_contact) return false
  if (w.battery && !(p.power ?? '').includes('리튬')) return false
  if (w.hs_prefix && !w.hs_prefix.some((h) => (p.hs_code ?? '').startsWith(h))) return false
  return true
}

export function review(p: Product, country: Country, uploaded: Set<string>): Review {
  const items: ReviewItem[] = (RULES[country] as readonly Rule[])
    .filter((r) => applies(r, p))
    .map((r) => ({
      ...r,
      status: r.document && uploaded.has(r.document) ? 'met' : r.needs_review ? 'check' : 'missing',
    }))
  let sum = 0
  let wsum = 0
  for (const [cat, w] of Object.entries(WEIGHTS)) {
    const xs = items.filter((i) => i.category === cat)
    if (!xs.length) continue
    sum += (100 * xs.filter((i) => i.status === 'met').length / xs.length) * w
    wsum += w
  }
  const score = wsum ? Math.round(sum / wsum) : 0
  const grade = GRADES.find(([cut]) => score >= cut)?.[1] ?? '재검토'
  const notes: string[] = []
  const cert = items.filter((i) => i.category === 'certification' && i.status !== 'met')
  if (cert.length) notes.push(`필수 인증이 부족해 통관이 보류될 수 있습니다. (근거: ${cert.map((i) => i.title).join(', ')})`)
  if (score < 55) notes.push('요건 대부분이 미충족 상태입니다. 국가별 체크리스트부터 확인하세요.')
  if (score >= 85) notes.push('필요 요건이 대부분 준비되어 승인 요청이 가능합니다.')
  notes.push('참고용 리포트이며 통관을 보장하지 않습니다.')
  return { score, grade, items, notes }
}
