import ProductCard from "./ProductCard"

function ProductGrid({ products, onSelect }) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelect}
        />
      ))}
    </section>
  )
}

export default ProductGrid