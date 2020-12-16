import React from "react"
import Layout from "../components/layout"
import Cart from "../components/bigcommerce/Cart"

const CartPage = () => {
  return (
    <Layout>
      <h1>Your Cart</h1>
      <Cart cartType="full" />
    </Layout>
  )
}

export default CartPage
