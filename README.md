# My E-Commerce Store

A responsive e-commerce web application developed as part of the **AIdeas Academy Real-Time Frontend Project**.

The project is built using **Next.js, JavaScript, and Tailwind CSS** and uses the **DummyJSON API** to fetch product and customer data.

## Project Features

### Customer Features

* Home page
* Product listing
* Product search
* Category filtering
* Price filtering
* Rating filtering
* Product sorting
* Pagination
* Product details
* Related products
* Add to Cart
* Update cart quantity
* Remove products from Cart
* Wishlist
* Remove products from Wishlist
* Login
* Register
* User Profile
* Checkout
* Order placement
* Order history

### Admin Features

* Admin Dashboard
* Product Management
* Add Product
* Edit Product
* Delete Product
* Customer Management
* Order Management

## Technologies Used

* Next.js
* JavaScript
* React
* Tailwind CSS
* HTML
* CSS
* Git
* GitHub
* DummyJSON API

## API

This project uses the DummyJSON API for product and user data.

Main API endpoints used:

* Products
* Product Details
* Products by Category
* Users / Customers
* User Login

API Website:

https://dummyjson.com/

## Project Structure

```text
ecommerce-project
│
├── public
│
├── src
│   ├── app
│   │   ├── admin
│   │   │   ├── customers
│   │   │   ├── dashboard
│   │   │   ├── orders
│   │   │   └── products
│   │   │
│   │   ├── cart
│   │   ├── checkout
│   │   ├── login
│   │   ├── orders
│   │   ├── products
│   │   ├── profile
│   │   ├── register
│   │   └── wishlist
│   │
│   ├── components
│   │   ├── layout
│   │   └── products
│   │
│   ├── context
│   │
│   └── services
│
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/haarika-javacodes/ecommerce-project.git
```

Move into the project folder:

```bash
cd ecommerce-project
```

Install dependencies:

```bash
npm install
```

## Run the Project

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Responsive Design

The application is designed to work on:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

The project was tested at different screen sizes including approximately:

* 375px
* 768px
* 1024px
* 1440px

## State Management

React Context API is used for managing:

* Cart
* Wishlist
* Orders

## GitHub Repository

GitHub Repository:

https://github.com/haarika-javacodes/ecommerce-project

## Project Purpose

This project was developed as a practical **Real-Time Frontend Project for AIdeas Academy's Java Full Stack Development course**.

It demonstrates the implementation of a complete responsive e-commerce frontend using modern frontend technologies and API integration.
