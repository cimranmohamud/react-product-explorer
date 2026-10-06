function StateMessage({ type, message, onRetry, onClear }) {
  if (type === "loading") {
    return (
      <div
        className="flex flex-col items-center justify-center p-10"
        aria-live="polite"
      >
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

        <p className="mt-4 text-lg text-gray-600">
          {message || "Loading..."}
        </p>
      </div>
    )
  }

  if (type === "error") {
    return (
      <div
        className="rounded-lg bg-white p-6 text-center shadow"
        role="alert"
      >
        <p className="text-red-600">
          {message}
        </p>

        <button
          onClick={onRetry}
          className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Retry
        </button>
      </div>
    )
  }

  if (type === "empty") {
    return (
      <div className="rounded-lg bg-white p-6 text-center shadow">
        <p className="text-lg text-gray-700">
          {message}
        </p>

        <button
          onClick={onClear}
          className="mt-4 rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Clear search
        </button>
      </div>
    )
  }

  return null
}

export default StateMessage