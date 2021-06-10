import styled from 'styled-components'
import { BsPlusCircleFill } from 'react-icons/bs'

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
`

export const CardBody = styled.div`
  padding: 15px;
  margin-top: 25px;
`

export const CardImage = styled.img`
  height: 200px;
  width: 120px;
`

export const CardTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin: 2px;
`

export const CardPrice = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin: 2px;
  background: #bee5d3;
  padding: 3px 5px;
`

export const OverlayWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all ease-in-out 0.3s;
  z-index: 100;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PlusIcon = styled(BsPlusCircleFill)`
  border-radius: 50%;
  font-size: 65px;
  color: #ffffff;
  & {
    :hover {
      background: rgb(57, 152, 118);
    }
  }
`

export const Button = styled.button`
  display: block;
  text-align: center;
  position: absolute;
  font-size: 24px;
  font-weight: 500;
  width: 100%;
  border: 2px solid gray;
  border-radius: 0;
  height: 40px;
  margin: 0 auto;
  bottom: 0;
  right: 0;
  left: 0;
  cursor: pointer;
  & {
    :hover {
      background: rgb(57, 152, 118);
      background: linear-gradient(
        90deg,
        rgba(57, 152, 118, 1) 0%,
        rgba(42, 204, 164, 1) 35%,
        rgba(9, 205, 177, 1) 100%
      );
      color: white;
    }
  }
`
