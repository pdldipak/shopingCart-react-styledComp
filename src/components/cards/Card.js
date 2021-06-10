import React, { useRef } from 'react'
import { useOnClickOutside } from '../customHooks/useOnClickOutside'
import { CardTitle } from '../products/Products.styles'
import {
  CartCount,
  CartSideBar,
  ShopingCartIcon,
  Wrapper,
  EmptyCart,
  SideBarHeader,
  CardContainer,
  CardImage,
  CardBody,
  CardRemove,
  CardRow,
  CardAdd,
  ClearButton,
  TotalPrice,
} from './Card.styles'

const Card = ({
  isToggle,
  setToggle,
  cartItems,
  addToCart,
  onRemovefromCart,
  setCartItems,
}) => {
  const sideBarRef = useRef()
  useOnClickOutside(sideBarRef, () => setToggle(false))

  const itemsPrice = cartItems
    .reduce((a, c) => a + c.qty * c.price, 0)
    .toFixed(2)

  return (
    <div>
      <Wrapper onClick={() => setToggle(true)}>
        <ShopingCartIcon />
        <CartCount>1</CartCount>
      </Wrapper>
      <CartSideBar className={isToggle ? 'expand' : 'shrink'} ref={sideBarRef}>
        <SideBarHeader>shopping cart</SideBarHeader>

        {cartItems.length === 0 ? (
          <EmptyCart>
            <h2>Cart is empty</h2>
          </EmptyCart>
        ) : (
          cartItems.map((item) => (
            <CardContainer key={item.id}>
              <CardImage src={item.image} alt={item.title} />
              <CardBody>
                <CardRow>
                  <CardAdd onClick={() => addToCart(item)} />
                </CardRow>
                <CardRow>
                  <CardRemove onClick={() => onRemovefromCart(item)} />
                </CardRow>
                <CardRow>
                  <CardTitle>
                    {item.qty} x Kr{item.price.toFixed(2)}
                  </CardTitle>{' '}
                  <CardTitle>Kr{(item.qty * item.price).toFixed(2)}</CardTitle>
                </CardRow>
              </CardBody>
            </CardContainer>
          ))
        )}
        <TotalPrice>Total price:Kr{itemsPrice} </TotalPrice>
        <ClearButton onClick={() => setCartItems([])}>Remove all</ClearButton>
      </CartSideBar>
    </div>
  )
}

export default Card
