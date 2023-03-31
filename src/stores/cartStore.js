import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('CartStore', () => {
  const cart = ref({ items: [], total: 0, qty: 0 })
  const addProductToCart = (productData) => {
    const productInCartIndex = cart.value.items.findIndex((ci) => ci.productId === productData.id)

    if (productInCartIndex >= 0) {
      cart.value.items[productInCartIndex].qty++
    } else {
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        qty: 1
      }
      cart.value.items.push(newItem)
    }
    cart.value.qty++
    cart.value.total += productData.price
  }

  const removeProductFromCart = (prodId) => {
    const productInCartIndex = cart.value.items.findIndex(
      (cartItem) => cartItem.productId === prodId
    )
    const prodData = cart.value.items[productInCartIndex]
    cart.value.items.splice(productInCartIndex, 1)
    cart.value.qty -= prodData.qty
    cart.value.total -= prodData.price * prodData.qty
  }

  const cartTotal = computed(() => cart.value.total.toFixed(2))

  return { addProductToCart, removeProductFromCart, cartTotal, cart }
})
