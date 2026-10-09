import { Product } from '@/types/product';
import { BASMATI_PRODUCTS } from './productsBasmati';
import { NON_BASMATI_PRODUCTS } from './productsNonBasmati';

export const INITIAL_PRODUCTS: Product[] = [...BASMATI_PRODUCTS, ...NON_BASMATI_PRODUCTS];
