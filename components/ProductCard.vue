<template>
  <a :href="`/product/${product.id}`" class="text-decoration-none">
    <div class="card h-100 shadow-sm animate__animated animate__fadeInUp">
      <img :src="productImage" class="card-img-top" :alt="product.name" loading="lazy" />
      <div class="card-body d-flex flex-column">
        <h3 class="card-title">{{ product.name }}</h3>
        <p class="card-text">{{ product.description }}</p>
        <div class="mt-auto d-flex justify-content-between align-items-center">
          <span class="card-price">EGP {{ product.price.toLocaleString() }}</span>
          <button class="btn btn-add whatsapp-order" type="button" @click.stop="orderOnWhatsApp">
            <i class="bi bi-whatsapp"></i> اطلب الآن
          </button>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Product } from '~/composables/useProducts';
import { computed } from 'vue';

const props = defineProps<{ product: Product }>();

const productImage = computed(() => {
  // If the image path starts with './assets/', use the public path
  if (props.product.image.startsWith('./assets/')) {
    return '/' + props.product.image.replace('./assets/', '');
  }
  return props.product.image;
});

function orderOnWhatsApp() {
  const message = `مرحباً، أرغب في طلب المنتج التالي:\n\n*${props.product.name}*\n\nالسعر: ${props.product.price} جنيه\n\nالوصف: ${props.product.description}`;
  const whatsappUrl = `https://wa.me/20123456789?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}
</script> 