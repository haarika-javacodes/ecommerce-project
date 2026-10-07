import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My E-Commerce Store
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Shop clothes, mobiles, electronics and more.
        </p>

        <Link
          href="/products?category=smartphones"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Shop Now
        </Link>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Clothes
            </h2>
            <p className="mt-2 text-gray-600">
              Explore fashion and clothing products.
            </p>
            <Link
              href="/products"
              className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800"
            >
              Shop Clothes →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Mobiles
            </h2>
            <p className="mt-2 text-gray-600">
              Find smartphones and mobile products.
            </p>
            <Link
              href="/products"
              className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800"
            >
              Shop Mobiles →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Electronics
            </h2>
            <p className="mt-2 text-gray-600">
              Discover electronics and accessories.
            </p>
            <Link
              href="/products"
              className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800"
            >
              Shop Electronics →
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}