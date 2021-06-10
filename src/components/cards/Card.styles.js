import styled from 'styled-components'
import { GiShoppingCart } from 'react-icons/gi'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export const Wrapper = styled.div`
  display: block;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
`

export const ShopingCartIcon = styled(GiShoppingCart)`
  padding: 5px;
  width: 30px;
  height: 30px;
  color: #ffffff;
`

export const CartCount = styled.span`
  position: absolute;
  bottom: -5px;
  right: -5px;
  padding: 4px 9px;
  border-radius: 50px;
  background: #f05454;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
`

export const CartSideBar = styled.div`
  z-index: 1000;
  width: 350px;
  background: #ffffff;
  top: 0;
  right: 0;
  padding: 25px;
  position: fixed;
  overflow: auto;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all ease-in-out 0.3s;
  &.expand {
    transition: all ease-in-out 0.3s;
    right: 0;
  }
  &.shrink {
    transition: all ease-in-out 0.3s;
    right: -400px;
  }
`

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & {
    h2 {
      font-size: 24px;
      font-weight: 400;
      color: red;
    }
  }
`
export const SideBarHeader = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
  margin: auto;
  padding: 15px 0;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: #000000;
  }
`

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  margin: 35px 0 75px 0;
`

export const CardImage = styled.img`
  flex: 1;
  height: auto;
  width: auto;
  max-width: 100px;
  max-height: 100px;
`

export const CardBody = styled.div`
  flex: 2;
  margin-left: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const CardTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`

export const CardRemove = styled(AiOutlineMinus)`
  font-size: 24px;
  font-weight: 700;
  color: red;
  cursor: pointer;
`
export const CardAdd = styled(AiOutlinePlus)`
  font-size: 24px;
  font-weight: 700;
  color: green;
  cursor: pointer;
`

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const TotalPrice = styled.h3`
  font-weight: 500;
  text-align: center;
`

export const ClearButton = styled.button`
  width: 100%;
  padding: 18px 24px;
  background: #1a508b;
  color: #ffffff;
  cursor: pointer;
  border: none;
`
