import { graphql } from "gatsby"

export const fragments = graphql`
  fragment BCProduct on BigCommerceProducts {
    id
    brand_id
    name
    description
    sku
    price
    calculated_price
    retail_price
    sale_price
    map_price
    bigcommerce_id
    weight
    custom_url {
      url
    }
    images {
      url_thumbnail
      url_standard
    }
    variants {
      product_id
      id
      option_values {
        label
        option_display_name
      }
    }
  }
`
