import React, { useState } from "react"
import { graphql } from "gatsby"
import AddToCartButton from "../../components/bigcommerce/AddToCartButton"
import ProductPrices from "../../components/bigcommerce/ProductPrices"

import Layout from "../../components/layout"

const PoductPage = ({ data }) => {
  const product = data.bigCommerceProducts
  const {
    name,
    description,
    price,
    calculated_price,
    retail_price,
    sale_price,
    map_price,
    bigcommerce_id,
    images,
    sku,
    variants,
    weight,
  } = product
  const [selectedImage, updateSelectedImage] = useState(
    images.length && images[0].url_standard
  )
  return (
    <Layout>
      <h1>{name}</h1>
      <div className="bc-product__gallery">
        <img
          src={
            (selectedImage && selectedImage) || "/img/default-bc-product.png"
          }
          alt="Main"
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            justifyContent: "center",
          }}
        >
          {images.length &&
            images.map(img => (
              <img
                height="100px"
                width="100px"
                src={img.url_thumbnail}
                alt="Thumb"
                key={JSON.stringify(img)}
                onClick={() => updateSelectedImage(img.url_standard)}
              />
            ))}
        </div>
      </div>
      <ProductPrices product={product} />
      <span className="bc-product__sku">
        <span className="bc-product-single__meta-label">SKU:</span> {sku}
      </span>

      <AddToCartButton productId={bigcommerce_id} variantId={variants[0].id}>
        Add to Cart
      </AddToCartButton>

      <h4 className="bc-single-product__section-title">Product Description</h4>
      <div
        className="bc-product__description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <section className="bc-single-product__specifications">
        <h4 className="bc-single-product__section-title">Specifications</h4>
        <ul className="bc-product__spec-list">
          <li className="bc-product__spec">
            <span className="bc-product__spec-title">Weight:</span>{" "}
            <span className="bc-product__spec-value">{weight} oz</span>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default PoductPage

export const pageQuery = graphql`
  query($id: String) {
    bigCommerceProducts(id: { eq: $id }) {
      ...BCProduct
    }
  }
`
