function SearchField({ value, onChange }) {
  return (
    <div className="mb-6">
      <label
        htmlFor="search"
        className="mb-2 block font-medium"
      >
        Search products
      </label>

      <input
        id="search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a product..."
        className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default SearchField