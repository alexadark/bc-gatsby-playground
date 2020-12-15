import React, { useContext } from "react"
import CartContext from "../../context/CartProvider"

const AddToCartButton = ({ children, productId, variantId }) => {
  const value = useContext(CartContext)
  const addToCart = value && value.addToCart
  const addingToCart = value && value.state.addingToCart

  return (
    <button
      className="bc-btn bc-btn--form-submit bc-btn--add_to_cart"
      type="submit"
      disabled={addingToCart === productId}
      onClick={() => addToCart(productId, variantId)}
    >
      {addingToCart === productId ? "Adding to Cart" : children}
    </button>
  )
}

export default AddToCartButton
