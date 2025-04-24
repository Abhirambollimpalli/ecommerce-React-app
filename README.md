# E-commerce React Application

A simple e-commerce application built with React and React Router DOM. This project demonstrates a basic online shopping experience with features like product browsing, shopping cart functionality, and user authentication.

## Features

- User authentication (login/signup)
- Product browsing by category (Men, Women, Children)
- Shopping cart functionality
- Responsive navigation

## Tech Stack

- React 19
- React Router DOM 7.3
- Vite 6
- Context API for state management
- Local Storage for user data persistence

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd router-nav
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Application Structure

- **Nav Component**: Main layout component with navigation sidebar
- **Home**: Landing page with featured products
- **Product**: Product categories with nested routes for Men, Women, and Children
- **Cart**: Shopping cart with quantity adjustment and removal functionality  
- **Authentication**: Signup and Login pages with form validation

## Project Structure

```
src/
├── App.jsx            # Main application component with router configuration
├── App.css            # Global styles
├── Login.jsx          # Login page component
├── NAV Component/     # Navigation components
│   └── Nav.jsx        # Sidebar navigation
├── ROUTER/            # Route components
│   ├── Cart.jsx       # Shopping cart
│   ├── CartContext.jsx # Context for shopping cart state
│   ├── Child.jsx      # Children's products
│   ├── Home.jsx       # Homepage
│   ├── Home.css       # Homepage styles
│   ├── Men.jsx        # Men's products
│   ├── Product.jsx    # Product categories
│   ├── Signup.jsx     # Signup page
│   └── Women.jsx      # Women's products
└── main.jsx           # Entry point
```

## Usage

- Navigate to `/signin` to create a new account
- Navigate to `/login` to log in with existing credentials
- Browse products by category through the `/product` route
- Add products to cart and manage quantities
- View cart contents in the `/cart` route

## Development

- Run `npm run dev` for development mode
- Run `npm run build` for production build
- Run `npm run preview` to preview the production build locally

## License

[MIT](LICENSE)