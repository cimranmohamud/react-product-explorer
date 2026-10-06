function ProductCard({ product, onSelect }) {
  return (
    <article
      onClick={() => onSelect(product.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onSelect(product.id)
        }
      }}
      tabIndex="0"
      role="button"
      className="cursor-pointer rounded-lg bg-white p-4 shadow transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full rounded object-cover"
      />

      <h2 className="mt-3 text-lg font-bold">
        {product.title}
      </h2>

      <p className="mt-2 text-gray-600">
        ${product.price}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        Rating: {product.rating}
      </p>

      <p className="mt-2 text-sm text-blue-600">
        Click to view details
      </p>
    </article>
  )
}

export default ProductCard