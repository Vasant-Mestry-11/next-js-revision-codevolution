import Link from "next/link";

export default function ProductsList() {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <h1>Products List</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 3</Link>
      </h2>
    </div>
  );
}
