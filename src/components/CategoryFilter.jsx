function CategoryFilter({ categories, value, onChange }) {
  return (
    <div className="mb-6">
      <label
        htmlFor="category"
        className="mb-2 block font-medium"
      >
        Category
      </label>

      <select
        id="category"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white p-3 focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All categories</option>

        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategoryFilter