import { useCallback, useEffect, useState } from "react"
import { getProducts } from "../api"

function useProducts(search, category, sort, page) {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchProducts = useCallback(async (signal) => {
    setLoading(true)
    setError("")

    try {
      const data = await getProducts(
        search,
        category,
        sort,
        page,
        signal
      )

      setItems(data.products)
      setTotal(data.total)
    } catch (err) {
      if (err.name !== "AbortError") {
        setError("Failed to load products.")
      }
    } finally {
      if (!signal.aborted) {
        setLoading(false)
      }
    }
  }, [search, category, sort, page])

  useEffect(() => {
    const controller = new AbortController()

    fetchProducts(controller.signal)

    return () => {
      controller.abort()
    }
  }, [fetchProducts])

  const retry = () => {
    const controller = new AbortController()
    fetchProducts(controller.signal)
  }

  return {
    items,
    total,
    loading,
    error,
    retry,
  }
}

export default useProducts