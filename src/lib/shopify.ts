import { createStorefrontApiClient } from '@shopify/storefront-api-client'

export const shopifyClient = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2025-01',
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
})

// Products
export async function getProducts() {
  const query = `
    query GetProducts {
      products(first: 20) {
        edges {
          node {
            id
            title
            handle
            availableForSale
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `
  const { data, errors } = await shopifyClient.request(query)
  if (errors) throw new Error(errors.message)
  return data?.products?.edges?.map((e: any) => e.node) ?? []
}

// Collections
export async function getCollections() {
  const query = `
    query GetCollections {
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
            image {
              url
              altText
            }
          }
        }
      }
    }
  `
  const { data, errors } = await shopifyClient.request(query)
  if (errors) throw new Error(errors.message)
  return data?.collections?.edges?.map((e: any) => e.node) ?? []
}

// Cart
export async function createCart() {
  const mutation = `
    mutation CartCreate {
      cartCreate {
        cart {
          id
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    priceV2 {
                      amount
                      currencyCode
                    }
                    product {
                      title
                      images(first: 1) {
                        edges {
                          node {
                            url
                            altText
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  const { data, errors } = await shopifyClient.request(mutation)
  if (errors) throw new Error(errors.message)
  return data?.cartCreate?.cart
}

export async function addToCart(cartId: string, merchandiseId: string, quantity = 1) {
  const mutation = `
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          totalQuantity
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    priceV2 {
                      amount
                      currencyCode
                    }
                    product {
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  const { data, errors } = await shopifyClient.request(mutation, {
    variables: { cartId, lines: [{ merchandiseId, quantity }] },
  })
  if (errors) throw new Error(errors.message)
  return data?.cartLinesAdd?.cart
}
