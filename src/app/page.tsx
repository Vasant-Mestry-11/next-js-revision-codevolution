import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome home</h1>

      <div>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
      </div>
    </div>
  );
}
