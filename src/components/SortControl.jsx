function SortControl({ value, onChange }) {
  return (
    <div className="mb-6">
      <label
        htmlFor="sort"
        className="mb-2 block font-medium"
      >
        Sort products
      </label>

      <select
        id="sort"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white p-3 focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Default</option>
        <option value="title-asc">Title A-Z</option>
        <option value="title-desc">Title Z-A</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    </div>
  )
}

export default SortControl