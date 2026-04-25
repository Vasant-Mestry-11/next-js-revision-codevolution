import Link from "next/link";

export default function ProductsList() {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <h1>Products List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </div>
  );
}
