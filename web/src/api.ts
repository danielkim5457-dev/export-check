export type Status = 'met' | 'missing' | 'check'

export interface Product {
  id: string
  name: string
  materials: string[]
  power: string | null
  food_contact: boolean
  hs_code: string | null
}

export interface ReviewItem {
  requirement: { id: string; title: string; category: string; basis: string; url: string | null }
  status: Status
}

export interface Review {
  product_id: string
  country: string
  score: number
  grade: string
  items: ReviewItem[]
  notes: string[]
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`/api/v1${path}`)
  if (!res.ok) throw new Error(`${res.status} ${path}`)
  return res.json() as Promise<T>
}

export const api = {
  products: () => get<Product[]>('/products'),
  hs: (pid: string) => get<{ code: string; label: string; confidence: number }[]>(`/products/${pid}/hs`),
  review: (pid: string, country: string) => get<Review>(`/reviews/${pid}/${country}`),
}
