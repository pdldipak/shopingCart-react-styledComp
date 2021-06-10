import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.styles.js'
import {
  MainContainer,
  NavBar,
  OverLay,
  ProductList,
  LoadingSpinner,
  HomeIcon,
} from './App.styles.js'
import Card from './components/cards/Card.js'
import GlobalStyles from './GlobalStyles.js'
import Products from './components/products/Products.js'
import Product from './components/product/Product.js'
import useFetch from './components/customHooks/useFetch.js'

function App() {
  const [isToggle, setToggle] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const { products, loading, error } = useFetch(
    `https://fakestoreapi.com/products`,
  )

  const addToCart = (product) => {
    const itemExist = cartItems.find((item) => item.id === product.id)
    if (itemExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...itemExist, qty: itemExist.qty + 1 }
            : item,
        ),
      )
    } else setCartItems([...cartItems, { ...product, qty: 1 }])
  }

  //remove item from cart
  const onRemovefromCart = (product) => {
    const itemExist = cartItems.find((item) => item.id === product.id)
    if (itemExist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...itemExist, qty: itemExist.qty - 1 }
            : item,
        ),
      )
    }
  }
  //method returns value of the specified Storage Object item.
  useEffect(() => {
    const localData = localStorage.getItem('cartItems')
    if (localData) {
      setCartItems(JSON.parse(localData))
    }
  }, [])

  //method sets the value of the specified Storage Object item
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <Router>
      <GlobalStyles />
      <NavBar>
        <Link to="/">
          <HomeIcon />
        </Link>

        {/* to load the Card component only after loading false, other wise Card component render multiple times */}
        {
          <Card
            isToggle={isToggle}
            setToggle={setToggle}
            cartItems={cartItems}
            addToCart={addToCart}
            onRemovefromCart={onRemovefromCart}
            setCartItems={setCartItems}
          />
        }
      </NavBar>
      <MainContainer>
        <Switch>
          {isToggle && <OverLay />}
          <Route path="/" exact>
            {loading && <LoadingSpinner />}
            {error && <p>{error}</p>}
            <ProductList>
              {products?.map((product) => {
                return (
                  <Products
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                  />
                )
              })}
            </ProductList>
          </Route>
          <Route path="/product/:id">
            <Product addToCart={addToCart}/>
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  )
}

export default App
