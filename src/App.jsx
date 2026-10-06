import { useEffect, useState } from "react"
import ProductGrid from "./components/ProductGrid"
import ProductDetail from "./components/ProductDetail"
import SearchField from "./components/SearchField"
import CategoryFilter from "./components/CategoryFilter"
import SortControl from "./components/SortControl"
import StateMessage from "./components/StateMessage"
import useProducts from "./hooks/useProducts"
import { getCategories } from "./api"

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [search, setSearch] = useState("")
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState("")
  const [sort, setSort] = useState("")
  const [page, setPage] = useState(1)

  const [selectedProductId, setSelectedProductId] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [detailLoading, setDetailLoading] = useState(false)
  const [detailError, setDetailError] = useState("")

  const {
    items,
    total,
    loading,
    error,
    retry,
  } = useProducts(search, category, sort, page)

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data)
      })
      .catch(() => {
        setCategories([])
      })
  }, [])

  useEffect(() => {
    if (!selectedProductId) {
      return
    }

    setDetailLoading(true)
    setDetailError("")
    setSelectedProduct(null)

    fetch(`${API_URL}/products/${selectedProductId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found")
        }

        return response.json()
      })
      .then((data) => {
        setSelectedProduct(data)
        setDetailLoading(false)
      })
      .catch(() => {
        setDetailError("Product not found.")
        setDetailLoading(false)
      })
  }, [selectedProductId])

  function handleSearchChange(value) {
    setSearch(value)
    setPage(1)

    if (value) {
      setCategory("")
    }
  }

  function handleCategoryChange(value) {
    setCategory(value)
    setPage(1)

    if (value) {
      setSearch("")
    }
  }

  function handleSortChange(value) {
    setSort(value)
    setPage(1)
  }

  function handleBack() {
    setSelectedProductId(null)
    setSelectedProduct(null)
    setDetailError("")
  }

  function clearSearch() {
    setSearch("")
    setCategory("")
    setPage(1)
  }

  const limit = 12
  const totalPages = Math.ceil(total / limit)

  if (selectedProductId) {
    return (
      <main className="min-h-screen bg-gray-100 p-6">
        {detailLoading ? (
          <StateMessage
            type="loading"
            message="Loading product details..."
          />
        ) : detailError ? (
          <StateMessage
            type="error"
            message={detailError}
            onRetry={() => {
              setSelectedProductId(null)
              setTimeout(() => {
                setSelectedProductId(selectedProductId)
              }, 0)
            }}
          />
        ) : (
          <ProductDetail
            product={selectedProduct}
            onBack={handleBack}
          />
        )}
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">
        React Product Explorer
      </h1>

      <SearchField
        value={search}
        onChange={handleSearchChange}
      />

      <CategoryFilter
        categories={categories}
        value={category}
        onChange={handleCategoryChange}
      />

      <SortControl
        value={sort}
        onChange={handleSortChange}
      />

      {loading ? (
        <StateMessage
          type="loading"
          message="Loading products..."
        />
      ) : error ? (
        <StateMessage
          type="error"
          message={error}
          onRetry={retry}
        />
      ) : items.length === 0 ? (
        <StateMessage
          type="empty"
          message="No products found. There are 0 results."
          onClear={clearSearch}
        />
      ) : (
        <>
          <p className="mb-4 text-gray-600">
            Showing {items.length} of {total} products
          </p>

          <ProductGrid
            products={items}
            onSelect={setSelectedProductId}
          />

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="rounded bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              Previous
            </button>

            <span className="font-medium">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="rounded bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  )
}

export default App