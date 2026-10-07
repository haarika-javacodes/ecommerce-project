import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-4">
      <div className="max-w-7xl mx-auto">

        {/* Store Name */}
        <div className="text-center mb-4">
          <h1 className="text-xl sm:text-2xl font-bold">
            My E-Commerce Store
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:text-base">

          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>

          <Link href="/products" className="hover:text-gray-200">
            Products
          </Link>

          <Link href="/wishlist" className="hover:text-gray-200">
            Wishlist
          </Link>

          <Link href="/cart" className="hover:text-gray-200">
            Cart
          </Link>

          <Link href="/orders" className="hover:text-gray-200">
            Orders
          </Link>

          <Link href="/login" className="hover:text-gray-200">
            Login
          </Link>

          <Link href="/profile" className="hover:text-gray-200">
            Profile
          </Link>

          <Link href="/register" className="hover:text-gray-200">
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}