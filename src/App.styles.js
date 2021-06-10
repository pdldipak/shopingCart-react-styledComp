import styled from 'styled-components'
import { AiFillHome } from 'react-icons/ai'

export const NavBar = styled.div`
  padding: 20px 50px;
  background: #30475e;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const HomeIcon = styled(AiFillHome)`
  padding: 5px;
  width: 30px;
  height: 30px;
  color: #ffffff;
`

export const MainContainer = styled.div`
  position: relative;
`

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`

export const ProductList = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  height: 75px;
  line-height: 75px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`
export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #30475e;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
