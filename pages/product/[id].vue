<template>
  <div class="container my-5">
    <div v-if="pending" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">جار التحميل...</span>
      </div>
    </div>
    <div v-else-if="product">
      <div class="card p-4 mx-auto" style="max-width: 500px;">
        <img :src="productImage" class="card-img-top mb-3" :alt="product.name" style="max-width:300px;object-fit:contain;margin:auto;" />
        <h1 class="card-title mb-3">{{ product.name }}</h1>
        <p class="card-text">{{ product.description }}</p>
        <div class="mb-2"><strong>السعر:</strong> {{ product.price }} جنيه</div>
        <div class="mb-2"><strong>الفئة:</strong> {{ product.category === 'man' ? 'رجالي' : 'نسائي' }}</div>
        <div v-if="product.best_seller" class="badge bg-success mb-2">الأكثر مبيعًا</div>
        <button class="btn btn-add whatsapp-order w-100 mt-3" type="button" @click="orderOnWhatsApp">
          <i class="bi bi-whatsapp"></i> اطلب الآن
        </button>
      </div>
    </div>
    <div v-else class="alert alert-danger text-center">المنتج غير موجود</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFetch } from '#app'
import { computed } from 'vue'

const route = useRoute()
const id = route.params.id

const { data: products, pending } = useFetch('https://guzel-1f032-default-rtdb.firebaseio.com/products.json')

const product = computed(() => {
  if (!products.value) return null
  // Find by Firebase key or by product.id
  return Object.entries(products.value)
    .map(([key, p]) => ({ ...p, id: key }))
    .find(p => p.id == id)
})

const productImage = computed(() => {
  if (!product.value) return ''
  if (product.value.image && product.value.image.startsWith('./assets/')) {
    return '/' + product.value.image.replace('./assets/', '')
  }
  return product.value.image
})

function orderOnWhatsApp() {
  if (!product.value) return
  const message = `مرحباً، أرغب في طلب المنتج التالي:\n\n*${product.value.name}*\n\nالسعر: ${product.value.price} جنيه\n\nالوصف: ${product.value.description}`
  const whatsappUrl = `https://wa.me/20123456789?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
</script> 