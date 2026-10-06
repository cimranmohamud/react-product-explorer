function ProductDetail({ product, onBack }) {
  return (
    <section className="rounded-lg bg-white p-6 shadow">
      <button
        onClick={onBack}
        className="mb-6 rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        ← Back to products
      </button>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            {product.title}
          </h2>

          <p className="mt-4 text-2xl font-bold text-blue-600">
            ${product.price}
          </p>

          <p className="mt-4 text-gray-700">
            {product.description}
          </p>

          <p className="mt-4">
            <strong>Category:</strong> {product.category}
          </p>

          <p className="mt-2">
            <strong>Rating:</strong> {product.rating}
          </p>

          <p className="mt-2">
            <strong>Stock:</strong> {product.stock}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail