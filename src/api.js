const API_URL = import.meta.env.VITE_API_URL

export async function getProducts(
  search = "",
  category = "",
  sort = "",
  page = 1,
  signal
) {
  const limit = 12
  const skip = (page - 1) * limit

  let sortBy = ""
  let order = ""

  if (sort === "title-asc") {
    sortBy = "title"
    order = "asc"
  } else if (sort === "title-desc") {
    sortBy = "title"
    order = "desc"
  } else if (sort === "price-asc") {
    sortBy = "price"
    order = "asc"
  } else if (sort === "price-desc") {
    sortBy = "price"
    order = "desc"
  } else if (sort === "rating-desc") {
    sortBy = "rating"
    order = "desc"
  }

  let url

  if (search) {
    url = `${API_URL}/products/search?q=${encodeURIComponent(
      search
    )}&limit=${limit}&skip=${skip}`
  } else if (category) {
    url = `${API_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
  } else {
    url = `${API_URL}/products?limit=${limit}&skip=${skip}`
  }

  if (sortBy) {
    url += `&sortBy=${sortBy}&order=${order}`
  }

  const response = await fetch(url, {
    signal,
  })

  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }

  return response.json()
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/products/categories`)

  if (!response.ok) {
    throw new Error("Failed to fetch categories")
  }

  return response.json()
}