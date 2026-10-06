# React Product Explorer

React Product Explorer is a product browsing web application built with React and Tailwind CSS.

The application allows users to search for products, filter products by category, sort products, move between pages, and view product details.

## Features

- Search products
- Filter products by category
- Sort products by:
  - Title A-Z
  - Title Z-A
  - Price low to high
  - Price high to low
  - Rating high to low
- Pagination
- View product details
- Loading state
- Error state with retry
- Empty search state
- Responsive design
- API data fetching using a custom React hook

## Technologies Used

- React
- Vite
- JavaScript
- Tailwind CSS
- DummyJSON API

## Project Structure

```text
src/
├── components/
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── SearchField.jsx
│   ├── CategoryFilter.jsx
│   ├── SortControl.jsx
│   ├── ProductDetail.jsx
│   └── StateMessage.jsx
│
├── hooks/
│   └── useProducts.js
│
├── api.js
├── App.jsx
├── main.jsx
├── App.css
└── index.css