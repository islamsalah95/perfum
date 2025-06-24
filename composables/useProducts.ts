import { useFetch } from '#app';

const FIREBASE_URL = 'https://guzel-1f032-default-rtdb.firebaseio.com/products.json';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  category: string;
  meta_desc: string;
  best_seller: boolean;
}

interface Filter {
  best_seller?: boolean;
  category?: string;
}

export function useProducts(filter: Filter = {}) {
  const { data, pending, error, refresh } = useFetch<Record<string, Product>>(FIREBASE_URL);

  const products = computed(() => {
    if (!data.value) return [];
    return Object.entries(data.value)
      .map(([key, product]) => ({ ...product, id: key }))
      .filter(product => {
        if (filter.best_seller !== undefined && product.best_seller !== filter.best_seller) return false;
        if (filter.category && product.category !== filter.category) return false;
        return true;
      });
  });

  return { products, pending, error, refresh };
} 