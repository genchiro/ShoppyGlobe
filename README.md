# ShoppyGlobe E-commerce Application

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Redux](https://img.shields.io/badge/Redux-4.2.1-purple)
![React Router](https://img.shields.io/badge/React_Router-6.14.2-green)

ShoppyGlobe is a responsive e-commerce web application built with React, Redux, and React Router. It allows users to browse products, view detailed information, add items to a cart, and manage cart contents efficiently.

**GitHub Repository:** [https://github.com/am7876388/College_Project](https://github.com/am7876388/College_Project)

## Features

### 🛠 Component Structure
- **Modular Components**: Includes `Header`, `ProductList`, `ProductItem`, `ProductDetail`, `Cart`, `CartItem`, and `NotFound` components.
- **Reusable & Functional**: Utilizes PropTypes for type-checking and ensures component reusability.

### 🌐 Data Fetching
- **Dynamic Product Loading**: Fetches products from [DummyJSON API](https://dummyjson.com/products) using `useEffect` and custom hooks.
- **Product Details**: Fetches individual product data based on route parameters.
- **Error Handling**: Gracefully handles API errors with user-friendly messages.

### 🛒 State Management
- **Redux Integration**: Manages cart state (add/remove items, modify quantities) using Redux actions, reducers, and selectors.
- **Search Functionality**: Implements a search feature to filter products in real-time.

### 🚀 Performance Optimization
- **Code Splitting**: Uses `React.lazy` and `Suspense` for lazy loading components.

### 🎨 Styling
- **Responsive Design**: CSS media queries ensure compatibility across devices.
- **Clean UI**: Modern and intuitive user interface with interactive buttons and animations.

### 🔄 Routing
- **React Router**: Implements routes for Home, Product Details, Cart, and 404 pages.
- **Dynamic Routing**: Uses route parameters (e.g., `/products/:productId`) for product details.

## Installation

1. **Clone the Repository**
   git clone https://github.com/am7876388/College_Project
   cd College_Project
2. **Install Dependencies**
   npm install
3. **Run Project**
   npm run dev