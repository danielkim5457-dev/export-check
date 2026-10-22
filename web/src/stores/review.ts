import { defineStore } from 'pinia'
import { api, type Product, type Review } from '../api'

export const COUNTRIES = ['US', 'EU', 'JP', 'CN', 'IN'] as const

export const useReviewStore = defineStore('review', {
  state: () => ({ products: [] as Product[], reviews: {} as Record<string, Review> }),
  actions: {
    async loadProducts() {
      this.products = await api.products()
    },
    async loadReview(pid: string, country: string) {
      this.reviews[`${pid}:${country}`] = await api.review(pid, country)
    },
  },
})
