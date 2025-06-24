<template>
  <section class="container my-5">
    <h2 class="text-center mb-4" style="color: #e0b973">
      أفضل العطور الرجالى
    </h2>
    <div class="row g-4 justify-content-center">
      <template v-if="pending">
        <div class="col-12 text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">جار التحميل...</span>
          </div>
        </div>
      </template>
      <template v-else>
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="col-12 col-sm-6 col-lg-3"
        />
        <div v-if="!products.length" class="col-12 text-center py-5">
          <p class="text-muted">لا توجد منتجات متاحة حالياً</p>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProducts } from '~/composables/useProducts';
import ProductCard from '~/components/ProductCard.vue';
import { useHead } from '#app';

const { products, pending } = useProducts({ category: 'man' });

useHead({
  title: 'أفضل العطور الرجالى | Güzel',
  meta: [
    { name: 'description', content: 'أفضل العطور الرجالى من متجر Güzel. اكتشف تشكيلتنا المختارة من العطور الرجالية الفاخرة.' },
  ],
});
</script> 