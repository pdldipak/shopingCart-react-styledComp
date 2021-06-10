import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get(url)
        .then((res) => {
          setProducts(res.data)
          setLoading(false)
          setError(null)
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message)
        })
    }
    fetchProducts()
    // this clean up function use it to remove unnecessary behavior or prevent memory leaking issues
    return function cleanup() {
      setLoading(false)
    }
  }, [url])

  return { products, loading, error }
}

export default useFetch

// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       await axios.get(url).then((res) => {
//         console.log('data', res.data)
//         setProducts(res.data)
//         setLoading(false)
//         setError(null)
//       })
//     } catch (error) {
//       setLoading(false)
//       setError(error.message)
//     }
//   }
//   fetchProducts()
//   // // this clean up function use it to remove unnecessary behavior or prevent memory leaking issues
//   // return function cleanup() {
//   //   setLoading(false)
//   // }
// }, [url])
