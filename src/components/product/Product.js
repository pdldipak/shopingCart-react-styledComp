import React from 'react'
import { useParams } from 'react-router'
import { LoadingSpinner } from '../../App.styles'
import useFetch from '../customHooks/useFetch'

import {
  AddProductButton,
  ProductContainer,
  ProductDescription,
  ProductDetails,
  ProductImage,
  ProductTitle,
  Price,
} from './Product.styles'

const Product = ({ addToCart }) => {
  const { id } = useParams()
  const {
    products: item,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products/' + id)
  return (
    <ProductContainer>
      {loading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      {!loading && item && (
        <ProductDetails>
          <ProductImage src={item.image} alt={item.id}></ProductImage>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductDescription>{item.description}</ProductDescription>

          <Price>Kr{item.price}</Price>
          <AddProductButton onClick={() => addToCart(item)}>
            Add To Cart
          </AddProductButton>
        </ProductDetails>
      )}
    </ProductContainer>
  )
}

export default Product
