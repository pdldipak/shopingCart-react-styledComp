import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Wrapper,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
  OverlayWrapper,
  PlusIcon,
  Button,
} from './Products.styles.js'
const Products = ({ product, addToCart }) => {
  const [isHover, setHover] = useState(false)
  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => setHover(false)
  return (
    <Wrapper
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {isHover && (
        <OverlayWrapper>
          <PlusIcon onClick={() => addToCart(product)} />
          <Link to={`/product/${product.id}`}>
            <Button>Detail</Button>
          </Link>
        </OverlayWrapper>
      )}
      <Card>
        <CardImage src={product.image} alt={product.title} />
        <CardBody>
          <CardTitle>{product.category}</CardTitle>
          <CardPrice>${product.price}</CardPrice>
        </CardBody>
      </Card>
    </Wrapper>
  )
}

export default Products
